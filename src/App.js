import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from './component/ProductList';
import ProductCreate from './component/ProductCreate';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>  
        <Router>
          <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/create" element={<ProductCreate/>}/>
          </Routes>
        <ToastContainer/>
        </Router>
    </>
  );
}

export default App;
