import React from 'react';
import { navLinks } from '../Constants';
import logo from '../assets/2.png';
const Navbar = () => (
  <>
    <div className="w-full flex p-6 justify-between bg-primary ">
      <img src={logo} className="w-[50px] h-[50px]" alt="CKH" />
      <ul className="sm:flex gap-[20px] ">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="font-poppins font-normal cursor-pointer
          text-[16px] hover:bg-secondary rounded-[999px] flex 
          items-center justify-center p-4  transition-shadow
          "
          >
            {link.title}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Navbar;
