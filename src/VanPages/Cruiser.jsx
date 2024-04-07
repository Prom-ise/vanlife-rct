import React from 'react'
import six from '../assets/image/five.png'
import { NavLink } from 'react-router-dom'

const Cruiser = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={six} alt="The Cruiser" />
        <button className="butt3-3 col-lg-2 col-md-6 col-6 mt-5 mb-3">Luxury</button>
        <h1 className="explore">The Cruiser</h1>
        <div className="priced my-4">
       <span>$120.00</span>/day
       </div>
    <h4>The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default Cruiser