import React from 'react'
import five from '../assets/image/Rectangle 154.png'
import { NavLink } from 'react-router-dom'

const ModestExplorer = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={five} alt="Modest Explorer" />
        <button className="butt3-1 col-lg-2 col-md-6 col-6 mt-5 mb-3">Simple</button>
        <h1 className="explore">Modest Explorer</h1>
        <div className="priced my-4">
       <span>$60.00</span>/day
       </div>
    <h4>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default ModestExplorer