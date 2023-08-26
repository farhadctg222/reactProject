import React from 'react';
import Home from './Componet/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './Componet/Product/Product';
import NotFound from './Componet/NotFound/NotFound';

function App(){
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home />}></Route>
     
        <Route path='/product'element={<Product />}></Route>
     
        <Route path='/home'element={<Home />}></Route>
      
        <Route path='*'exact element={<NotFound/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;