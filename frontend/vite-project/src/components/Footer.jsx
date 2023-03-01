import React from 'react';
import { Footer } from 'flowbite-react';
// import { FaTiktok } from 'react-icons/fa';
// import { SiFacebook } from 'react-icons/Si';
import { logo } from '../assets';
const FooterA = () => {
  const linkFace = 'https://www.facebook.com/profile.php?id=100089549126926';
  return (
    <div className=" relative top-[300px] mb-[290px]">
      <div
        className="bg-black text-white
        p-8 ml-[-10px]
          "
      >
        <div className="w-full ">
          <div
            className="grid w-full 
          justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"
          >
            <div className="flex flex-col  md:ml-10 mt-3">
              <div className="flex ">
                <Footer.Brand href="" src={logo} alt="CKH logo" name="CKH" />
                <div className=" mt-[2%] text-2xl font-semibold">
                  <span className="text-gradient">CKH</span> Academy
                </div>
              </div>
              <div className=" text-xl text-gradient font-poppins font-semibold mt-4 ">
                Never doubt yourself
              </div>
              <div className="mt-10 md:text-xl text-dimWhite">
                Điện thoại: 0862731386, 0848926689
              </div>
              <div className="mt-6 md:text-xl text-dimWhite">
                Zalo: 0862731386, 0848926689
              </div>
              <div className=" mt-6 md:mr-0  md:text-xl text-dimWhite">
                Email: <span>hocviencaulongck@gmail.com</span>
              </div>
            </div>
            <div
              className="grid mr-10 grid-cols-1 
            gap-8  sm:grid-cols-3 sm:gap-14 md:mt-4 mt-20"
            >
              <div>
                <Footer.Title className="text-xl  text-white" title="Về CKH" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite 
          "
                  >
                    <span className="text-xl">Liên hệ</span>
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    {' '}
                    <span className="text-xl">Giới thiệu</span>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="text-xl   text-white"
                  title="Theo dõi"
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    <a href={linkFace}>
                      {' '}
                      <span className="text-xl">Facebook</span>
                    </a>
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    <span className="text-xl">Tiktok</span>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className="text-xl  text-white"
                  title="Điều khoản "
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    <span className="text-xl">Privacy Policy</span>
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    <span className="text-xl">Terms & Conditions</span>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="opacity-0" />
          <div
            className="w-full md:ml-10 mb-6 sm:flex
           sm:items-center sm:justify-between"
          >
            <Footer.Copyright
              className=" text-dimWhite  text-xl font-normal "
              href="#"
              by="  CKH. Học viện cầu lông chuyên nghiệp hàng đầu Hà Nội"
              year={'2023'}
            />
            <div
              className="   flex space-x-6
             sm:mt-0 sm:justify-center mt-10"
            >
              {/* <div className="text-4xl mr-20 rounded-[10px] md:mt-0   flex gap-6 text-dimWhite">
                <a href={linkFace}>
                  <SiFacebook />
                </a>
                <a
                  className="cursor-pointer "
                  href="https://www.tiktok.com/@hocviencaulongckh?fbclid=IwAR3pu8rlP23R3fGbZ8x5Ghxtui5LNat1jlMWaQcp-kUTYHhNxFO8j4mtJpI"
                >
                  {/* <FaTiktok /> */}
              {/* </a>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterA;
