import React from 'react'
import eight from '../assets/image/Rectangle 155.png'
import { NavLink } from 'react-router-dom'

const GreenWonder = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={eight} alt="Green Wonder" />
        <button className="butt3-2 col-lg-2 col-md-6 col-6 mt-5 mb-3">Rugged</button>
        <h1 className="explore">Green Wonder</h1>
        <div className="priced my-4">
       <span>$70.00</span>/day
       </div>
    <h4>With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default GreenWonder