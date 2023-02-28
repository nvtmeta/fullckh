import React from 'react';
import styles, { layout } from '../style';
import { CoachSum } from '../Constants';
const Coach = () => {
  return (
    <div className={` flex flex-col   max-w-full `}>
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center
      `}
      >
        <h1>Đội ngũ HLV</h1>
      </div>
      {CoachSum.map((item) => (
        <div
          className={`flex flex-col
          ${item.id === 2 ? 'md:flex-row-reverse' : 'md:flex-row'}
          ${item.id === 2 && 'md:gap-14'}
          md:mt-6 max-w-full m-6 md:pl-0 pl-1
          md:gap-0 gap-10
          `}
          key={item.id}
        >
          <img
            src={item.img}
            alt="Cuong"
            className={`rounded-[50px]
              object-cover
              md:w-[300px] md:h-[400px] w-[240px] h-[320px] box-shadow-2
             ${item.id === 2 ? 'md:mr-10' : 'md:ml-8 '}
                md:mt-0 mt-5
                ml-6
              `}
          />
          {/* content coach */}
          {/* name coach */}
          <div
            className={`flex flex-col  md:mt-6 md:pl-10
          `}
          >
            <div>
              <h1
                className={`font-poppins font-semibold 
              xs:text-[30px] text-[23px] text-gradient-3 flex-1 `}
              >
                {item.name}
              </h1>
            </div>
            {/* reward of coach*/}
            {item.content.map((reward, index) => (
              <h2
                key={index}
                className={`font-poppins font-semibold 
                   flex flex-col md:text-[24px] text-[20px] flex-1 
                   ${index !== 0 ? 'md:mt-[-2%]' : 'md:mt-4'}
                   md:mt-0 mt-4
                   `}
              >
                {reward}
              </h2>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coach;
