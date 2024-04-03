import React from 'react'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{padding: '10% 10%', backgroundColor: '#fff7ed'}}>
      <h1 className="explore">Sorry, the page you were looking for was not found.</h1>
      <NavLink to="/home">
      <button className="butt1-1 mt-3">Return to home</button>
      </NavLink>
    </div>
  )
}

export default NotFound