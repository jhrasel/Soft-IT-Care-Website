/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import CarrerItem from '../Components/BlogPages/BlogItem';
import BlogBanner from '../Components/BlogPages/BlogBanner';
import { SkeletonTheme } from 'react-loading-skeleton';

const Blog = () => {

    let [isLoad, setIsLoad] = useState(true);

    useEffect(() => {

        setIsLoad(false)

    },[])

    return (


        <>
            
            <div className="Overflow">

                <SkeletonTheme highlightColor="#5F5F5F">

                    <Menubar active='blog'></Menubar>

                    <BlogBanner></BlogBanner>
                    <CarrerItem></CarrerItem>
                    
                    <Footer></Footer>

                </SkeletonTheme>

            </div>

        </>

    )


}

export default Blog