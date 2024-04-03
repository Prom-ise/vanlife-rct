import React from 'react'
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
      <div className="grid lg:grid-cols-4 gap-4">
        <button className='butt3'>Simple</button>
        <button className='butt4'>Luxury</button>
        <button className='butt5'>Rugged</button>
        <button className='filter'>Clear filters</button>
      </div>
      <div className="centre">
      <div className='row gy-5 my-5'>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={five} alt="Title" />
          <div class="card-body">
            <div className='d-flex'>
            <h4 class="card-title">Modest Explorer</h4>
            <h4 class="card-title2 ms-auto">60$<br/>/day</h4>
            </div>
            <button className='butt3-1'>Simple</button>
          </div>
        </div>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={three} alt="Title" />
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Beach Bum</h4>
            <h4 class="card-title2 ms-auto">80$<br/>/day</h4>
            </div>
            <button className='butt3-2'>Rugged</button>
          </div>
        </div>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={seven} alt="Title" />
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Reliable Red</h4>
            <h4 class="card-title2 ms-auto">100$<br/>/day/</h4>
            </div>
            <button className='butt3-3'>Luxury</button>
          </div>
        </div>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={four} alt="Title" />
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Dreamfinder</h4>
            <h4 class="card-title2 ms-auto">65$<br/>/day/</h4>
            </div>
            <button className='butt3-1'>Simple</button>
          </div>
        </div>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={six} alt="Title" />
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">The Cruiser</h4>
            <h4 class="card-title2 ms-auto">120$<br/>/day/</h4>
            </div>
            <button className='butt3-3'>Luxury</button>
          </div>
        </div>
        <div class="carde col-lg-6 col-md-5 col-sm-12">
          <img class="card-img-top" src={eight} alt="Title" />
          <div class="card-body">
          <div className='d-flex'>
            <h4 class="card-title">Green Wonder</h4>
            <h4 class="card-title2 ms-auto">70$<br/>/day/</h4>
            </div>
            <button className='butt3-2'>Rugged</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Van