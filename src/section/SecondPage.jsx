import React from 'react';
import 'animate.css';
import useIntersectionObserver from './useIntersectionObserver';

const SecondPage = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="flex justify-center w-full">
      <div className="max-container h-screen flex flex-col gap-20 justify-center ">
        <div>
          <h2
            className={`text-[70px] ${isVisible1 ? 'animate__animated animate__fadeInDown' : ''}`}
            ref={ref1}
          >
            Daily Blogs,
          </h2>
          <h2
            className={`text-[70px] ${isVisible2 ? 'animate__animated animate__fadeInDown' : ''}`}
            ref={ref2}
          >
            for Daily Life
          </h2>
        </div>
        <div className={`flex gap-20 ${isVisible2 ? 'animate__animated animate__fadeInDown' : ''}`}
        ref={ref2}
        >
          <div className="w-3/12 flex flex-col gap-5">
            <hr />
            <h3 className="text-[25px]">User Friendly Interface</h3>
            <p>Interaction with the Blogs made easy</p>
          </div>
          <div className="w-3/12 flex flex-col gap-5">
            <hr />
            <h3 className="text-[25px]">Diverse Content Categories</h3>
            <p>
              Highlight the variety of content categories available (e.g., travel, lifestyle,
              technology).
            </p>
          </div>
          <div className="w-3/12 flex flex-col gap-5">
            <hr />
            <h3 className="text-[25px]">Engaging Multimedia</h3>
            <p className="">Showcase the use of images, videos, and other multimedia elements.</p>
          </div>
        </div>
        <button className={`flex gap-20 ${isVisible2 ? 'animate__animated animate__fadeInDown' : ''} self-start bg-white text-black px-8 py-4 text-xl font-medium rounded-full`}>
          Write your own
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
