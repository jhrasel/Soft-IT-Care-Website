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


function App() {


  return (
    

    <>
    
      <BrowserRouter>
      
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
