import React from "react";
import Menubar from "../Components/Commons/Menubar";
import Footer from "../Components/Commons/Footer";
import OtherInfoForm from "../Components/CarrerPages/JobApplication/OtherInfoForm";

const CarrerOtherInfo = ({
  info,
  setInfo,
  page,
  setPage,
  FormTitles,
  handleSubmission,
}) => {
  return (
    <>
      <div className="Overflow">
        <Menubar active="career"></Menubar>

        <OtherInfoForm
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
          info={info}
          setInfo={setInfo}
          handleSubmission={handleSubmission}
        ></OtherInfoForm>

        <Footer></Footer>
      </div>
    </>
  );
};

export default CarrerOtherInfo;
