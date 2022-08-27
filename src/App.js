import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Carrer } from './Pages/Carrer';
import './style.css';

function App() {


  return (
    

    <>
    
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Carrer />}></Route>

        </Routes>

      </BrowserRouter>

    </>


  );


}

export default App;
