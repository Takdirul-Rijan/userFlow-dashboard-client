import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold text-primary">
            UserFlow
          </Link>
        </div>

        {/* Center - Menu (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>

        {/* Right - Button */}
        <div className="navbar-end">
          <button className="btn btn-primary btn-sm">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
