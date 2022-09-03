import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerSuccessfulForm from '../Components/CarrerPages/JobApplication/CarrerSuccessfulForm';

const carrerSuccessful = () => {


    return (
        
        
        <>

            <div className="Overflow">

                <Menubar active='career'></Menubar>

                <CarrerSuccessfulForm></CarrerSuccessfulForm>

                <Footer></Footer>

            </div>

            

        </>


    )

}

export default carrerSuccessful