import React from "react";
import { NavLink } from "react-router-dom";

const Host = () => {
  const NavLinking = [
    {
      name: "Income",
      path: "/Income",
    },
    {
      name: "Vans",
      path: "/Vans",
    },
    {
      name: "Reviews",
      path: "/Review",
    },
    // { name: "Service", path: "/About/Service" }
  ];
  return (
    <div style={{ padding: "4% 10%", backgroundColor: "#fff7ed" }}>
    <div className="flex items-center">
      <NavLink to="/Dashboard" className={({ isActive }) =>
          isActive ? "underline" : "no-underline"
        }>
        Dashboard
      </NavLink>
      <div className="ml-8 flex items-baseline lg:space-x-8 space-x-1 text-xs md:text-sm">
        {NavLinking.map((link) => (
          <NavLink
          className={({ isActive }) =>
          isActive ? "underline" : "no-underline"
        }
            key={link.name}
            to={link.path}
            activeClassName="text-gray-300"
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Host;
