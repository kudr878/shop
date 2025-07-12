import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import ProductCard from './ProductCard';

const itemsPerPageDesk = 4;
const itemsPerPageMob = 2;
const totalPages = 4;

const ProductHome = ({ type, data, to, title }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(() =>
    window.innerWidth >= 1024 ? itemsPerPageDesk : itemsPerPageMob
  );

  useEffect(() => {
    const updateItemsPerPage = () =>
      setItemsPerPage(window.innerWidth >= 1024 ? itemsPerPageDesk : itemsPerPageMob);

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handlePrev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((prev) => (prev + 1) % totalPages);

  const currentItems = data
    .slice(0, totalPages * itemsPerPage)
    .slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="lg:mx-[9vw] mx-[2vw] overflow-hidden mb-[80px]">
      <div className="flex justify-between items-center">
        <p className="font-bold uppercase text-[19px] md:text-[25px] lg:text-[42px] scale-x-[1.25] origin-left mb-[38px]">
          {title}
        </p>
        <button
          onClick={() => navigate(to)}
          className="hidden md:block font-bold uppercase text-[19px] md:text-[12px] lg:text-[23px] scale-x-[1.25] origin-right mb-[38px] items-center"
        >
          <span className="flex items-center border-b-2 border-black gap-[10px] pb-[6px]">
            Больше товаров
            <img src={assets.blackArrowRight} alt="" />
          </span>
        </button>
        <button
          onClick={() => navigate(to)}
          className="md:hidden flex font-bold uppercase text-[12px] scale-x-[1.25] origin-right mb-[38px] gap-[10px] items-center"
        >
          <span className="flex items-center border-b-2 border-black gap-[10px] pb-[6px]">
            Больше
            <img src={assets.blackArrowRight} alt="" />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-[30px] lg:grid-cols-4">
        {currentItems.map((item) => (
          <ProductCard key={item._id} item={item} type={type} navigate={navigate} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-[40px] lg:gap-[45px] mt-6">
        <button onClick={handlePrev} className="flex justify-center items-center w-12 h-12">
          <img src={assets.blackArrowLeft} alt="prev" className="w-6 h-6" />
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => setPage(index)}
            className={`rounded-full cursor-pointer transition-all duration-300 ${page === index ? 'bg-black w-[10px] h-[10px]' : 'bg-priceGray w-[6px] h-[6px]'
              }`}
          />
        ))}

        <button onClick={handleNext} className="flex justify-center items-center w-12 h-12">
          <img src={assets.blackArrowRight} alt="next" className="w-[12px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductHome;
