import React from 'react';
import styles from '../style';
import { banner, banner2, banner3 } from '../assets';
import { Slide } from 'react-slideshow-image';
import { Button } from 'flowbite-react';

const Banner = () => {
  const imgCollection = [
    {
      id: 1,
      imgName: 'imgMain',
      imgFile: banner,
    },
    {
      id: 2,
      imgName: 'imgMain2',
      imgFile: banner2,
    },
    {
      id: 3,
      imgName: 'imgIntro',
      imgFile: '',
    },
  ];
  return (
    <div
      className={`${styles.boxWidth} mt-[120px]  z-0
  `}
    >
      <div>
        <Slide className="smooth-transition">
          {imgCollection.map((item) => (
            <div
              key={item.id}
              className={`w-[94%] 
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
                   p-6 w-full self-start xs:mt-10`}
                  >
                    <h1 className={`${styles.heading2} `}>
                      Học viện cầu lông{' '}
                      <span className="text-gradient">CKH</span>
                    </h1>
                    <p
                      className={`${styles.paragraph} font-sans mt-4
                    w-full
                  `}
                    >
                      Tuyển sinh lớp cầu lông cơ bản và nâng cao{' '}
                      <br className="xs:block hidden " /> dành cho trẻ em và
                      người lớn
                    </p>
                    <Button
                      color="black"
                      pill={true}
                      className="   
                          font-poppins
                          font-medium
                          hover:bg-primary smooth-transition md:mt-18 
                          mt-16
                           p-2 bg-secondary
                "
                    >
                      <span className="text-xl  text-black"> Đăng ký ngay</span>
                    </Button>
                  </div>
                  {/* imgbanner */}
                  <div className="hidden md:block  self-start mt-4">
                    <img src={banner3} />
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
