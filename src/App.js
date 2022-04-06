import logo from './logo.svg';
import './App.css';
import Home from './Recources/Component/Home';
import Product from './Recources/Component/Product';
import { Routes, Route } from "react-router-dom";
import Header from './Recources/Component/Header';
import Footer from './Recources/Component/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagsInput from './Recources/Common/InputTag';
function App() {
  return (
    <div>
   
    <Header></Header>
   
    <Routes>
      <Route path="/intershiptask" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
    <Footer></Footer>
  </div>

  );
}

export default App;
