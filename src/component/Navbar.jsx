import React from 'react'
import { NavLink } from "react-router-dom";
import user from '../assets/image/User circle.png'

const Navbar = () => {
    const NavLinks = [
        {
        name: "About", 
        path: "/About"
        },

        {
        name: "Vans", 
        path: "/Van"
        },
        // {
        // name: "Login", 
        // path: "/register"
        // },
        // { name: "Service", path: "/About/Service" }
    ]
  return (
    <>
    <nav>
      <div className="navbar max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <NavLink to="/" className="vanlife">
            #vanlife
            </NavLink>
          </div>
          <div className="flex">
            <div className="ml-6 flex items-baseline lg:space-x-5 space-x-1 text-xs md:text-sm">
              {NavLinks.map((link) => (
                <NavLink
                 className={({ isActive }) =>
        isActive ? "underline" : "no-underline"
      }
                  key={link.name}
                  to={link.path}
                  activeClassName="text-gray-300"
                //   className="text-white hover:text-gray-300 px-3 py-2 rounded-md font-medium"
                >
                {link.name}
            
           
                </NavLink>
              ))}
              
            </div>
            <NavLink to="/register">
               <img src={user} className='userCir' alt="Login" />
            </NavLink>
          </div>
         
        </div>
      </div>
    </nav>

       
    </>
  )
}

export default Navbar