import React from "react";
import Menubar from "../Components/Commons/Menubar";
import Footer from "../Components/Commons/Footer";
import PersonalInfoForm from "../Components/CarrerPages/JobApplication/PersonalInfoForm";

const CarrerPersonalInfo = ({
  info,
  setInfo,
  handleFile,
  page,
  setPage,
  FormTitles,
}) => {
  return (
    <>
      <div className="Overflow">
        <Menubar active="career"></Menubar>

        <PersonalInfoForm
          handleFile={handleFile}
          page={page}
          setPage={setPage}
          FormTitles={FormTitles}
          info={info}
          setInfo={setInfo}
        ></PersonalInfoForm>

        <Footer></Footer>
      </div>
    </>
  );
};

export default CarrerPersonalInfo;
