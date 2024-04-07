import React from  'react'
import { NavLink } from 'react-router-dom'
import three from '../assets/image/three.png'
import eight from '../assets/image/Rectangle 155.png'

const Rugged = () =>{
    return(
        <>
            <div style={{padding: '5% 10%', backgroundColor: '#fff7ed'}}>
        <h1 className="explore">Explore our van options</h1>
        <div className="items-baseline lg:space-x-10 space-x-3 text-xs md:text-sm">
      
      <NavLink
              className={({ isActive }) =>
                isActive ? "butted3" : "butte3"
               } to="/Van/Simple"><button className='butt3'>Simple</button></NavLink> 
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted4" : "butte4"
                    } to="/Van/Luxury"><button className='butt4'>Luxury</button></NavLink>
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted5" : "butte5"
                    } to="/Van/Rugged"><button className='butt5'> Rugged</button></NavLink>
          <NavLink
                    className={({ isActive }) =>
                      isActive ? "fill" : "filter"
                    } to="/Van">         
        <button className='filter ml-8'>Clear filters</button></NavLink> 
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