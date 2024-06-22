import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import BurgerAndMenu from "./BurgerMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <header
      className={` top-0 left-0 bg-transparent font-medium w-full z-50 flex lg:h-[80px] h-[70px] items-center justify-between px-10 py-2 logo-header  transition-all duration-300 ease-in-out`}
    >
      <Link to="/">
        <div className="flex justify-center items-center">
          <div className="">
            <img
              src={Logo}
              alt="Logo"
              className="h-[50px] w-[50px]"
            />
          </div>
          <div className="text-white  text-lg ">
            <h2>TestKnock</h2>
          </div>
        </div>
      </Link>
      <div className="md:flex hidden">
        <nav className="flex text-lg space-x-10 px-10">
          <Link
            to="/"
            className={`text-white whitespace-nowrap transition-all duration-200 hover:text-[#B47BFC] ${
                location.pathname === "/" && !isScrolled ? "text-black" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`text-white whitespace-nowrap transition-all duration-200  hover:text-[#B47BFC] ${
              location.pathname === "/" && !isScrolled ? "text-black" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/our-products"
            className={`text-white whitespace-nowrap transition-all duration-200  hover:text-[#B47BFC] ${
                location.pathname === "/" && !isScrolled ? "text-black" : ""
            }`}
          >
            Our Products
          </Link>
          <Link
            to="/our-team"
            className={`text-white whitespace-nowrap transition-all duration-200 hover:text-[#B47BFC] ${
                location.pathname === "/" && !isScrolled ? "text-black" : ""
            }`}
          >
            Our Team
          </Link>
          <Link
            to="/about"
            className={`text-white whitespace-nowrap  transition-all duration-200 hover:text-[#B47BFC] ${
                location.pathname === "/" && !isScrolled ? "text-black" : ""
            }`}
          >
            About us
          </Link>
        </nav>
      </div>
      <Link
            to="/contact"
            className={`text-white border-white transition-all duration-200 border-2 px-5 p-1 rounded-[8px]  whitespace-nowrap hover:scale-105 ${
              location.pathname === "/" && !isScrolled ? "text-black" : ""
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