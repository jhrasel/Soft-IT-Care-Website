import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerBanner from '../Components/CarrerPages/CarrerBanner';
import OurVacancie from '../Components/CarrerPages/OurVacancie';
import WeOffer from '../Components/CarrerPages/WeOffer';



export const Carrer = () => {


    return (


        <>


            <div className="Overflow">

                <Menubar active='career'></Menubar>

                <CarrerBanner></CarrerBanner>

                <OurVacancie></OurVacancie>

                <WeOffer></WeOffer>

                <Footer></Footer>

            </div>



        </>

        
    )


}


