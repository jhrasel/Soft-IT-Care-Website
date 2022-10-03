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
import ScrollTop from './ScrollTop';
import Form from './Components/CarrerPages/JobApplication/Form';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';

import ScrollToTop from "react-scroll-to-top";

function App() {
  

  return (
    

    <>

      
      <BrowserRouter count={3}>
      
        <ScrollTop />

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

        <ScrollToTop smooth className='up-down'
        top = "500"
        viewBox="0 0 24 24"
        svgPath="M12.3539429,7.1469727c-0.0462036-0.0463257-0.1016235-0.0830078-0.1630249-0.1083984c-0.0580444-0.0239258-0.1194458-0.0354004-0.1812134-0.0366211C12.0062866,7.0018921,12.003418,7,12,7c-0.0023804,0-0.0043945,0.0012817-0.0067749,0.0013428C11.930481,7.0021973,11.8678589,7.0142212,11.80896,7.0385742c-0.0614014,0.0253906-0.1166382,0.0620728-0.1628418,0.1083984l-4.4995728,4.4995728c-0.1871948,0.1937256-0.1871948,0.5009155,0,0.6947021c0.1918335,0.1986084,0.5083618,0.2041016,0.7069702,0.0122681L11.5,8.7069702v7.7935791C11.5001831,16.7765503,11.723999,17.0001831,12,17h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V8.7069702l3.6464844,3.6465454C16.2401123,12.4474487,16.3673706,12.5001831,16.5,12.5c0.1325073,0,0.2596436-0.0526733,0.3533936-0.1463623c0.1952515-0.1952515,0.1953735-0.5118408,0.0001221-0.7070923L12.3539429,7.1469727z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9682617,0.0056152,8.9943848,4.0317383,9,9C21,16.9705811,16.9705811,21,12,21z" />

        

      </BrowserRouter>
        

    </>


  );


}

export default App;
