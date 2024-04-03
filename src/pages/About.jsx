import React from 'react'
import { NavLink } from "react-router-dom";
import two from '../assets/image/image 54.png'

const About = () => {
  return (
    <div style={{backgroundColor: '#fff7ed', paddingBottom: '2rem'}}>
        <img src={two} className="img1 w-full"  loading="lazy"  width="100%" objectPosition="center"  />
        <div style={{padding: "0 10%"}}>
        <h1 className="relax">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="mission fw-bold mt-5">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
         <div className='team'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</div></p>

         <div className='card1'>
            <h1 className='destination'>Your destination is waiting.<br/> Your van is ready.</h1>
            <NavLink to="/van">
            <button className='butt2'>Explore our vans</button>
            </NavLink>
            
         </div>
    </div>
    </div>
  )
}

export default About