import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center font-dewi bg-white">
      <h1 className="text-[100px] md:text-[180px] font-bold text-blue leading-none select-none">404</h1>
      <p className="text-[22px] md:text-[32px] font-dewiSemibold text-black mb-4 text-center">
        Ой! Такой страницы не существует
      </p>
      <p className="text-[16px] md:text-[20px] text-gray-500 mb-8 text-center max-w-[400px]">
        Возможно, вы ошиблись адресом или страница была удалена.<br />
        Попробуйте вернуться на главную.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-black hover:bg-blue text-white font-bold py-3 px-8 rounded-[5px] uppercase text-[14px] transition-all duration-300 active:scale-95"
      >
        На главную
      </button>
    </div>
  );
};

export default NotFound;
