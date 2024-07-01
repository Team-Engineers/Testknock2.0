import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import BurgerAndMenu from "./BurgerMenu";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={` top-0 max-w-[1500px] mx-auto left-0 bg-transparent font-medium w-full z-50 flex lg:h-[80px] h-[70px] items-center justify-between pl-3 md:px-10 py-2 logo-header  transition-all duration-300 ease-in-out`}
    >
      <Link to="/">
        <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="Logo"
              className="sm:h-[50px] h-[40px] w-[40px] pr-1 sm:w-[50px]"
            />
          <div className="text-white  lg:text-lg ">
            <h2>TestKnock</h2>
          </div>
        </div>
      </Link>
      <div className="md:flex hidden">
        <nav className="flex lg:text-lg max-lg:space-x-5 space-x-10 px-10">
          <Link
            to="/"
            className={` whitespace-nowrap transition-all duration-200 hover:text-[#B47BFC] ${location.pathname === "/"  ? "text-[#B47BFC]" : "text-white"
              }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`whitespace-nowrap transition-all duration-200  hover:text-[#B47BFC] ${location.pathname === "/services"  ? "text-[#B47BFC]" : "text-white"
              }`}
          >
            Services
          </Link>
          <Link
            to="/our-products"
            className={`whitespace-nowrap transition-all duration-200  hover:text-[#B47BFC] ${location.pathname === "/our-products"  ? "text-[#B47BFC]" : "text-white"
              }`}
          >
            Our Products
          </Link>
          <Link
            to="/our_team"
            className={`whitespace-nowrap transition-all duration-200 hover:text-[#B47BFC] ${location.pathname === "/our_team"  ? "text-[#B47BFC]" : "text-white"
              }`}
          >
            Our Team
          </Link>
          <Link
            to="/about"
            className={`whitespace-nowrap  transition-all duration-200 hover:text-[#B47BFC] ${location.pathname === "/about"  ? "text-[#B47BFC]" : "text-white"
              }`}
          >
            About us
          </Link>
        </nav>
      </div>
      <Link
        to="/contact"
        className={`max-md:hidden text-white hover:bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C] border-white transition-all duration-200 border-2 px-5 p-1 rounded-[8px]  whitespace-nowrap hover:scale-105 ${location.pathname === "/contact"  ? "bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]" : ""
          }`}
      >
        Contact Us
      </Link>
      <div className="md:hidden flex ">
        <BurgerAndMenu />
      </div>
    </header>
  );
};

export default Navbar;