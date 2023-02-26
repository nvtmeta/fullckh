import React from 'react';
import styles from '../style';
import bannerImg from '../assets/banner.png';
import bannerImg2 from '../assets/banner2.jpg';
import bannerImg3 from '../assets/images-_1_.svg';
import { Slide } from 'react-slideshow-image';

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
      flex justify-between items-center   
  `}
    >
      <Slide>
        {imgCollection.map((item) => (
          <div
            key={item.id}
            className={`w-[90%] 
              mx-auto smooth-transition flex  rounded-3xl 
              ${item.id === 3 ? 'banner-gradient' : ''}
              `}
          >
            {/* banner content img 3 */}
            {item.id === 3 ? (
              <div
                className={`${styles.boxWidth} h-[300px]
              flex  items-center 
              
              `}
              >
                <div
                  className={` text-white font-poppins
                   font-bold
                   p-6 w-full `}
                >
                  <h1 className={`${styles.heading2}`}>
                    Học viện cầu lông <span className="text-gradient">CKH</span>
                  </h1>
                  <p className={`${styles.paragraph} font-sans mt-4 `}>
                    Tuyển sinh lớp cầu lông cơ bản và nâng cao dành cho trẻ em
                    và người lớn
                  </p>
                </div>
                {/* imgbanner */}
                <div>
                  <img src={bannerImg3} />
                </div>
              </div>
            ) : (
              <img
                className={` object-contain  
                rounded-3xl w-full auto`}
                src={item.imgFile}
                alt={item.imgName}
              />
            )}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Banner;
