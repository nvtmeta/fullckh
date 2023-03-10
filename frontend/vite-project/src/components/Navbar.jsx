import React, { useState, useEffect, useRef } from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
// import { HiOutlineMenu, HiChatAlt2 } from 'react-icons/hi';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { RiCloseLine } from 'react-icons/ri';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ClassIcon from '@mui/icons-material/Class';
const navLinks = [
  {
    id: '#',
    title: 'Trang chủ',
    icon: HomeIcon,
  },
  {
    id: 'video',
    title: 'Video',
    icon: YouTubeIcon,
  },
  {
    id: 'course',
    title: 'Khóa học',
    icon: ClassIcon,
  },
  {
    id: 'inbox',
    title: 'Tư vấn',
    icon: QuestionAnswerIcon,
  },
];
const NavLinks = ({ toggleSideBar, setToggleSideBar }) => {
  return (
    <ul
      className="flex md:flex-row flex-col md:mt-0 mt-4 
  md:gap-[10px] z-[2]  "
    >
      {navLinks?.map((item, index) => {
        const { title, id } = item;

        return (
          <div>
            <Link
              to={id}
              key={index}
              className="font-poppins font-normal cursor-pointer
              text-[16px] hover:bg-secondary rounded-[999px] flex 
              items-center justify-center p-4 
               transition-shadow md:mt-0 mt-4 relative
              "
              onClick={() => {
                return id === '/' && setToggleSideBar(!toggleSideBar);
              }}
            >
              <div className="mr-4  md:static absolute inset-0 left-4 top-4 ">
                {' '}
                <item.icon />
              </div>
              <div className="text-black ">{title}</div>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};
const Navbar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <>
      <div>
        <div
          className="w-full  flex p-4 justify-between 
    backdrop-blur-[6px] fixed z-[14] top-0 bg-white   box-shadow
    
    "
        >
          {/* logo */}
          <Link to="/">
            <div className="flex cursor-pointer  items-center  gap-2 justify-center">
              <img
                src={logo}
                className="w-[50px] h-[50px] rounded-lg"
                alt="CKH"
              />
              <div
                className={`font-poppins font-medium text-[20px] 
           text-[#000] 
          mr-6
          `}
              >
                CKH Badminton Academy
              </div>
            </div>
          </Link>
          {/* navlink pc */}
          <div className="navLinksResponsive navLinksMobile">
            <NavLinks />
          </div>
          {/* mobile responsive */}
          {/* overlay */}
          {toggleSideBar && (
            <div
              className="overlay bg-[rgba(0,0,0,0.4)]
               index-20 fixed inset-0 h-screen w-screen 
               "
              onClick={() => setToggleSideBar(!toggleSideBar)}
            ></div>
          )}
          {/* navbar mobile */}
          <div className=" sm:hidden flex items-center justify-center">
            {!toggleSideBar && (
              <MenuIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => setToggleSideBar(!toggleSideBar)}
              />
            )}

            <div
              className={`absolute backdrop-blur-[6px]  
            top-0  h-screen w-[60%]
            z-[10]  md:hidden   p-2 pt-6 
            ${
              toggleSideBar ? 'right-0 sidebar' : 'sidebar1'
            } overflow-y-auto  transition-all  bg-gradient
 
 `}
            >
              <CloseIcon
                className="mb-8 cursor-pointer"
                onClick={() => setToggleSideBar(!toggleSideBar)}
              />

              <div
                className="inline-block ml-[26%] cursor-pointer "
                onClick={() => setToggleSideBar(!toggleSideBar)}
              >
                <img
                  src={logo}
                  className=" w-[50px]  h-[50px] rounded-lg object-contain"
                  alt="CKH"
                />
              </div>

              <NavLinks
                toggleSideBar={toggleSideBar}
                setToggleSideBar={setToggleSideBar}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
