import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router";
import Deuxiemepage from './deuxiemepage';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Cats from './components/Cats/Cats';
import CatDetail from './components/Cats/CatDetail';
import DetailsOneProd from './components/Products/DetailsOneProd';
const root = document.getElementById("root");

ReactDOM.createRoot(root as any).render(

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/products" element={<Products />} /> 
      <Route path="/deuxiemepage" element={<Deuxiemepage />} />
      <Route path="/cats" element ={<Cats/>} />
      <Route path="/cats/:id"   element ={<CatDetail/>} />
      <Route path='productsdetails/:id' element={<DetailsOneProd/>}    />
    </Routes>
  </BrowserRouter>,
 
);

reportWebVitals();
