import React from 'react';
import { Benefits } from '../Constants';
import styles, { layout } from '../style';
import { Checkmark } from 'react-checkmark';

const Benefit = () => {
  return (
    <div
      className={`${layout.section} ${styles.flexCenter} 
     md:w-full md:ml-[8%]  `}
    >
      {/* heading */}
      <div className={`flex flex-col justify-center md:w-full w-[90%]  `}>
        <div
          className={`${styles.heading3} flex flex-col w-full md:ml-[20%]  `}
        >
          <h1>
            Lợi ích khi tham gia{' '}
            <span className="md:inline-block hidden">vào</span>
          </h1>
          <div>
            Học viện cầu lông <span className="text-gradient">CKH</span>
          </div>
        </div>
        {/* content benefit */}
        <div className={`${styles.boxWidth} flex-col  w-full mt-6 `}>
          {Benefits.map((item) => (
            <div
              key={item.id}
              className={`font-poppins font-[500] text-dark 
              xs:text-[26px] text-[20px] leading-[34.8px] 
                `}
            >
              <div
                className={`flex md:ml-[14%] justify-start gap-4 pb-4  items-center `}
              >
                <div className="flex  ">
                  <Checkmark />
                </div>
                <h1 className={`font-poppins font-semibold `}>
                  {item.content}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
