import React from 'react';
import styles from '../style';
import bannerImg from '../assets/banner.png';
import bannerImg2 from '../assets/banner2.jpg';
import { Slide } from 'react-slideshow-image';
import bannerImg3 from '../assets/images-_1_.svg';
import Button from './Button';

const Banner = () => {
  const imgCollection = [
    {
      id: 1,
      imgName: 'imgMain',
      imgFile: bannerImg,
    },
    {
      id: 2,
      imgName: 'imgMain2',
      imgFile: bannerImg2,
    },
    {
      id: 3,
      imgName: 'imgIntro',
      imgFile: '',
    },
  ];
  return (
    <div
      className={`${styles.boxWidth}  
  `}
    >
      <div>
        <Slide>
          {imgCollection.map((item) => (
            <div
              key={item.id}
              className={`w-[96%] 
              mx-auto smooth-transition flex  rounded-3xl 
              ${item.id === 3 ? 'banner-gradient' : ''}
              `}
            >
              {/* banner content img 3 */}
              {item.id === 3 ? (
                <div
                  className={`${styles.boxWidth} h-[400px]
              flex items-center   
              
              `}
                >
                  <div
                    className={` text-white font-poppins
                   font-bold
                   p-6 w-full self-start mt-10`}
                  >
                    <h1 className={`${styles.heading2}`}>
                      Học viện cầu lông{' '}
                      <span className="text-gradient">CKH</span>
                    </h1>
                    <p className={`${styles.paragraph} font-sans mt-4 `}>
                      Tuyển sinh lớp cầu lông cơ bản và nâng cao <br /> dành cho
                      trẻ em và người lớn
                    </p>
                    <Button />
                  </div>
                  {/* imgbanner */}
                  <div>
                    <img src={bannerImg3} />
                  </div>
                </div>
              ) : (
                <img
                  className={` object-cover  
                rounded-3xl w-full auto h-[400px] `}
                  src={item.imgFile}
                  alt={item.imgName}
                />
              )}
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Banner;
