import { Button } from 'flowbite-react';
import React from 'react';
import videoHomepage from '../assets/videos/videotapluyen1.mp4';
import { Player } from 'video-react';
import styles from '../style';
const VideosImgPrev = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center 
      relative md:top-0 top-80
    "
    >
      {/* heading */}
      <div
        className={`${styles.heading3} flex-1 flex items-center
      justify-center
      `}
      >
        <h1 className="mb-5">Video</h1>
      </div>

      {/* video */}
      <div
        className="border-[5px]  bg-[#ccc] object-cover 
      border-solid border-[#000]
     rounded-[30px] m-auto md:w-[800px] overflow-x-auto w-[350px]
     
     "
      >
        <Player className="flex items-center justify-center ">
          <source
            className="  border-[5px]  bg-[#ccc] object-cover 
      border-solid border-[#000]
     rounded-[30px] m-auto w-[800px]"
            src={videoHomepage}
            type="video/mp4"
          />
        </Player>
      </div>
      {/* <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video> */}
      {/* <Button color="black" pill={true} className=" m-6 p-4  bg-secondary">
        <h1 className={`text-2xl leading-10`}>
          Click để xem các video <br /> khác của CKH Academy
        </h1>
      </Button> */}
    </div>
  );
};

export default VideosImgPrev;
