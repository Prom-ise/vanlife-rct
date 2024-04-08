import React from  'react'
import { NavLink } from 'react-router-dom'
import three from '../assets/image/three.png'
import eight from '../assets/image/Rectangle 155.png'

const Rugged = () =>{
    return(
        <>
            <div style={{padding: '5% 10%', backgroundColor: '#fff7ed'}}>
        <h1 className="explore">Explore our van options</h1>
        <div className="lg:space-x-10 space-y-4">
      
        <NavLink
              className={({ isActive }) =>
                isActive ? "butted3" : "butt3"
               } to="/Van/Simple"><button className='mt-4'>Simple</button></NavLink> 
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted4" : "butt4"
                    } to="/Van/Luxury"><button className='mt-4'>Luxury</button></NavLink>
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted5" : "butt5"
                    } to="/Van/Rugged"><button className='mt-4'>Rugged</button></NavLink>
          <NavLink
                    className={({ isActive }) =>
                      isActive ? "fill" : "filter"
                    } to="/Van">         
        <button className='filter ml-8 mt-4'>Clear filters</button></NavLink> 
      </div>
      
      <div className='row gy-5 my-5'>
      <div class="carde col-lg-6 col-md-5 col-sm-12">
        <NavLink to='/Van/Beach-Bum'>
          <img class="card-img-top" src={three} alt="Title" />
          </NavLink>
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Beach Bum</h4>
            <h4 class="card-title2 ms-auto">80$<br/>/day</h4>
            </div>
            <NavLink to='/Van/Beach-Bum'>
            <button className='butt3-2'>Rugged</button>
            </NavLink>
          </div>
        </div>

        <div class="carde col-lg-6 col-md-5 col-sm-12">
        <NavLink to='/Van/Green-Wonder'>
          <img class="card-img-top" src={eight} alt="Title" />
          </NavLink>
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Green Wonder</h4>
            <h4 class="card-title2 ms-auto">70$<br/>/day/</h4>
            </div>
            <NavLink to='/Van/Green-Wonder'>
            <button className='butt3-2'>Rugged</button>
            </NavLink>
          </div>
        </div>

        </div>
            </div>
        </>
    )
}

export default Rugged