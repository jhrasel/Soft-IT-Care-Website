import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import PersonalInfoForm from '../Components/CarrerPages/JobApplication/PersonalInfoForm';
import CarrerDetailsBanner from '../Components/CarrerPages/CareerDetails/CarrerDetailsBanner';

const CarrerDetails = ({info, setInfo,handleFile,page,setPage,FormTitles}) => {


    return (


        <>
        
            <div className="Overflow">

                <Menubar active='career'></Menubar>

                <CarrerDetailsBanner></CarrerDetailsBanner>

                <Footer></Footer>

            </div>


        </>

        
    )


}

export default CarrerDetails