import React from 'react'
import Host from "./Host";
import Photos3 from "./Photos3";
import { NavLink } from "react-router-dom";
import eight from '../assets/image/Rectangle 155.png';

const GreenPh = () => {
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
                 <img src={eight} alt="Green Wonder" />
               </span>
               <div className="mt-5 col-lg-5 col-md-5 col-sm-12">
                 <div>
                 <button className='butt3-2'>Rugged</button>
                 </div>
                 <div className="model-van">Green Wonder</div><span className="fw-bolder fs-5"> 70$</span><span className="fs-5"> /day</span>
               </div>
             </div>

             <div className="ml-6 mt-6 flex space-x-5">
     <NavLink to="/Host/Vans/green/Details"className={({ isActive }) =>
         isActive ? "underline" : "no-underline"
       }>
       Details
     </NavLink>
     <NavLink to="/Host/Vans/green/Pricing"className={({ isActive }) =>
         isActive ? "underline" : "no-underline"
       }>
       Pricing
     </NavLink>
     <NavLink to="/Host/Vans/green/Photos"className={({ isActive }) =>
         isActive ? "underline" : "no-underline"
       }>
       Photos
     </NavLink>
     </div>
     <Photos3/>
     </div>

     
    </div>
   </>
  )
}

export default GreenPh