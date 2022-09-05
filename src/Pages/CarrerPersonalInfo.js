import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import PersonalInfoForm from '../Components/CarrerPages/JobApplication/PersonalInfoForm';


const CarrerPersonalInfo = () => {


    return (

        
        <>

            <div className="Overflow">

                <Menubar active='career'></Menubar>

                <PersonalInfoForm></PersonalInfoForm>

                <Footer></Footer>

            </div>

            

        </>

    )


}

export default CarrerPersonalInfo