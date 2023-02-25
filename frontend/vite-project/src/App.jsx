import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner, Footer, Navbar } from './components';

const App = () => {
  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col w-full ">
        <Navbar />
      </div>
      <div className="content">
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default App;
