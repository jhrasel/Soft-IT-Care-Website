import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerItem from '../Components/BlogPages/BlogItem';
import BlogBanner from '../Components/BlogPages/BlogBanner';

const Blog = () => {


    return (


        <>
        

            <div className="Overflow">

                <Menubar active='blog'></Menubar>

                <BlogBanner></BlogBanner>
                <CarrerItem></CarrerItem>
                
                <Footer></Footer>

            </div>


        </>

    )


}

export default Blog