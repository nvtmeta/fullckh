import React, { useState } from 'react';
import logo from '../assets/2.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineHome } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/Ai';
import { RiCloseLine } from 'react-icons/ri';
const navLinks = [
  {
    id: '/',
    title: 'Trang chủ',
  },
  {
    id: 'video',
    title: 'Video',
  },
  {
    id: 'course',
    title: 'Khóa học',
  },
  {
    id: 'inbox',
    title: 'Tư vấn',
  },
];
const NavLinks = () => (
  <ul
    className="flex md:flex-row flex-col md:mt-0 mt-4 
  md:gap-[10px] z-[2]  "
  >
    {navLinks?.map((item, index) => {
      const { title, id } = item;
      return (
        <Link
          to={id}
          key={index}
          className="font-poppins font-normal cursor-pointer
              text-[16px] hover:bg-secondary rounded-[999px] flex 
              items-center justify-center p-4 
               transition-shadow md:mt-0 mt-4
              "
        >
          {title}
        </Link>
      );
    })}
  </ul>
);
const Navbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
      <div
        className="w-full  flex p-6 justify-between  bg-[customBg] 
    backdrop-blur-[4px] sticky z-[2]
    "
      >
        <img src={logo} className="w-[50px] h-[50px]" alt="CKH" />
        <div className="hidden md:flex ">
          <NavLinks />
        </div>
        {/* mobile responsive */}
        <div className="sm:hidden flex items-center justify-center">
          {!toggleSideBar && (
            <HiOutlineMenu
              className="w-6 h-6"
              onClick={() => setToggleSideBar(!toggleSideBar)}
            />
          )}
          <div
            className={`absolute backdrop-blur-[6px]  
             top-0  h-screen w-[60%]
         z-[10]  md:hidden  smooth-transition p-2 pt-6 
         ${toggleSideBar ? 'right-0' : 'hidden'} sidebar bg-gradient
         
         `}
          >
            <RiCloseLine
              className="w-8 h-8"
              onClick={() => setToggleSideBar(!toggleSideBar)}
            />
            <img
              src={logo}
              className="w-full h-[50px] object-contain"
              alt="CKH"
            />
            <NavLinks handleClick={() => setToggleSideBar(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
