import React from 'react';
import { badmintonPlayer, sale } from '../assets';
import styles, { layout } from '../style';
import { Privilege } from '../Constants';
import { Button } from 'flowbite-react';
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
              className={`font-poppins font-semibold xs:text-[40px]
             text-[30px]  xs:leading-[76.8px] 
             leading-[50.8px] w-full text-white  text-center  `}
            >
              Tuyển sinh <br className="md:hidden  " /> lớp cầu lông <br />
              <span className="text-gradient ">cơ bản</span> và{' '}
              <br className="md:hidden" />
              <span className="text-gradient-2">nâng cao</span> <br /> dành cho{' '}
              <span className="text-gradient-3">trẻ em</span> <br /> và{' '}
              <span className="text-gradient-3">người lớn</span>
            </h1>
            <div
              className={`${styles.padding} flex md:flex-row flex-col items-center
             justify-between w-full mt-8`}
            >
              <div
                className={`${styles.heading2} mb-6 flex flex-col md:w-[40%] w-full flex-1 `}
              >
                <span className="text-gradient-3  md:text-left text-center">
                  ĐẶC BIỆT
                </span>
                <span className="  md:text-left text-center ">
                  Đăng ký ngay{' '}
                </span>
                <span className="md:text-left text-center mr-4">để được </span>
              </div>
              {/* privilege */}
              <div
                className={`${styles.flexCenter} flex-col md:w-[50%]  w-full`}
              >
                {Privilege.map((item) => (
                  <div
                    className={`${styles.flexCenter} relative p-4`}
                    key={item.id}
                  >
                    <div
                      className={`${styles.flexCenter} md:relative md:left-0 absolute left-[-36px] md:mr-4`}
                    >
                      <item.icon className="w-10 h-10 text-blue-400  " />
                    </div>
                    <p
                      className={`font-poppins  font-[500]
                     text-white xs:text-[20px] 
                     text-[18px] md:leading-[34.8px] leading-[28.8px]
                     mr-[-10%]
                     `}
                    >
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Button
              color="black"
              pill={true}
              className="   
              font-poppins
               font-medium
                hover:bg-primary smooth-transition md:mt-6 
                bg-secondary md:p-4 md:w-[30%] m-auto py-4 mt-5 md:mb-0 mb-10
                "
            >
              <span className="text-2xl"> Đăng ký ngay</span>
            </Button>
          </div>
          {/* img for sale */}
          <div className="md:block hidden">
            {' '}
            <img
              src={sale}
              className={`w-[100px] h-[100px] absolute right-12`}
            />
            <img
              src={badmintonPlayer}
              className={`w-[100px] h-[100px] absolute   left-12`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
