import React, { useEffect, useState } from "react";
import { Link as LinkS } from "react-scroll";
import { useHistory } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";
import { useStateValue } from "../../services/StateProvider";

import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import tokenexpired from "../../utils/tokenexpired";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const history = useHistory();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="pb-6 bg-black lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="https://t3.ftcdn.net/jpg/05/22/72/70/360_F_522727006_9RWWfFdNuq7JODt0jbpwhHbUuHimgc46.jpg"
              className="h-16"
            />
          </Link>

          {/* Desktop Links */}
          {/* <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-blue-600"
            >
              Pricing
            </a>
          </div> */}
          <div className="gap-12 flex justify-center items-center">
            <div className="">
              <div>
                <Link to={"/profile"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6  fill-white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            {tokenexpired() ? (
              <a
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                className=" lg:inline-flex items-center p-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Logout
              </a>
            ) : (
              <a
                onClick={() => {
                  window.location.href = "/login";
                }}
                className=" lg:inline-flex items-center p-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={toggleMobileMenu}
            className="text-white lg:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
