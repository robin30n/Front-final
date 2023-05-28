import React from "react";
import { NavLink } from "react-router-dom";
const HeaderLinks = ({ path }) => {
  return (
      <NavLink
        to={path === "all" ? "/" : `/${path}`}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-300 rounded-sm px-1 mr-5"
            : "hover:text-gray-900 mr-5"
        }
      >
        {path}
      </NavLink>
  );
};

export default HeaderLinks;
