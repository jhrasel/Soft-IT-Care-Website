import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import Banner from '../Components/HomePages/Banner';
import AboutUs from '../Components/HomePages/AboutUs';
import OurService from '../Components/HomePages/OurService';
import WorkProcess from '../Components/HomePages/WorkProcess';
import OurPortfolio from '../Components/HomePages/OurPortfolio';
import WhyUs from '../Components/HomePages/WhyUs';
import OurClients from '../Components/HomePages/OurClients';
import Reviews from '../Components/HomePages/Reviews';
import OurConcern from '../Components/HomePages/OurConcern';
import BusinessProfile from '../Components/HomePages/BusinessProfile';
import Gallery from '../Components/HomePages/Gallery';
import HowToStart from '../Components/HomePages/HowToStart';
import Blog from '../Components/HomePages/Blog';

const Home = () => {




    return (


        <>

            <div className="Overflow">

                <Menubar active='home'></Menubar>

                <Banner></Banner>
                <AboutUs></AboutUs>
                <OurService></OurService>
                <WorkProcess></WorkProcess>
                <OurPortfolio></OurPortfolio>
                <WhyUs></WhyUs>
                <OurClients></OurClients>
                <Reviews></Reviews>
                <OurConcern></OurConcern>
                <BusinessProfile></BusinessProfile>
                {/* <Gallery></Gallery> */}
                <Blog></Blog>
                <HowToStart></HowToStart>
                
                <Footer></Footer>

            </div>

        </>


    )


}

export default Home