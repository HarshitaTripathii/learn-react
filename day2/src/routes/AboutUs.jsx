import React from 'react'
import { NavLink } from 'react-router'

function AboutUs() {
  return (
    // <div className='flex justify-center items-center'>
    //   hi, I am AboutUs.
    //  </div>
    <div className='flex  gap-12 justify-center items-center min-h-screen '>
    <img src='/i1.png' className='h-auto w-96'></img>
    <div className='flex flex-col  items-start gap-3 w-80'>
        <h2 className='text-4xl font-bold '>This is about our Collection</h2>
        <h4>You will get all. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione deleniti nesciunt magnam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur consectetur magni distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam magni quo.</h4>
    </div>
      
     
    </div>
  )
}

export default AboutUs
