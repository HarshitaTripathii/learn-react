import React from 'react'
import { NavLink } from 'react-router'

function Home() {
  return (
    <div>
      hi, I am home.
      <NavLink to="/vishu"><button>Go to vishu</button></NavLink>
     
    </div>
  )
}

export default Home
