import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NavLink to="/" className="flex items-center px-2 py-4">
                <img
                  src="https://toppng.com/uploads/preview/food-delivery-icon-png-home-delivery-logo-11563001011im9v4qwz0l.png"
                  alt="Logo"
                  className="w-8 h-8 mr-2"
                />
                <span className="text-lg font-semibold text-gray-500">
                  Hungry Naki
                </span>
              </NavLink>
            </div>
            <div className="items-center hidden space-x-1 md:flex">
              <NavLink
                to="/food"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
                activeClassName="selected"
              >
                Food
              </NavLink>
              <NavLink
                to="/service"
                activeClassName="selected"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="selected"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="selected"
                className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="items-center hidden space-x-3 md:flex ">
            <a
              href="#!"
              className="px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-green-500 hover:text-white"
            >
              Log In
            </a>
            <a
              href="#!"
              className="px-2 py-2 font-medium text-white transition duration-300 bg-green-500 rounded hover:bg-green-400"
            >
              Sign Up
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={open ? "mobile-menu" : "hidden mobile-menu"}>
        <ul className="">
          <li className="active">
            <NavLink
              to="/food"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              activeClassName="mobile_select"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              activeClassName="mobile_select"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="mobile_select"
              to="/about"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="mobile_select"
              to="/contact"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
