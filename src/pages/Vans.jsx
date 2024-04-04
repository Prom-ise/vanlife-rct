import React from 'react'
import Host from './Host';
import five from '../assets/image/Rectangle 154.png'
import three from '../assets/image/three.png'
import eight from '../assets/image/Rectangle 155.png'

const Vans = () => {
  return (
    <>
      <Host />
      <div style={{ padding: "2% 10% 4% 10%", backgroundColor: "#fff7ed" }}>
        <h1 className="explore">Your Listed Vans</h1>
      <div className='vans-list-contain row'>
            <div className='vans-list-container mt-4 col-lg-12 col-md-12 col-12'>
                <div className='d-flex'>
                    <span><img src={five} alt="Modern Explorer" /></span>
                    <div className='modern-van'><span>Modern Explorer</span>  60$/day</div>
                </div>
               
            </div>
             <div className='vans-list-container my-5 col-lg-12 col-md-12 col-12'>
                <div className='d-flex'>
                    <span><img src={three} alt="Modern Explorer" /></span>
                    <div className='modern-van'><span>Beach Bum</span> 80$/day</div>
                </div>
               
            </div>
             <div className='vans-list-container col-lg-12 col-md-12 col-12'>
                <div className='d-flex'>
                    <span><img src={eight} alt="Modern Explorer" /></span>
                    <div className='modern-van'><span>Green Wonder</span>  70$/day</div>
                </div>
               
            </div>
        </div>
        </div>
    </>
  )
}

export default Vans