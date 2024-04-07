import React from 'react'
import three from '../assets/image/three.png'
import { NavLink } from 'react-router-dom'

const BeachBum = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={three} alt="Beach Bum" />
        <button className="butt3-2 col-lg-2 col-md-6 col-6 mt-5 mb-3">Rugged</button>
        <h1 className="explore">Beach Bum</h1>
        <div className="priced my-4">
       <span>$80.00</span>/day
       </div>
    <h4>Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default BeachBum