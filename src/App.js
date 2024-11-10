// src/App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Onboarding from './pages/OnBoarding';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:categoryIndex/:itemIndex" element={<Product />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
