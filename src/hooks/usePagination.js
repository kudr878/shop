import { useMemo } from 'react';

const usePagination = (items, currentPage, itemsPerPage) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  return { currentItems, totalPages };
};

export default usePagination;
