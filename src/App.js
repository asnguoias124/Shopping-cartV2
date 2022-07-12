import './App.css';
import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';

function App() {
  return (
   
    <BrowserRouter>
      <Header/>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
