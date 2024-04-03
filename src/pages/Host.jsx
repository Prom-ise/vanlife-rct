import React from 'react'
import { NavLink } from "react-router-dom";

const Host = () => {
    const NavLinking = [
        {
        name: "Dashboard", 
        path: "/About"
        },

        {
        name: "Income", 
        path: "/Van"
        },
        {
            name: "Vans", 
            path: "/Van"
            },
            {
                name: "Reviews", 
                path: "/Van"
                },
        // { name: "Service", path: "/About/Service" }
    ]
  return (
    <div style={{padding: '5% 10%', backgroundColor: '#fff7ed'}}>
         {NavLinking.map((link) => (
                <NavLink
                 className={({ isActive }) =>
        isActive ? "underline" : "no-underline"
      }
                  key={link.name}
                  to={link.path}
                  activeclassname="text-gray-300"
                //   className="text-white hover:text-gray-300 px-3 py-2 rounded-md font-medium"
                >
                {link.name}
            
           
                </NavLink>
              ))}
    </div>
  )
}

export default Host