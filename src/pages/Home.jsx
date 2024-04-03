import React from 'react'
import { NavLink } from "react-router-dom";
import one from '../assets/image/image 53.png'
import axios from 'axios';

const Home = () => {
  // const url = "https://api.github.com/users"

  // axios.get (url)
  // .then((res) => {
  //   console.log(res.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })
  // useEffect(() => {
  //   console.log("kmkc");
  
  // }, [])
  
  return (
    <div
      className="background-container container-fluid"
      style={{
        backgroundImage: `url(${one})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        padding: '9% 10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <div>
     <h1 className='travel'>You got the travel plans, we got the travel vans.</h1>
     <h5 className='advent text-white my-4'>Add adventure to your life by joining the #vanlife movement.<br/> Rent the perfect van to make your perfect road trip.</h5>
     <NavLink to="/van" className="vanlife">
      <button className='butt1 mt-5'>Find your van</button>
      </NavLink>
     
     </div>
    
    </div>
  )
}

export default Home