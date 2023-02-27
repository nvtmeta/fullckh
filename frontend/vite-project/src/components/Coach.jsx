import React from 'react';
import styles, { layout } from '../style';
import { CoachSum } from '../Constants';
import { Card } from 'flowbite-react';
import AiOutlineStar from 'react-icons/Ai';
const Coach = () => {
  return (
    <div className={` flex flex-col justify-center w-full `}>
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center
      `}
      >
        <h1>Đội ngũ HLV</h1>
      </div>
      {CoachSum.map((item) => (
        <div className={`flex mt-6 max-w-full`}>
          <img
            src={item.img}
            alt="Cuong"
            className={`rounded-[50px]
              object-cover
              w-[300px] h-[500px] ml-8
              `}
          />
          {/* content coach */}
          <div
            key={item.id}
            className={`font-poppins font-[500] text-dark 
              xs:text-[26px] text-[20px] leading-[34.8px] 
                `}
          >
            <div
              className={`flex flex-col md:ml-[14%] justify-start gap-4 pb-4  items-center `}
            >
              <div className="flex   "></div>
              <h1 className={`font-poppins font-semibold flex flex-col `}>
                <h2>{item.content[0]}</h2>
                <h2>{item.content[2]}</h2>
                <h2>{item.content[3]}</h2>
                <h2>{item.content[4]}</h2>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coach;
