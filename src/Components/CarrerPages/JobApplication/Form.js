import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import CarrerOtherInfo from "../../../Pages/CarrerOtherInfo";
import CarrerPersonalInfo from "../../../Pages/CarrerPersonalInfo";
import { baseUrl } from "../../../Url";

const Form = () => {
  const [page, setPage] = useState(0);
  let { application_id } = useParams();
  const navigate = useNavigate();
  const [cv, setCv] = useState();
  const [info, setInfo] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    expected_salary: "",
    portfolio_or_github_link: "",
    project_link: "",
    linkedIn_profile_link: "",
    why_fit_for_job: "",
  });

  const handleFile = (e) => {
    setCv(e.target.files[0]);
  };
  const FormTitles = ["Personal Info", "Other Information"];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CarrerPersonalInfo
          handleFile={handleFile}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
          info={info}
          setInfo={setInfo}
        />
      );
    } else {
      return (
        <CarrerOtherInfo
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
          info={info}
          setInfo={setInfo}
          handleSubmission={handleSubmission}
        />
      );
    }
  };
  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("cv_or_resume", cv);
    formData.append("job_id", application_id);
    formData.append("full_name", info.full_name);
    formData.append("email_address", info.email_address);
    formData.append("phone_number", info.phone_number);
    formData.append("expected_salary", info.expected_salary);
    formData.append("portfolio_or_github_link", info.portfolio_or_github_link);
    formData.append("project_link", info.project_link);
    formData.append("linkedIn_profile_link", info.linkedIn_profile_link);
    formData.append("why_fit_for_job", info.why_fit_for_job);
    console.log(formData);
    fetch(baseUrl + "/job-application/store", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        toast("Successfully Job Post !");
        navigate("/carrer-successfull");
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Please, try again",
        });
      });
  };

  return (
    <>
      <div className="form">
        <div className="progressbar"></div>
        <div className="form-container">
          <div className="header"></div>
          <div className="body">{PageDisplay()}</div>
        </div>
      </div>
    </>
  );
};

export default Form;
