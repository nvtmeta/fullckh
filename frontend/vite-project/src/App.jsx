import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner, Footer, Navbar } from './components';
import Sales from './components/Sales';

const App = () => {
  return (
    <div className="w-full">
      <div className="flex sm:flex-row flex-col w-full z-2">
        <Navbar />
      </div>
      <div className="content  sm:flex-row flex-col w-full ">
        <Banner />
        <Sales />
        <Footer />
      </div>
    </div>
  );
};

export default App;
