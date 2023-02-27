import React from 'react';
import { badminton, badmintonPlayer, sale } from '../assets';
import styles, { layout } from '../style';
import { Checkmark } from 'react-checkmark';
import { BiHappyHeartEyes } from 'react-icons/Bi';
const Sales = () => {
  return (
    <>
      <div className={`${layout.section} w-[90%] m-auto `}>
        <div
          className={`bg-[#ccc]  ${styles.padding} rounded-[100px]
          sales flex justify-center flex-row relative
        `}
        >
          {/* content sale */}
          <div className="flex flex-col">
            {' '}
            <h1
              className={` 'font-poppins font-semibold xs:text-[48px]
             text-[30px]  xs:leading-[76.8px] 
             leading-[50.8px] w-full text-white  text-center  `}
            >
              Tuyển sinh lớp cầu lông <br />
              <span className="text-gradient">cơ bản</span> và{' '}
              <span className="text-gradient-2">nâng cao</span> <br /> dành cho{' '}
              <span className="text-gradient-3">trẻ em</span> <br /> và{' '}
              <span className="text-gradient-3">người lớn</span>
            </h1>
            <p
              className={`${styles.padding} flex items-center
             justify-between w-full`}
            >
              <div className={`${styles.heading2} flex flex-col w-[40%] `}>
                <span className="text-gradient-3">ĐẶC BIỆT</span>
                đăng ký ngay để được:
              </div>
              {/* privilege */}
              <div className="flex w-[50%]  flex-col">
                <div className="flex flex-row gap-2">
                  <BiHappyHeartEyes className="w-[100px] h-[100px] text-blue-500" />
                  <h2>
                    Giảm 10% học phí cho 5 học viên ĐĂNG KÝ ĐẦU TIÊN, và giảm
                    15% cho những học viên đăng ký học THEO CẶP (bạn bè, người
                    yêu,…)
                  </h2>
                </div>
                <BiHappyHeartEyes className="w-[100px] h-[100px] text-blue-500" />
                Tặng miễn phí ÁO CỦA HỌC VIỆN( cho những học viên lần đầu đăng
                ký).
              </div>
            </p>
          </div>
          {/* img for sale */}
          <img src={sale} className={`w-[100px] h-[100px] absolute right-12`} />
          <img
            src={badmintonPlayer}
            className={`w-[100px] h-[100px] absolute   left-12`}
          />
        </div>
      </div>
    </>
  );
};

export default Sales;
