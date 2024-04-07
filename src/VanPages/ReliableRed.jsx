import React from 'react'
import seven from '../assets/image/alpert-wang-rxQL0ieF_Bs-unsplash 1.png'
import { NavLink } from 'react-router-dom'

const ReliableRed = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={seven} alt="Modest Explorer" />
        <button className="butt3-3 col-lg-2 col-md-6 col-6 mt-5 mb-3">Luxury</button>
        <h1 className="explore">Realiable Red</h1>
        <div className="priced my-4">
       <span>$100.00</span>/day
       </div>
    <h4>Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default ReliableRed