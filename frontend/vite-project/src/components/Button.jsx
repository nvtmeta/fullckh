import React from 'react';
import styles from '../style';
const Button = () => {
  return (
    <button
      type="button"
      className={`${styles.flexCenter} py-4 px-6 font-poppins
     w-full rounded-full
     font-medium text-[18px] text-[#000] 
     `}
    >
      Đăng ký ngay
    </button>
  );
};

export default Button;
