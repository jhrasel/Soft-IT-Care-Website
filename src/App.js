/* eslint-disable jsx-a11y/alt-text */
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Carrer } from './Pages/Carrer';
import CarrerDetails from './Pages/CarrerDetails';
import CarrerOtherInfo from './Pages/CarrerOtherInfo';
import CarrerPersonalInfo from './Pages/CarrerPersonalInfo';
import CarrerSuccessful from './Pages/CarrerSuccessful';
import Home from './Pages/Home';


import './style.css';
import './media.css';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import ScrollToTop from './ScrollToTop';
import Form from './Components/CarrerPages/JobApplication/Form';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';

function App() {

  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);

  }, [])

  return (
    

    <>

      
      <BrowserRouter count={3}>
      
        <ScrollToTop />

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/carrer" element={<Carrer />}></Route>
          <Route path="/carrer-details/:id" element={<CarrerDetails />}></Route>
          <Route path="/job_application/:application_id" element={<Form/>}></Route>
          {/* <Route path="/carrer-personal-info" element={<CarrerPersonalInfo />}></Route>
          <Route path="/carrer-other-info" element={<CarrerOtherInfo />}></Route> */}
          <Route path="/carrer-successfull" element={<CarrerSuccessful />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog-details/:blog_id" element={<BlogDetails />}></Route>

        </Routes>

      </BrowserRouter>
        

    </>


  );


}

export default App;
