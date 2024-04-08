import React from  'react'
import { NavLink } from 'react-router-dom'
import five from '../assets/image/Rectangle 154.png'
import four from '../assets/image/four.png'

const Simple = () =>{
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
        <NavLink to='/Van/Modest-Explorer'>
          <img class="card-img-top" src={five} alt="Title" />
          </NavLink>
          <div class="card-body">
            <div className='d-flex'>
            <h4 class="card-title">Modest Explorer</h4>
            <h4 class="card-title2 ms-auto">60$<br/>/day</h4>
            </div>
            <NavLink to='/Van/Modest-Explorer'>
            <button className='butt3-1'>Simple</button>
            </NavLink>
          </div>
        </div>

        <div class="carde col-lg-6 col-md-5 col-sm-12">
        <NavLink to='/Van/Dreamfinder'>
          <img class="card-img-top" src={four} alt="Title" />
          </NavLink>
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Dreamfinder</h4>
            <h4 class="card-title2 ms-auto">65$<br/>/day/</h4>
            </div>
            <NavLink to='/Van/Dreamfinder'>
            <button className='butt3-1'>Simple</button>
            </NavLink>
          </div>
        </div>

        </div>
            </div>
        </>
    )
}

export default Simple