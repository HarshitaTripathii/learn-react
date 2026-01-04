import React from 'react'
import { NavLink } from 'react-router'

function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center bg-gray-200 gap-3 w-80 h-80 p-7 border-2 border-pink-400 rounded-xl shadow-xl shadow-pink-500/30'>
        <form className='flex flex-col  items-start gap-5'>
          <input type='text' placeholder='Enter Name' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
          <input type='email' placeholder='Enter Email' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
          <input type='password' placeholder='Enter Password' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
        </form>
        <button className='rounded-lg bg-pink-400 text-white h-9 w-30 p-0 text-center cursor-pointer font-bold '>Login</button>
      </div>
    </div>
  )
}

export default Login
