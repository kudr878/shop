import React from 'react';
import Hero from '../comp/Hero';
import ProductHome from '../comp/ProductHome';
import { staff } from '../assets/staff/staff';

const Home = () => {
  return (
    <div >
      <Hero />
      <ProductHome type="shoes" data={staff.shoes} to="/catalog/shoes" title="Обувь" />
      <ProductHome type="clothes" data={staff.clothes} to="/catalog/clothes" title="Одежда" />
      <ProductHome type="accessories" data={staff.accessories} to="/catalog/accessories" title="Аксессуары" />
    </div>
  );
};

export default Home;
