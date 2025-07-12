import React, { useState } from 'react';
import { assets } from '../assets/assets';

const ProductCard = ({ item, type, navigate }) => {
  const [isStarClicked, setIsStarClicked] = useState(false);

  return (
    <div className="group relative w-full flex flex-col items-center cursor-pointer mb-[40px] md:mb-[60px]" onClick={() => navigate(`/catalog/${type}/${item.link}`)}>
      <div className="relative w-full aspect-square">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full"
        />
        <img
          src={isStarClicked ? assets.starClicked : assets.star}
          onClick={e => {
            e.stopPropagation();
            setIsStarClicked(prev => !prev);
          }}
          alt="star"
          className="absolute top-[33px] right-[25px] "
        />
      </div>
      <div className="overflow-hidden w-full">
        <div className="font-dewiBold font-bold text-[12px] md:text-[17px] lg:text-[19px] lg:leading-[28px] md:leading-[27px] leading-[19px] transform-gpu scale-x-[1.25] origin-left max-w-[80%]">{item.title}</div>
        {item.size && (
          <div className="font-dewiBold transform-gpu scale-x-[1.25] origin-left text-[18px] text-priceGray leading-[20px]">
            <span className="text-[14px]">от</span> {Object.values(item.size)[0]} ₽
          </div>
        )}


      </div>
    </div>
  )
};

export default ProductCard;