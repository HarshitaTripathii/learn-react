import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route} from 'react-router'
import Home from './routes/Home'
import Vishu from './routes/Vishu'
import NotFound from './routes/NotFound'
import { Demo } from './Demo'
// import Demo from './Demo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav />
    <Demo />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vishu" element={<Vishu />}/>
      <Route path="*" element={<NotFound />}/>
      

      
    </Routes>
    I am root
    </>
    
  )
}

export default App
