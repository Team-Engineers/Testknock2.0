import React from "react";
import facebookIcon from "../assets/images/Contact/facebook.svg";
import instagramIcon from "../assets/images/Contact/instagram.svg";
import linkedinIcon from "../assets/images/Contact/linkedIn.svg";
import twitterIcon from "../assets/images/Contact/google.svg";
import { RxArrowRight } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoMail } from "react-icons/go";


const Contact = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.013437802437!2d77.21783243081936!3d28.63010902426457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd317b7b6db1%3A0xfb8a939428a4d433!2sKanchanjunga%20Building%2C%20Barakhamba%20Rd%2C%20Fire%20Brigade%20Lane%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India!5e0!3m2!1sen!2sus!4v1716054881079!5m2!1sen!2sin&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c`;

  return (
    <div className="lg:min-h-screen grid p-8 items-center max-w-[1280px] mx-auto">
      <div className="grid gap-20 mb-16 grid-cols-2">
        <div className=" h-[400px]">
          <h1 className="text-3xl text-white font-bold">CONTACT US</h1>
          <iframe
            className="mt-5 rounded-3xl h-[86%] w-full  invert-[0.92] contrast-[0.83]"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps" />
        </div>
        <div className="h-[400px] flex flex-col justify-between text-white">
          <div className="text-white  font-bold">
            <h1 className="text-[#FF5A62] mb-4 text-3xl">
              GET IN TOUCH
            </h1>
            <h1>
              Have Some Question? <br />
              Feel free to ask them anytime
            </h1>
          </div>
          <input placeholder='Name' className='focus:outline-none text-white pl-0 p-2 bg-transparent border-b-2 border-white w-full ' type="text" name="" id="" />
          <input placeholder='Email' className='focus:outline-none text-white pl-0 p-2 bg-transparent border-b-2 border-white w-full ' type="text" name="" id="" />
          <input placeholder='Phone Number' className='focus:outline-none text-white pl-0 p-2 bg-transparent border-b-2 border-white w-full ' type="text" name="" id="" />
          <input placeholder='Message' className='focus:outline-none text-white pl-0 p-2 bg-transparent border-b-2 border-white w-full ' type="text" name="" id="" />
          <button className="flex gap-2 justify-start items-center">Send Message <RxArrowRight /></button>
        </div>
      </div>
      <div className=" gap-5 pl-5 flex">
        <div className="text-white text-left w-1/2">
          <div className="flex gap-2 items-center" >
            <h className="w-[40px] bg-white h-[2px]" />
            <h1>
              Address
            </h1>
          </div>
          <div className="flex  gap-2 py-2 items-center">
            <h1 className="w-[40px]  flex justify-center text-center"><SlLocationPin /></h1>
            <h1 className="w-[88%]">
              Office No. - 42, Durga Vihar,
              Near Amrapali Saphhire,
              Sec-45, Noida , 201301
            </h1>
          </div>

        </div>
        <div className="text-white w-1/2">
          <div className="flex  gap-2 items-center" >
            <h className="w-[40px] bg-white h-[2px]" />
            <h1>
              Phone
            </h1>
          </div>
          <div className="flex py-2 gap-2 items-center">
            <h1 className="w-[40px]  flex justify-center text-center"><MdOutlineLocalPhone /></h1>
            <h1>
              +91 9953617456
            </h1>
          </div>

        </div>
        <div className="text-white w-1/2">
          <div className="flex gap-2 items-center" >
            <h className="w-[40px] bg-white h-[2px]" />
            <h1>
              Email
            </h1>
          </div>
          <div className="flex gap-2 py-2 items-center">
            <h1 className="w-[40px] flex justify-center text-center"><GoMail /></h1>
            <h1>
              info@testknock.com
            </h1>
          </div>

        </div>
        <div className="text-white w-1/2">
          <div className="flex gap-2 items-center" >
            <h className="w-[40px] bg-white h-[2px]" />
            <h1>
              Social
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <h1>
              <div className=" gap-3 flex flex-row py-2">
                <div>
                  <img className="w-7 h-7 cursor-pointer" src={facebookIcon} />
                </div>
                <div>
                  <img className="w-7 h-7 cursor-pointer" src={instagramIcon} />
                </div>
                <div>
                  <img className="w-7 h-7  cursor-pointer" src={linkedinIcon} />
                </div>
                <div>
                  <img className="w-7 h-7  cursor-pointer" src={twitterIcon} />
                </div>
              </div>
            </h1>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
