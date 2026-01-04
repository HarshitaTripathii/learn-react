import React from 'react'
import Card from '../components/card'

function Home() {
    return (
        <div className='flex  gap-12 justify-center items-center min-h-screen'>
            {/* hi, I am Home. */}
            {/* <Card title={"day2"} descp={"day2 react learning"} /> */}
            <img src='/i3.png' className=' h-auto w-80'></img>
            <div className='flex flex-col text-right items-end gap-3'>
                <h2 className='text-4xl font-bold'>Download Now</h2>
                <h4>You will get all.</h4>
                <button className='rounded-lg bg-pink-400 text-white font-bold h-10 w-32 p-0'>Download Now</button>
            </div>


        </div>
    )
}

export default Home
