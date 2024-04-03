import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Reg from './pages/register'
import Van from './pages/Van'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Navigate to='/' />} />
      <Route path='/register' element={<Reg/>} />
      <Route path='/Van' element={<Van/>} />
      <Route path='/About' element={<About/>} />
      <Route path='*' element={<NotFound/>} />  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
