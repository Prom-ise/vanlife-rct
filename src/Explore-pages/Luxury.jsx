import React from  'react'
import { NavLink } from 'react-router-dom'
import six from '../assets/image/five.png'
import seven from '../assets/image/alpert-wang-rxQL0ieF_Bs-unsplash 1.png'

const Luxury = () =>{
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
      <div class="carde col-lg-6 col-md-6 col-sm-12">
        <NavLink to='/Van/Reliable-Red'>
          <img class="card-img-top" src={seven} alt="Title" />
          </NavLink>
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Reliable Red</h4>
            <h4 class="card-title2 ms-auto">100$<br/>/day/</h4>
            </div>
            <NavLink to='/Van/Reliable-Red'>
            <button className='butt3-3'>Luxury</button>
            </NavLink>
          </div>
        </div>

        <div class="carde col-lg-6 col-md-5 col-sm-12">
        <NavLink to='/Van/Cruiser'>
          <img class="card-img-top" src={six} alt="Title" />
          </NavLink>
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">The Cruiser</h4>
            <h4 class="card-title2 ms-auto">120$<br/>/day/</h4>
            </div>
            <NavLink to='/Van/Cruiser'>
            <button className='butt3-3'>Luxury</button>
            </NavLink>
          </div>
        </div>

        </div>
            </div>
        </>
    )
}

export default Luxury