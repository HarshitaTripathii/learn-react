import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes , Route} from 'react-router'

import AboutUs from './routes/AboutUs'
import Contact from './routes/Contact'
import Login from './routes/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-svh w-full flex flex-col '>
      <Header />
      <div className='flex-1'>
      <Routes>
        <Route path ="/" element={<Home />}></Route>

        <Route path ="/AboutUs" element={<AboutUs />}></Route>
        <Route path ="/Contact" element={<Contact/>}></Route>
        <Route path ="/Login" element={< Login/>}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
