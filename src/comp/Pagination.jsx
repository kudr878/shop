import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { assets } from '../assets/assets';

const PaginationMuiStyled = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: '100px',
        fontFamily: 'Dewi, sans-serif',
        fontWeight: 600,
        fontSize: '14px',
        gap: '5px',
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
        siblingCount={1}
        boundaryCount={1}
        shape="rounded"
        variant="text"
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: () => (
                <span className={`flex items-center bg-transparent }`}>
                  <img
                    src={assets.bigArrowLeft}
                    alt="Назад"
                  />
                </span>
              ),
              next: () => (
                <span
                  className={`flex items-center bg-transparent`}>
                  <img
                    src={assets.bigArrowRight}
                    alt="Вперёд"
                  />
                </span>
              ),
            }}
            sx={{
              width: 45,
              height: 45,
              minWidth: 45,
              borderRadius: '4px',
              fontWeight: 600,
              fontFamily: 'Dewi, sans-serif',
              fontSize: '14px',
              margin: '0 2px',
              cursor: item.disabled ? 'default' : 'pointer',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              pointerEvents: item.disabled ? 'none' : 'auto',
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&.Mui-selected': {
                backgroundColor: '#49D0FF',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#49D0FF',
                  cursor: 'default',
                },
              },
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default PaginationMuiStyled;
