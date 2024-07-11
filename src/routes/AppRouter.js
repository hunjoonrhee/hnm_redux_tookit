import React from 'react';
import { Route, Routes } from 'react-router';
import Login from '../page/Login';
import ProductAll from '../page/ProductAll';
import ProductDetail from '../page/ProductDetail';
import RegisterPage from '../page/RegisterPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductAll />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product/:sku" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRouter;
