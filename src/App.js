import './App.css';
import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';
import { connect } from 'react-redux';



function App(current) {
  return (
   
    <BrowserRouter>
      <Header/>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
         {!current ?(
          <Navigate to="/cart"/>
         ):(
          <Route path="/detail/:id" element={<Detail/>} />
         )}
        
      </Routes>
      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) =>{
  return{
    current: state.shop.currentItem
  }
}
export default connect(mapStateToProps)(App);
