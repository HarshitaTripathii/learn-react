import React from 'react'
import { NavLink } from 'react-router'
import Card from '../components/card'


function Contact() {
  return (
    // <div className='flex flex-col gap-12 justify-center items-center'>
    //   hi, I am Contact.
    //   <Card title={"day2"} descp={"day2 react learning"} />
    // </div>
    <div className='flex  gap-12 justify-center items-center min-h-screen '>
      <div className='flex flex-col items-start bg-gray-200 gap-3 w-80 h-64 p-7 border-2 border-pink-400 rounded-xl shadow-xl shadow-pink-500/30'>
        <h1 className='font-bold text-4xl'>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className='flex items-start flex-col gap-1 font-medium'>
        <a>Location</a>
        <a>Phone Number</a>
        <a>Email id</a></div>
        
      </div>
      <div className=' flex flex-col gap-5' >
        <form className='flex flex-col  items-start gap-5'>
          <input type='text' placeholder='Enter Name' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
          <input type='email' placeholder='Enter Email' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
          <input type='number' placeholder='Telephone' className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'></input>
        </form>
        <submit className='rounded-lg bg-pink-400 text-white h-10 w-32 p-0 text-center cursor-pointer font-bold pt-2'>Submit</submit>
      </div>


    </div>
  )
}

export default Contact
