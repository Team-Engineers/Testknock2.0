import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className=" overflow-hidden   w-full ">
      <div className="border-t-[0.1px] border-b-[0.1px] border-[#ef81c86f]">
        <div className="grid  px-8 p-8 max-w-[1500px] mx-auto  grid-cols-1 font-medium  gap-8 lg:grid-cols-3">
          <div className="grid  justify-center">
            <div className=" flex justify-center gap-6 lg:justify-start text-[#063970] ">
              <NavLink to="/">
                <div className="flex items-center">
                  <div className="mr-4 mb-[-12px] ">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="max-h-[60px] max-w-[60px] pr-1 pl-4 pb-2"
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
            <p className=" text-left md:text-[100%] text-[80%] hover:text-white  leading-relaxed text-white  ml-[20px] mr-[20px] ">
            We believe in fostering long-term partnerships with our clients. We're more than just a service provider; we're your trusted tech advisors.
            </p>
          </div>
          <div className="grid grid-cols-2 ml-10 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
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
                  <p className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Home
                  </p>
                </li>

                <li>
                  <p className="text-gray-400 transition hover:text-white whitespace-nowrap">
                  Services
                  </p>
                </li>

                <li>
                  <p className="text-gray-400  transition hover:text-white whitespace-nowrap">
                  Our Product
                  </p>
                </li>

                <li>
                  <p className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  Our Team
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 transition  hover:text-white whitespace-nowrap">
                  About Us
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className=" my-5 max-w-[1500px] mx-auto px-[50px] ">
          <div className="text-center sm:flex justify-between sm:text-left">
            <p className="flex sm:flex-row flex-col  gap-[10px] max-md:justify-center  md:text-[100%] text-[90%] ">
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
            <p className="mt-4 md:text-[100%] font-medium text-[90%] text-gray-400 sm:order-first sm:mt-0">
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