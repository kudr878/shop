import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const useFilters = (minPrice, maxPrice) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    price_min: parseInt(searchParams.get('price_min')) || minPrice,
    price_max: parseInt(searchParams.get('price_max')) || maxPrice,
    page: parseInt(searchParams.get('page')) || 1,
  });

  const updateFilters = useCallback(
    (newFilters) => {
      const searchParamsObj = new URLSearchParams();

      if (newFilters.category) searchParamsObj.set('category', newFilters.category);
      if (
        newFilters.price_min !== '' &&
        newFilters.price_max !== '' &&
        !(newFilters.price_min === minPrice && newFilters.price_max === maxPrice)
      ) {
        searchParamsObj.set('price_min', newFilters.price_min);
        searchParamsObj.set('price_max', newFilters.price_max);
      }
      if (newFilters.page && newFilters.page > 1) searchParamsObj.set('page', newFilters.page);

      navigate(`${location.pathname}?${searchParamsObj.toString()}`, { replace: false });
      setFilters(newFilters);
    },
    [navigate, location.pathname, minPrice, maxPrice]
  );

  useEffect(() => {
    const urlCategory = searchParams.get('category') || '';
    const urlPriceMin = parseInt(searchParams.get('price_min')) || minPrice;
    const urlPriceMax = parseInt(searchParams.get('price_max')) || maxPrice;
    const urlPage = parseInt(searchParams.get('page')) || 1;

    setFilters({
      category: urlCategory,
      price_min: urlPriceMin,
      price_max: urlPriceMax,
      page: urlPage,
    });
  }, [searchParams, minPrice, maxPrice]);

  return [filters, updateFilters];
};

export default useFilters;
