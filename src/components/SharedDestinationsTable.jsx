import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const SharedDestinationsTable = () => {
  return (
    <>
      <nav>
        <NavLink
          to='/destinations/africa'
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          africa
        </NavLink>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedDestinationsTable;
