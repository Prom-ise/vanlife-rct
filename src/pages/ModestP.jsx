import React from 'react'
import Host from "./Host";
import Pricing1 from "./Pricing1";
import { NavLink } from "react-router-dom";
import five from "../assets/image/Rectangle 154.png";

const ModestP = () => {
  return (
    <>
     <Host />
     <div style={{ padding: "2% 10% 4% 8%", backgroundColor: "#fff7ed" }}>
     <NavLink to="/Host/Vans/" style={{color: "black", textDecoration: "none"}}><span className="fs-4 me-2" style={{color: "#858585"}}>←</span>
      <button className='filter mb-5'> Back to all vans</button>
      </NavLink>
      <div className='modest-van-contain'>
      <div className="d-flex row">
                <span className="col-lg-3 col-md-3 col-sm-12">
                  <img src={five} alt="Modest Explorer" />
                </span>
                <div className="mt-5 col-lg-5 col-md-5 col-sm-12">
                  <div>
                  <button className='butt3-1'>Simple</button>
                  </div>
                  <div className="model-van">Modest Explorer</div><span className="fw-bolder fs-5"> 60$</span><span className="fs-5"> /day</span>
                </div>
              </div>

              <div className="ml-6 mt-6 flex space-x-5">
      <NavLink to="/Host/Vans/Modest/Details"className={({ isActive }) =>
          isActive ? "underline" : "no-underline"
        }>
        Details
      </NavLink>
      <NavLink to="/Host/Vans/Modest/Pricing"className={({ isActive }) =>
          isActive ? "underline" : "no-underline"
        }>
        Pricing
      </NavLink>
      <NavLink to="/Host/Vans/Modest/Photos"className={({ isActive }) =>
          isActive ? "underline" : "no-underline"
        }>
        Photos
      </NavLink>
      </div>
      <Pricing1/>
      </div>

      
     </div>
    </>
  )
}

export default ModestP