import React from 'react';

const Information = () => {
  return (
    <div className="p-6 mx-auto mt-10 max-w-2xl bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Информация</h1>
      <p className="mb-4">
        Добро пожаловать на страницу информации! Здесь вы найдете полезные сведения о нашем магазине, условиях покупки, доставки и возврата товаров.
      </p>
      <h2 className="mb-2 text-xl font-semibold">О нас</h2>
      <p className="mb-4">
        Мы предлагаем широкий ассортимент обуви, одежды и аксессуаров по доступным ценам. Наша цель — сделать ваш шопинг удобным и приятным.
      </p>
      <h2 className="mb-2 text-xl font-semibold">Доставка и оплата</h2>
      <ul className="pl-6 mb-4 list-disc">
        <li>Доставка по всей России</li>
        <li>Быстрая обработка заказов</li>
        <li>Оплата онлайн или при получении</li>
      </ul>
      <h2 className="mb-2 text-xl font-semibold">Возврат товаров</h2>
      <p>
        Вы можете вернуть товар в течение 14 дней с момента получения при сохранении товарного вида и упаковки.
      </p>
    </div>
  );
};

export default Information;
