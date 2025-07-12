import React from 'react';
import Slider from '@mui/material/Slider';
import { assets } from '../assets/assets';

const PriceFilter = ({ minPrice, maxPrice, priceRange, setPriceRange, onPriceChangeCommitted, isOpen, toggleOpen }) => {
  const breakpoints = Array.from(
    new Set(
      Array.from(
        { length: Math.floor((maxPrice - minPrice) / 500) + 1 },
        (_, i) => minPrice + i * 500
      )
    )
  ).sort((a, b) => a - b);

  return (
    <div className="rounded-[5px] border-[1px] border-ultraLightGray pb-[25px] flex flex-col gap-[27px]">
      <div
        className="flex justify-between items-center cursor-pointer px-[25px] pt-[25px]"
        onClick={toggleOpen}
      >
        <p className="font-dewi text-[13px] font-bold uppercase scale-x-[1.25] origin-left">Фильтр по цене</p>
        <img src={assets.arrowUp} alt="" className={`transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
      </div>
      <div className={`transition-collapse overflow-hidden ${isOpen ? 'opacity-100 max-h-[500px]' : 'py-0 max-h-0 opacity-0'}`}>
        <div className="px-[25px] flex items-center gap-[10px] font-dewi text-[13px]">
          <div className="w-[50%] flex py-[5px] px-[15px] bg-[#F4F5F9] rounded-[5px] justify-between">
            <span className="text-[#67708A]">{priceRange[0]}</span><span className="text-[#8D93AB]">₽</span>
          </div>
          <p className="text-[#565965]">-</p>
          <div className="w-[50%] flex py-[5px] px-[15px] bg-[#F4F5F9] rounded-[5px] justify-between">
            <span className="text-[#67708A]">{priceRange[1]}</span><span className="text-[#8D93AB]">₽</span>
          </div>
        </div>
        <div className="mx-[25px] mt-[21px]">
          <Slider
            value={priceRange}
            onChange={(e, val) => setPriceRange(val)}
            onChangeCommitted={onPriceChangeCommitted}
            min={minPrice}
            max={maxPrice}
            step={null}
            marks={breakpoints.map(v => ({ value: v }))}
            valueLabelDisplay="off"
            sx={{
              color: '#007BFF',
              height: 4,
              '& .MuiSlider-track': { backgroundColor: '#007BFF' },
              '& .MuiSlider-thumb': {
                ":after": {
                  content: '"="',
                  color: '#F0F2F6',
                  fontSize: '10px',
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: '2px solid #F0F2F6',
                  outline: 'none',
                  boxShadow: 'none',
                },
                backgroundColor: '#fff',
                outline: 'none',
                boxShadow: 'none',
              },
              '& .MuiSlider-mark': {
                backgroundColor: 'transparent',
              },
              '& .MuiSlider-markActive': {
                backgroundColor: 'transparent',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#DCDCE0',
              },
              '& .MuiSlider-thumb.Mui-focusVisible': {
                outline: 'none',
                boxShadow: 'none',
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
