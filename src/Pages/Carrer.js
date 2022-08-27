import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerBanner from '../Components/CarrerPages/CarrerBanner';
import OurVacancie from '../Components/CarrerPages/OurVacancie';
import WeOffer from '../Components/CarrerPages/WeOffer';



export const Carrer = () => {


    return (


        <>


            <Menubar active='career'></Menubar>

            <CarrerBanner></CarrerBanner>

            <OurVacancie></OurVacancie>

            <WeOffer></WeOffer>

            <div className="section_gaps"></div>

            <Footer></Footer>



        </>

        
    )


}


