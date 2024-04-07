import React from 'react'
import four from '../assets/image/four.png'
import { NavLink } from 'react-router-dom'

const DreamFinder = () => {
  return (
    <>
     <div style={{padding: '2% 10% 8% 10%', backgroundColor: '#fff7ed'}}>
    <NavLink to="/Van" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>

      <div className="mt-4 row">
        <img className='col-lg-12 col-md-12 col-12' src={four} alt="Dreamfinder" />
        <button className="butt3-1 col-lg-2 col-md-6 col-6 mt-5 mb-3">Simple</button>
        <h1 className="explore">Dreamfinder</h1>
        <div className="priced my-4">
       <span>$65.00</span>/day
       </div>
    <h4>Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.</h4>
      </div>
      
      <NavLink to="/Host/Vans">
      <button className='butt1 mt-5'>Rent this Van</button>
      </NavLink>
      </div>
    </>
  )
}

export default DreamFinder