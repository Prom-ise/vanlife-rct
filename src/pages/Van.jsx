import React from 'react'
import { NavLink } from 'react-router-dom'
import five from '../assets/image/Rectangle 154.png'
import three from '../assets/image/three.png'
import four from '../assets/image/four.png'
import six from '../assets/image/five.png'
import seven from '../assets/image/alpert-wang-rxQL0ieF_Bs-unsplash 1.png'
import eight from '../assets/image/Rectangle 155.png'

const Van = () => {
  return (
    <div style={{padding: '5% 10%', backgroundColor: '#fff7ed'}}>
      <h1 className="explore">Explore our van options</h1>
      <div className="lg:space-x-10 space-y-4">
      
      <NavLink
              className={({ isActive }) =>
                isActive ? "butted3" : "butte3"
               } to="/Van/Simple"><button className='butt3 mt-2'>Simple</button></NavLink> 
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted4" : "butte4"
                    } to="/Van/Rugged"><button className='butt4 mt-2'>Luxury</button></NavLink>
                    
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "butted5" : "butte5"
                    } to="/Van/Rugged"><button className='butt5 mt-2'> Rugged</button></NavLink>
          <NavLink
                    className={({ isActive }) =>
                      isActive ? "fill" : "filter"
                    } to="/Van">         
        <button className='filter ml-8 mt-2'>Clear filters</button></NavLink> 
      </div>
      <div className="centre">
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
    </div>
  )
}

export default Van