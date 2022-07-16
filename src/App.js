import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';



function App(current, products) {
  const [search, setSearch] = useState();

  return (

    <BrowserRouter>
      <Header setSearch={setSearch} />
      <div>
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
          {!current ? (
            <Navigate to="/cart" />
          ) : (
            <Route path="/detail/:id" element={<Detail />} />
          )}
        </Routes>


      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    products: state.shop.product
  }
}
export default connect(mapStateToProps)(App);
