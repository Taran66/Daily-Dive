import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1722180932658-07329f1858cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1721984209453-858624b7711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1721160151710-0197b083c7e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const ThirdPage = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center h-screen'>
      <h2 className='text-[70px]'>Explore Blogs</h2>
    <div className="flex justify-center items-center flex-col gap-10 bg-black">
      <div className="carousel-container overflow-hidden relative w-full flex items-center ">
        <div className="carousel-track flex gap-10 animate-scroll">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`image${index}`} className="w-1/5 h-full object-cover" />
          ))}
          {images.map((src, index) => (
            <img key={index} src={src} alt={`image${index}`} className="w-1/5 h-full object-cover" />
          ))}
        </div>
      </div>
      <div>
        <button className='bg-white text-black px-4 py-4 text-lg font-medium rounded-full'>Explore more</button>
      </div>
    </div>
    </div>
  );
};

export default ThirdPage;
