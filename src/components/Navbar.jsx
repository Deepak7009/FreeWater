import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClasses = (path) =>
    location.pathname === path
      ? "text-white block px-3 py-2 rounded-md bg-gray-700"
      : "text-white block px-3 py-2 rounded-md hover:bg-gray-700";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <nav className="bg-gray-900 text-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">FreeWater</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none">
            <svg
              className="w-6 h-6 relative z-[2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }></path>
            </svg>
          </button>
        </div>
        <div
          className={`fixed md:static inset-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out md:transform-none md:translate-x-0 w-full md:w-auto bg-gray-800 md:bg-transparent h-full md:h-auto z-[1] top-[64px]`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
            <li>
              <Link
                to="/"
                className={linkClasses("/")}
                onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/advertise"
                className={linkClasses("/advertise")}
                onClick={() => setIsOpen(false)}>
                Advertise
              </Link>
            </li>
            <li>
              <Link
                to="/distribute"
                className={linkClasses("/distribute")}
                onClick={() => setIsOpen(false)}>
                Distribute
              </Link>
            </li>
            {/*<li>
              <Link
                to="/hall-of-fame"
                className={linkClasses("/hall-of-fame")}
                onClick={() => setIsOpen(false)}>
                Hall of Fame
              </Link>
            </li>*/}
            <li>
              <Link
                to="/faq"
                className={linkClasses("/faq")}
                onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={linkClasses("/contact-us")}
                onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
