import React from 'react';
import styles from '../style';
const Button = () => {
  return (
    <button
      type="button"
      className={`${styles.flexCenter} py-6 px-4 font-poppins
     w-[150px] h-[56px] rounded-full bg-secondary
     font-medium text-[18px] text-[#000] ${styles.marginY} shadow-md
     hover:bg-primary`}
    >
      <span className="text-[16px]">Đăng ký ngay</span>
    </button>
  );
};

export default Button;
