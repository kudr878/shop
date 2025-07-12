import React from 'react';
import { useParams } from 'react-router-dom';
import { staff } from '../assets/staff/staff';

const Item = () => {
  const { section, link } = useParams();
  const items = staff[section] || [];
  const item = items.find(i => i.link === link);
  const model = item?.model || '';
  const type = item?.type || '';
  return (
    <div className='mx-[14vw] '>
      <h1>Страница товара</h1>
      <p>Здесь будет подробная информация о выбранном товаре.</p>
    </div>
  );
};

export default Item;