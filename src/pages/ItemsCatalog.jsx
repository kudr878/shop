import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import useFilters from '../hooks/useFilters';
import usePagination from '../hooks/usePagination';

import CategoryFilter from '../comp/CategoryFilter';
import PriceFilter from '../comp/PriceFilter';
import Pagination from '../comp/Pagination';
import ProductCard from '../comp/ProductCard';

const sectionTitles = {
  clothes: 'Одежда',
  shoes: 'Обувь',
  accessories: 'Аксессуары',
};

const ItemsPerPage = 24;

const ItemsCatalog = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(AppContext);

  const originalItems = data[section] || [];
  const allItems = Array(20).fill(originalItems).flat();

  const allSizes = allItems.flatMap(item => Object.values(item.size || {}));
  const prices = allSizes.filter(Boolean);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [filters, updateFilters] = useFilters(minPrice, maxPrice);

  const [priceRange, setPriceRange] = useState([filters.price_min, filters.price_max]);

  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [priceFilterOpen, setPriceFilterOpen] = useState(true);

  useEffect(() => {
    setPriceRange([filters.price_min, filters.price_max]);
  }, [filters.price_min, filters.price_max]);

  const handleCategoryChange = (category) => {
    updateFilters({ ...filters, category, page: 1 });
  };

  const handlePriceChangeCommitted = (_, newValue) => {
    updateFilters({ ...filters, price_min: newValue[0], price_max: newValue[1], page: 1 });
  };

  const handlePageChange = (page) => {
    if (page !== filters.page) {
      updateFilters({ ...filters, page });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredItems = allItems.filter(item => {
    if (filters.category && item.type !== filters.category) return false;

    const sizeValues = Object.values(item.size || {});
    const itemPrice = sizeValues.length ? sizeValues[0] : 0;
    if (itemPrice < filters.price_min || itemPrice > filters.price_max) return false;

    return true;
  });

  const { currentItems, totalPages } = usePagination(filteredItems, filters.page, ItemsPerPage);

  const categories = [...new Set(allItems.map(item => item.type))];

  return (
    <div className="mx-[14vw] mb-[100px]">
      <div className="mt-[48px] md:flex gap-[28px] justify-between">
        <div className="md:w-[24%] flex flex-col gap-[30px]">

          <CategoryFilter
            categories={categories}
            selectedCategory={filters.category}
            onChange={handleCategoryChange}
            isOpen={categoriesOpen}
            toggleOpen={() => setCategoriesOpen(!categoriesOpen)}
          />

          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            onPriceChangeCommitted={handlePriceChangeCommitted}
            isOpen={priceFilterOpen}
            toggleOpen={() => setPriceFilterOpen(!priceFilterOpen)}
          />

        </div>

        <div className="lg:w-[76%]">
          <h1 className="text-black">{sectionTitles[section]}</h1>
          <div className="mt-8">
            {currentItems.length === 0 ? (
              <div className="py-12 text-center text-gray-400">Нет товаров в этой секции</div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px]">
                  {currentItems.map((item, index) => (
                    <ProductCard
                      key={`${item._id}-${index}`}
                      item={item}
                      type={section}
                      navigate={navigate}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination
                    currentPage={filters.page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default ItemsCatalog;
