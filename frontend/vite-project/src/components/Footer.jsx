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
        className="bg-[#191c1e] text-white
          "
      >
        <div className="w-full">
          <div
            className="grid w-full 
          justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"
          >
            <div className="flex  mt-2">
              <Footer.Brand href="" src={logo} alt="CKH logo" name="CKH" />
              <div className=" mt-[2%] text-xl ">CKH Academy</div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title
                  className=" text-white
          "
                  title="Về chúng tôi"
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Địa chỉ
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Số điện thoại
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className=" text-white
          "
                  title="Theo dõi"
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Facebook
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Tiktok
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  className=" text-white
          "
                  title="Điều khoản "
                />
                <Footer.LinkGroup col={true}>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className=" text-dimWhite
          "
                  >
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="opacity-0" />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              className=" text-dimWhite"
              href="#"
              by="CKH"
              year={2023}
            />
            <div className=" mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                className=" text-dimWhite"
                href="https://www.facebook.com/people/H%E1%BB%8Dc-vi%E1%BB%87n-c%E1%BA%A7u-l%C3%B4ng-CKH/100089549126926/?sk=about"
                icon={BsFacebook}
              />
              <Footer.Icon
                className=" text-dimWhite"
                href="https://www.tiktok.com/@hocviencaulongckh?fbclid=IwAR3pu8rlP23R3fGbZ8x5Ghxtui5LNat1jlMWaQcp-kUTYHhNxFO8j4mtJpI"
                icon={FaTiktok}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterA;
