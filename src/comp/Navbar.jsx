import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='h-[80px] md:h-[100px] flex items-center justify-between px-[5vw] md:px-[10vw] bg-black text-white font-dewiSemibold text-[14px] relative overflow-hidden'>
      <div className='flex justify-between items-center'>
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt=""
          className='hidden cursor-pointer md:block'
        />
        <img src={assets.menu} alt="menu" className='cursor-pointer lg:hidden md:ml-[7vw]' />
        <img src={assets.search} alt="search" className='pl-10 cursor-pointer hover:brightness-[60%] transition duration-300 active:brightness-[40%] md:hidden' />


      </div>


      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt=""
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer md:hidden'
      />


      <ul className='hidden lg:flex gap-[2vw] '>
        <li onClick={() => navigate('/catalog/clothes')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Одежда
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
        <li onClick={() => navigate('/catalog/shoes')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Обувь
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
        <li onClick={() => navigate('/catalog/accessories')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Аксессуары
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
        <li onClick={() => navigate('/brands')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Бренды
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
        <li onClick={() => navigate('/cost-calculation')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Расчет&nbsp;стоимости
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
        <li onClick={() => navigate('/information')} className='cursor-pointer flex items-center gap-[5px] hover:brightness-[60%] active:brightness-[40%] transition duration-300'>
          Информация
          <img src={assets.arrow} alt="arrow" className='h-[6px] ' />
        </li>
      </ul>


      <ul className='flex lg:gap-[1vw] md:gap-[4vw] gap-[6vw] justify-end'>
        <img src={assets.search} alt="search" className='hidden md:block cursor-pointer hover:brightness-[60%] transition duration-300 active:brightness-[40%]' />
        <img onClick={() => navigate('/favorite')} src={assets.fave} alt="favorite" className='cursor-pointer hover:brightness-[60%] transition duration-300 active:brightness-[40%]' />
        <img onClick={() => navigate('/profile')} src={assets.profile} alt="profile" className='cursor-pointer hover:brightness-[60%] transition duration-300 active:brightness-[40%]' />
        <li onClick={() => navigate('/cart')} className='flex gap-[5px] justify-end'>
          <img src={assets.cart} alt="cart" className='cursor-pointer hover:brightness-[60%] transition duration-300 active:brightness-[40%]' />
          <p className='hidden text-lightGray md:block'>11 899 ₽</p>
          <div className='h-[18px] w-[18px] bg-blue rounded-full justify-center pt-[1px] hidden md:flex'>
            <p className='text-[12px]'>7</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar