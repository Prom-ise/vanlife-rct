import React from "react";
import Host from './Host';
import chart from '../assets/image/charts.png'

const Income = () => {
  return (
    <>
      <Host/>
      <div style={{ padding: "2% 10% 4% 10%", backgroundColor: "#fff7ed" }}>
        <div>
          <h1 className="explore">Income</h1>
          <div>
        Last <span style={{textDecoration:"underline", fontWeight:"700"}}>30 days</span> 
        </div>
        <div  className='explore fw-bold mt-3'>$2,260
        </div>
        </div>
        <div className="row my-5">
          <img className="col-lg-10 col-12" src={chart} alt="Chart Graphic" />
        </div>
        <div className='last-income mt-5 mb-4'>
            <div className="listed-vans">
        Your Transactions (3)
        </div>
        <div>
        Last <span style={{textDecoration:"underline", fontWeight:"700"}}>30 days</span> 
        </div>
        </div>

        <div className='vans-list-container mt-5 mb-4'>
            <div className="listed-vans fs-2 my-4">
            $720
        </div>
        <div className="my-4 fs-5">
        1/12/22
        </div>
        </div>
        <div className='vans-list-container mt-5 mb-4'>
            <div className="listed-vans fs-2 my-4">
            $560
        </div>
        <div className="my-4 fs-5">
        10/11/22
        </div>
        </div>
        <div className='vans-list-container mt-5 mb-4'>
            <div className="listed-vans fs-2 my-4">
            $980
        </div>
        <div className="my-4 fs-5">
        23/11/22
        </div>
        </div>
      </div>
    </>
  );
};

export default Income;
