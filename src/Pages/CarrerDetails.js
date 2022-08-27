import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerDetailsBanner from '../Components/CarrerPages/CareerDetails/CarrerDetailsBanner';
import WhoWeAre from '../Components/CarrerPages/CareerDetails/WhoWeAre';
import VacancyDetails from '../Components/CarrerPages/CareerDetails/VacancyDetails';

const CarrerDetails = () => {


    return (


        <>
        

            <Menubar active='career'></Menubar>

            <CarrerDetailsBanner></CarrerDetailsBanner>

            <WhoWeAre></WhoWeAre>

            <VacancyDetails></VacancyDetails>

            <Footer></Footer>


        </>

        
    )


}

export default CarrerDetails