import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 mx-auto mt-10 max-w-2xl bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Профиль</h1>
      <p className="mb-4">
        Добро пожаловать в ваш личный кабинет! Здесь вы можете просмотреть и изменить свои персональные данные, а также ознакомиться с историей заказов.
      </p>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Личные данные</h2>
        <ul className="pl-6 list-disc text-gray-700">
          <li>Имя: Иван Иванов</li>
          <li>Email: ivan@example.com</li>
          <li>Телефон: +7 900 123-45-67</li>
        </ul>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">История заказов</h2>
        <div className="text-gray-500">
          У вас пока нет заказов.
        </div>
      </div>
    </div>
  );
};

export default Profile;
