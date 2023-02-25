import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Videos from './pages/Videos';
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/video" element={<Videos />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
