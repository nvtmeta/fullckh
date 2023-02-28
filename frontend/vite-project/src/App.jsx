import React from 'react';
import { Outlet } from 'react-router-dom';
import { Banner, Navbar } from './components';
import Sales from './components/Sales';
import Benefit from './components/Benefit';
import styles from './style';
import Coach from './components/Coach';
import Product from './components/Product';
import VideosImgPrev from './components/VideosImgPrev';
import Review from './components/Review';
import FooterA from './components/Footer';

const App = () => {
  return (
    <div className={`${styles.boxWidth} overflow-x-hidden overflow-y-auto`}>
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
        <Product />
        <VideosImgPrev />
        <Review />
        <FooterA />
      </div>
    </div>
  );
};

export default App;
