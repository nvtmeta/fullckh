import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner, Footer, Navbar } from './components';
import Sales from './components/Sales';
import Benefit from './components/Benefit';
import styles from './style';
import Coach from './components/Coach';

const App = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <div
        className={`${styles.boxWidth} flex sm:flex-row flex-col w-full z-2`}
      >
        <Navbar />
      </div>
      <div className={`${styles.boxWidth} flex  flex-col w-full z-2`}>
        <Banner />
        <Sales />
        <Benefit />
        <Coach />
        <Footer />
      </div>
    </div>
  );
};

export default App;
