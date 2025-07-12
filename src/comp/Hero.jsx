import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const heroSlides = [assets.hero, assets.hero1, assets.hero2, assets.hero1];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className='lg:h-[631px] md:h-[451px] h-[339px] lg:mx-[9vw] mx-[2vw] mt-[50px] mb-[80px] border rounded-[10px] relative font-dewi flex justify-between overflow-hidden'>

      <div>
        <div className='mt-[40px] md:mt-[60px] lg:mt-[90px] ml-[20px] md:ml-[70px] lg:ml-[90px] flex flex-col justify-between md:gap-[20px] gap-[7px] lg:h-[357px] md:h-[360px] h-[280px]'>

          <p className='font-bold uppercase text-[18px] md:text-[34px] lg:text-[51px] lg:leading-[66px] md:leading-[41px] leading-[25px] scale-x-[1.25] origin-left'>
            Широкий <br />ассортимент <br />Одежды
          </p>

          <p className='font-dewiSemibold text-[12px] md:text-[17px] lg:text-[19px] lg:leading-[32px] md:leading-[27px] leading-[19px] scale-x-[1.25] origin-left hidden lg:block'>
            Одежда от известных брендов у нас в каталоге.<br /> Только качественные вещи.
          </p>
          <p className='font-dewiSemibold text-[12px] md:text-[17px] lg:text-[19px] lg:leading-[32px] md:leading-[27px] leading-[19px] scale-x-[1.25] origin-left hidden md:block lg:hidden'>
            Одежда от известных брендов у нас в<br /> каталоге. Только качественные вещи.
          </p>
          <p className='font-dewiSemibold text-[12px] md:text-[17px] lg:text-[19px] lg:leading-[32px] md:leading-[27px] leading-[19px] scale-x-[1.25] origin-left block md:hidden'>
            Одежда от известных брендов<br /> у нас в каталоге. Только<br /> качественные вещи.
          </p>

          <button
            onClick={() => navigate('/catalog')}
            className='md:w-[250px] w-[215px] bg-black hover:bg-blue hover:scale-105 transition-all duration-300 active:scale-95 text-white py-[23px] px-[27px] flex items-center gap-[50px] md:gap-[63px] uppercase text-[10px] md:text-[12px] font-bold rounded-[5px]'
          >
            <p className='scale-x-[1.25] origin-left'>Перейти в каталог</p>
            <img src={assets.arrowRight} alt="arrow" />
          </button>

          <div className='flex gap-[15px] lg:mt-[40px] md:mt-[0] mt-[10px]'>
            <button
              onClick={handlePrev}
              className='md:w-[67px] w-[54px] aspect-square bg-white border-[1px] border-ultraLightGray hover:bg-ultraLightGray transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer'
            >
              <img src={assets.blackArrowLeft} alt="prev" />
            </button>

            <button
              onClick={handleNext}
              className='md:w-[67px] w-[54px] aspect-square bg-white border-[1px] border-ultraLightGray hover:bg-ultraLightGray transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer'
            >
              <img src={assets.blackArrowRight} alt="next" />
            </button>
          </div>
        </div>
      </div>

      <div className='mr-[75px] hidden lg:flex flex-col justify-center items-center gap-[45px]'>
        {heroSlides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'h-[10px] w-[10px] bg-white' : 'h-[6px] w-[6px] bg-white opacity-50'}`}
          />
        ))}
      </div>

      {heroSlides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`h-full w-full object-cover object-top absolute top-0 left-0 z-[-1] transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
};

export default Hero;
