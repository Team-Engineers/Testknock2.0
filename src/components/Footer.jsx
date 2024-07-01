import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className=" overflow-hidden  w-full ">
      <div className="border-t-[0.1px] border-b-[0.1px] max-sm:pb-5 border-[#ef81c86f]">
        <div className="grid  px-5 sm:px-8 sm:p-8 max-sm:pt-10  max-w-[1500px] mx-auto  grid-cols-1 font-bold  gap-8 lg:grid-cols-3">
          <div className="grid  justify-center">
            <div className=" flex gap-6 max-sm:pb-8 lg:justify-start text-[#063970] ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="max-h-[60px] max-w-[60px] pr-1 sm:pl-4 pb-2"
                    />
                  </div>
                  <div className="text-white font-sans font-medium text-lg ml-[-8%]">
                    <h2>
                        TestKnock
                    </h2>
                  </div>
                </div>
              </NavLink>
            </div>
            <p className=" text-left sm:text-[100%] text-[16px] max-sm:font-thin hover:text-white  leading-relaxed text-white  sm:ml-[20px] sm:mr-[20px] ">
            We believe in fostering long-term partnerships with our clients. We're more than just a service provider; we're your trusted tech advisors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:ml-10 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div className=" text-left ">
              <p className="md:text-[120%]   text-[90%] text-white  hover:text-white ">
                Services
              </p>
              <ul className="mt-8 space-y-2 text-[80%] md:text-[100%]">
                <li>
                  <NavLink
                    className="text-gray-400 transition hover:text-white"
                    to="/"
                  >
                    Web Development
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-400 transition hover:text-white"
                    to="/app"
                  >
                    App Development
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-400 transition hover:text-white"
                    to="/ui-ux"
                  >
                    UI/UX Designing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="text-gray-400 transition hover:text-white"
                    to="/content"
                  >
                    Content Creation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-400 transition hover:text-white"
                    to="/tech-solution"
                  >
                    Tech Solution
                  </NavLink>
                </li>
                
              </ul>
            </div>
            <div className="text-left ">
              <p className="md:text-[120%] text-[90%] hover:text-white  text-white whitespace-nowrap">
                Support
              </p>
              <ul className="mt-8 space-y-2 text-[80%] md:text-[100%]">
                <li>
                  <p className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Help Center
                  </p>
                </li>

                <li>
                  <p className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  FAQ
                  </p>
                </li>

                <li>
                  <p className="text-gray-400  transition hover:text-white whitespace-nowrap">
                  Technical Support
                  </p>
                </li>

                <li>
                  <p className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  Sales Support
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  Contact Us
                  </p>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <p className="md:text-[120%] text-[90%] hover:text-white  text-white whitespace-nowrap">
                Company
              </p>
              <ul className="mt-8 space-y-2 text-[80%] md:text-[100%]">
                
                <li>
                  <Link to="/services" className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Services
                  </Link>
                </li>
                <li>
                  <Link to={"/career"} className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Careers
                  </Link>
                </li>

                <li>
                  <Link to="/our-products" className="text-gray-400  transition hover:text-white whitespace-nowrap">
                  Our Product
                  </Link>
                </li>

                <li>
                  <Link to="/our_team" className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  Our Team
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-left sm:hidden mt-6">
              
              <ul className="mt-8 space-y-2 text-[80%] md:text-[100%]">
                
                <li>
                  <Link to="/services" className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to={"/policy"} className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/cookie" className="text-gray-400  transition hover:text-white whitespace-nowrap">
                  Cookie Policy
                  </Link>
                </li>

               
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className=" my-5 max-w-[1500px] font-bold mx-auto px-[50px] ">
          <div className="text-center sm:flex justify-between sm:text-left">
            <p className="flex max-sm:hidden sm:flex-row flex-col  gap-[10px] max-md:justify-center  md:text-[100%] text-[90%] ">
              <NavLink
                className="whitespace-nowrap text-gray-400   transition "
                to="/"
              >
                Terms of use
              </NavLink>
              <NavLink
                className="whitespace-nowrap text-gray-400   transition "
                to="/"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                className="whitespace-nowrap text-gray-400   transition "
                to="/"
              >
                Cookie Policy
              </NavLink>
            </p>
            <p className="mt-4 max-sm:flex justify-center text-center max-sm:gap-5 whitespace-nowrap max-sm:text-[12px] text-[90%] md:text-[100%] font-medium  text-gray-400 sm:order-first sm:mt-0">
              &copy; {updatedDate} TestKnock <p className="block text-gray-400 sm:inline">
              All rights reserved.
            </p>
            </p>
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;