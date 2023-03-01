import React from 'react';
import { Avatar, Card } from 'flowbite-react';
import styles from '../style';
import { ReviewCons } from '../Constants';
import { Quote } from '../assets';
const Review = () => {
  return (
    <div className="relative top-[300px]">
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center mt-10 md:top-0 
      `}
      >
        <h1 className="md:mt-[-200px] mt-14 mr-4 ">
          Mọi người nói gì <br className="md:hidden" />{' '}
          <div className="text-center">
            về <span className="text-gradient">CKH</span> ?
          </div>
        </h1>
      </div>
      {/* review */}
      <div
        className=" flex mt-10 mb-20
        justify-around
        md:flex-row flex-col md:gap-0 gap-5
       "
      >
        {ReviewCons.map((item) => (
          <div className="flex  flex-1 mx-4  ">
            <Card key={item.id} className="relative h-[300px]  ">
              <div className="absolute  md:top-5 md:left-5 top-2 left-6">
                <img
                  src={Quote}
                  className="w-[32px] h-[32px] 
              object-contain 
            "
                />
              </div>
              <p
                className="font-normal text-gray-700
               dark:text-gray-400
               md:mb-4 md:mt-0  mt-4 mb-10
               "
              >
                {item.content}
              </p>
              <Avatar
                img={item.img}
                rounded={true}
                className="absolute
              top-[240px] 
              "
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <div>{item.name}</div>
                  <div
                    className="text-sm text-gray-500
                 dark:text-gray-400"
                  >
                    {item.job}
                  </div>
                </div>
              </Avatar>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
