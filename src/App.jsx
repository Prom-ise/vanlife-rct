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
import Host from './pages/Host'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Review from './pages/Review'
import Vans from './pages/Vans'
import Modern from './pages/Modern'
import Green from './pages/Green'
import Beach from './pages/Beach'
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
      <Route path='/Host' element={<Host/>} />
      <Route path='/Host/Dashboard' element={<Dashboard/>} />
      <Route path='/Host/Income' element={<Income/>} />
      <Route path='/Host/Review' element={<Review/>} />
      <Route path='/Host/Vans' element={<Vans/>} />
      <Route path='/Host/Vans/Modern' element={<Modern/>} />
      <Route path='/Host/Vans/Beach' element={<Beach/>} />
      <Route path='/Host/Vans/Green' element={<Green/>} />
      <Route path='*' element={<NotFound/>} />  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
