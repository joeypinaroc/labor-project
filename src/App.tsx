import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,  Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
