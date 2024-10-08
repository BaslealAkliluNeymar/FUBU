import { useState } from 'react'
import './App.css'
import { Home,About,Services,Local , International,Donate, Contact,NotFound } from './pages/index'
import {BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path ="/about" element={<About />} />
          <Route path ="/services" element={<Services />} />
          <Route path ="/local" element={<Local />} />
          <Route path ="/international" element={<International />} />
          <Route path ="/donate" element={<Donate />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
