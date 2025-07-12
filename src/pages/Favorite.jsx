import React from 'react';

const Favorite = () => {
  return (
    <div className="p-6 mx-auto mt-10 max-w-2xl bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Избранное</h1>
      <p className="mb-4">
        Здесь будут отображаться ваши избранные товары. Добавляйте понравившиеся товары в избранное, чтобы быстро находить их позже.
      </p>
      <div className="text-gray-500">
        Пока что у вас нет избранных товаров.
      </div>
    </div>
  );
};

export default Favorite;
