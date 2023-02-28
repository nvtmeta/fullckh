import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram } from 'react-icons/Bs';
import { FaTiktok } from 'react-icons/Fa';
import { logo } from '../assets';
const FooterA = () => {
  return (
    <div>
      <Footer
        container={true}
        className="bg-slate-900 text-white
       
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
                Never down yourself
              </div>
              <div className="mt-10 text-xl">
                Điện thoại: 0862731386, 0848926689
              </div>
              <div className="mt-6 text-xl">Zalo: 0862731386, 0848926689</div>
              <div className=" text-xl mt-6">
                Email: hocviencaulongck@gmail.com
              </div>
            </div>
            <div className="grid mr-10 grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-14">
              <div>
                <Footer.Title
                  className="text-xl  text-white"
                  title="Về chúng tôi"
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite 
          "
                  >
                    <span className="text-xl">Địa chỉ</span>
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    {' '}
                    <span className="text-xl">Số điện thoại</span>
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
                    <span className="text-xl">Facebook</span>
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
          <div className="w-full mb-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className=" text-dimWhite text-xl font-medium "
              href="#"
              by="Học viện cầu lông chuyên nghiệp hàng đầu Hà Nội"
              year={'2023'}
            />
            <div
              className=" mt-4  flex space-x-6
             sm:mt-0 sm:justify-center"
            >
              <div className="text-4xl mr-10 rounded-[10px]  flex gap-10 text-dimWhite">
                <BsFacebook color="#4267B2" className="rounded-[10px]" />
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterA;
