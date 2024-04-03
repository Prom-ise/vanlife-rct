import React from "react";
import { NavLink } from "react-router-dom";

const Host = () => {
  const NavLinking = [
    {
      name: "Income",
      path: "/Van",
    },
    {
      name: "Vans",
      path: "/Van",
    },
    {
      name: "Reviews",
      path: "/Van",
    },
    // { name: "Service", path: "/About/Service" }
  ];
  return (
    <div style={{ padding: "5% 10%", backgroundColor: "#fff7ed" }}>
        <div className="flex items-center">
        <div className="flex items-center">
            <NavLink to="/host" className={({ isActive }) =>
            isActive ? "underlining" : "no-underlining"
          }>
            Dashboard
            </NavLink>
          </div>
        <div className="ml-6 flex items-baseline lg:space-x-6 space-x-1 text-xs md:text-sm">
      {NavLinking.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "underlines" : "no-underlines"
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
      </div>
    </div>
  );
};

export default Host;
