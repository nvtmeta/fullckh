import React from 'react';
import { Button, Card } from 'flowbite-react';
import styles, { layout } from '../style';
import { Products } from '../Constants';
const Product = () => {
  return (
    <div
      className={`flex  
    flex-col ${styles.paddingY} ${styles.boxWidth}`}
    >
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center
      `}
      >
        <h1 className="mb-5">Khóa học</h1>
      </div>
      {/* card product */}
      <div
        className="max-w-full 
            flex md:justify-evenly
            justify-center h-[550px] 
             
            md:flex-row flex-col md:mt-0 mt-[300px]
             ml-2   "
      >
        {Products.map((item) => (
          //   <div
          //     key={item.id}
          //     className="max-w-full
          //    flex flex-col  box-shadow w-[300px] h-[200px]  "
          //   >
          //     <img
          //       src={item.img}
          //       className="w-[300px] h-[200px]
          //     object-cover"
          //     />
          //     {/* content */}
          //     <div className="flex flex-col">
          //       <h1
          //         className={`font-poppins font-semibold
          //       xs:text-[24px] text-[20px] text-gradient-3 `}
          //       >
          //         {item.title}{' '}
          //       </h1>
          //     </div>
          //   </div>
          //   Card of flowbie tailwind separate img to change size easily
          <div className="max-w-sm w-[100%]   ">
            <Card
              imgAlt={item.title}
              className="h-[550px] relative md:mt-0 mt-6
               cursor-pointer  scroll-smooth transition-transform"
            >
              <img
                src={item.img}
                className=" w-[80%] m-auto 
                h-[200px]  object-cover rounded-2xl md:mt-0 box-shadow absolute 
                top-4 right-2 left-2  
                "
              />
              {/* content product */}
              <div className="absolute top-[300px] ">
                <h5
                  className="text-2xl font-bold tracking-tight
               text-gradient-4  absolute md:top-[-40px] top-[-60px]  "
                >
                  {item.title}
                </h5>
                <p
                  className="font-normal
               text-gray-700
               font-medium
               flex flex-col gap-2 mx-2
               "
                >
                  {item.content.map((e, index) => (
                    <li key={index} className="list-none ">
                      {e}
                    </li>
                  ))}
                </p>
                <Button
                  color="black"
                  pill={true}
                  className="   
              font-poppins
               font-medium
                hover:bg-secondary smooth-transition mt-6 
                absolute top-[150px] bg-white  border-[1px]
                 border-solid border-[#FAD961]
                "
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
