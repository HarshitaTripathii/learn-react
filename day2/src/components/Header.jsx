import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Header() {
  return (
    <div className='bg-linear-to-br from-pink-200 via-gray-50 to-gray-100 w-full h-20 mb-10 pt-3  text-black shadow-xl shadow-pink-200 fixed z-50'>
    <div className='flex items-center justify-around '>

      <img src='/i3.png' className='h-16'></img>

      <div className='flex items-center gap-9 '>
        <NavLink to="/" className={({isActive}) =>isActive ? "text-pink-500" : ""}
        ><button className='hover:text-pink-500 cursor-pointer'>Home</button></NavLink>
        <NavLink to="/aboutus"  className={({isActive}) =>isActive ? "text-pink-500" : ""}><button className='hover:text-pink-500 cursor-pointer'>About Us</button></NavLink>
        <NavLink to="/contact"  className={({isActive}) =>isActive ? "text-pink-500" : ""}> <button className='hover:text-pink-500 cursor-pointer'>Contact Us</button></NavLink>
      </div>

      <NavLink to="/login"><button className='rounded-lg bg-pink-400 text-white h-9 w-30 p-0 font-bold cursor-pointer'>Login</button></NavLink>


    </div>
    </div>
  )
}

export default Header
