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
import Details1 from './Sub-pages/Details1'
import Details2 from './Sub-pages/Details2'
import Details3 from './Sub-pages/Details3'
import Pricing1 from './Sub-pages/Pricing1'
import Pricing2 from './Sub-pages/Pricing2'
import Pricing3 from './Sub-pages/Pricing3'
import Photos1 from './Sub-pages/Photos1'
import Photos2 from './Sub-pages/Photos2'
import Photos3 from './Sub-pages/Photos3'
import Vans from './pages/Vans'
import Modest from './pages/Modest'
import ModestP from './pages/ModestP'
import ModestPh from './pages/ModestPh'
import Green from './pages/Green'
import GreenP from './pages/GreenP'
import GreenPh from './pages/GreenPh'
import Beach from './pages/Beach'
import BeachP from './pages/BeachP'
import BeachPh from './pages/BeachPh'
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
      <Route path='/Host' element={<Navigate to='/Host/Dashboard'/>} />
      <Route path='/Host/Dashboard' element={<Dashboard/>} />
      <Route path='/Host/Income' element={<Income/>} />
      <Route path='/Host/Review' element={<Review/>} />
      <Route path='/Host/Vans' element={<Vans/>} />
      <Route path='/Host/Vans/Modest/Details' element={<Modest/>} />
      <Route path='/Host/Vans/Modest/Pricing' element={<ModestP/>} />
      <Route path='/Host/Vans/Modest/Photos' element={<ModestPh/>} />

      <Route path='/Host/Vans/Modest/Details1' element={<Details1/>} />
      <Route path='/Host/Vans/Modest/Details2' element={<Details2/>} />
      <Route path='/Host/Vans/Modest/Details2' element={<Details3/>} />

      <Route path='/Host/Vans/Modest/Pricing1' element={<Pricing1/>} />
      <Route path='/Host/Vans/Modest/Pricing2' element={<Pricing2/>} />
      <Route path='/Host/Vans/Modest/Pricing3' element={<Pricing3/>} />

      <Route path='/Host/Vans/Modest/Photos1' element={<Photos1/>} />
      <Route path='/Host/Vans/Modest/Photos2' element={<Photos2/>} />
      <Route path='/Host/Vans/Modest/Photos3' element={<Photos3/>} />

      <Route path='/Host/Vans/Beach/Details' element={<Beach/>} />
      <Route path='/Host/Vans/Beach/Pricing' element={<BeachP/>} />
      <Route path='/Host/Vans/Beach/photos' element={<BeachPh/>} />
      
      <Route path='/Host/Vans/Green/Details' element={<Green/>} />
      <Route path='/Host/Vans/Green/Pricing' element={<GreenP/>} />
      <Route path='/Host/Vans/Green/Photos' element={<GreenPh/>} />
      <Route path='*' element={<NotFound/>} />  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
