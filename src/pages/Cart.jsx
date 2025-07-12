import React from 'react';

const Cart = () => {
  return (
    <div className="p-6 mx-auto mt-10 max-w-2xl bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Корзина</h1>
      <p className="mb-4">
        Здесь будут отображаться товары, которые вы добавили в корзину. Оформите заказ, чтобы получить их как можно скорее!
      </p>
      <div className="text-gray-500">
        Ваша корзина пуста.
      </div>
    </div>
  );
};

export default Cart;
