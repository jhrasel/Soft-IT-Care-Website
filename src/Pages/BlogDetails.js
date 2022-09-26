import React from 'react';
import Menubar from '../Components/Commons/Menubar';
import Footer from '../Components/Commons/Footer';
import BlogDetailPage from '../Components/BlogPages/BlogDetailPage';

const BlogDetails = () => {


    return (


        <>


            <div className="Overflow">

                <Menubar active='blog'></Menubar>

                <BlogDetailPage></BlogDetailPage>

                <Footer></Footer>

            </div>



        </>

        
    )


}

export default BlogDetails