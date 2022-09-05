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

function App() {


  return (
    

    <>
    
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/carrer" element={<Carrer />}></Route>
          <Route path="/carrer-details" element={<CarrerDetails />}></Route>
          <Route path="/carrer-personal-info" element={<CarrerPersonalInfo />}></Route>
          <Route path="/carrer-other-info" element={<CarrerOtherInfo />}></Route>
          <Route path="/carrer-successfull" element={<CarrerSuccessful />}></Route>

        </Routes>

      </BrowserRouter>

    </>


  );


}

export default App;
