import React from 'react';
import { Avatar, Carousel } from 'flowbite-react';
import styles from '../style';
const Review = () => {
  return (
    <div>
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center
      `}
      >
        <h1 className="mt-14">Review</h1>
      </div>
      {/* review */}
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded={true}
      >
        <div className="space-y-1 font-medium dark:text-white">
          <div>Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Joined in August 2014
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default Review;
