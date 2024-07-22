import React, { useState } from 'react';

import {
  Link,
  NavLink,
} from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-white rounded-2xl border-x-orange-200 shadow-md m-1 px-4 lg:px-1">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Menu button for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 focus:outline-none"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {/* Navbar links for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              exact
              to="/"
              activeClassName="text-orange-600"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-orange-600"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="text-orange-600"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="text-orange-600"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-orange-600"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Responsive menu for mobile */}
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="text-orange-600"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="text-orange-600"
                className="block borser py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                activeClassName="text-orange-600"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                activeClassName="text-orange-600"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={toggleMenu}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-orange-600"
                className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
