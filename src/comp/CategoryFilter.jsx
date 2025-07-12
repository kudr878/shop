import React from 'react';
import { assets } from '../assets/assets';

const CategoryFilter = ({ categories, selectedCategory, onChange, isOpen, toggleOpen }) => {
  return (
    <div className="rounded-[5px] border-[1px] border-ultraLightGray pb-[25px]">
      <div
        className="flex justify-between items-center cursor-pointer px-[25px] pt-[25px]"
        onClick={toggleOpen}
      >
        <p className="font-dewi text-[13px] font-bold uppercase scale-x-[1.25] origin-left">Категории</p>
        <img
          src={assets.arrowUp}
          alt=""
          className={`transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
        />
      </div>
      <ul
        className={`transition-collapse overflow-hidden ${isOpen ? 'opacity-100 max-h-[500px] py-[21px]' : 'py-0 max-h-0 opacity-0'
          } flex flex-col gap-[19px] px-[25px] font-dewi text-[14px]`}
      >
        {categories.map(category => (
          <li
            key={category}
            onClick={() => onChange(category === selectedCategory ? '' : category)}
            className={`cursor-pointer scale-x-[1.15] origin-left transition-colors ${selectedCategory === category ? 'text-blue ' : ''
              }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
