import React from 'react'
import thapar from "../../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../../assets/images/Home/Portfolio/cuet.gif"
import product from "../../assets/images/product.png"
import { HiMiniArrowUpRight } from "react-icons/hi2";

import { Link } from 'react-router-dom'
const services = [
    {
        img: cuet,
        website: "CUET-Testknock",
        website_link: "https://cuet.testknock.com/",
        client: "CUET Platform for Students/School ",
        date: "30 April 2024",
        location: "New Delhi",
        link: "cuet_testknock",
        description: "Leveraging our expertise, we created a dynamic and interactive online learning platform for CUET-Testknock. This platform features intuitive navigation, a comprehensive question bank, and personalized learning paths, empowering students to excel in the CUET exam."
    },
    {
        img: thapar,
        website: "Thapar Institute",
        website_link: "https://thapar.testknock.com/",
        client: "Thapar Institute for College students",
        date: "30 April 2023",
        location: "New Delhi",
        link: "thapar",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    }

];
const MainOurProducts = () => {

    return (
        <div>
            <div className='min-h-[90vh] mb-20 flex   items-center overflow-hidden max-w-[1400px] mx-auto'>
                <div className='w-full '>
                    <div className='sm:h-[300px] h-[250px] flex border-y border-[#b2c28528] flex-col text-white justify-center items-center bg-[#0e0619]'>
                        <img className='absolute  opacity-10 h-[300px] w-screen' src={product} alt="" />
                        <h1 className="sm:text-4xl text-[30px] mb-2 text-center font-bold ">Our Works</h1>
                        <h1 className='md:w-[60%] max-sm:text-[14px] w-[90%] text-center opacity-85'>Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</h1>
                    </div>

                    <div className='text-white p-4 sm:p-10  '>
                        <h1 className='text-4xl max-sm:text-[30px] mb-2 font-bold'>
                            At TestKnock
                        </h1>
                        <h1 className='opacity-80 max-sm:text-[13px] my-4'>
                            We empower diverse clients with innovative digital solutions that propel their success.
                        </h1>
                        <h1 className='bg-[#262626] max-sm:text-[12px] w-fit mt-6 p-2 px-3 rounded-md'>
                            Here are some examples of our notable works:
                        </h1>
                    </div>
                    <div className='grid md:grid-cols-2'>
                        {services.map((service, index) => (
                            <div className=' py-5 border-separate border-e border-t border-[#b2c28528]' key={index}>
                                <div to={`/portfolio/${service.link}`}>
                                    <div className='text-[#98989A] border-b border-[#b2c28528] py-4 pb-8 px-5 sm:px-10 font-bold'>
                                        <h1 className='text-xl max-sm:text-[5vw] max-lg:text-[18px] '>{service.client}</h1>
                                    </div>
                                    <div className=' rounded-3xl py-0 p-5 sm:p-10 '>
                                        <Link to={`/portfolio/${service.link}`}>
                                            <img className=' w-full  mx-auto rounded-lg sm:rounded-2xl m-10 h-[200px] sm:h-[300px] ' src={service.img} alt="" />
                                        </Link>
                                    </div>
                                    <div className='sm:px-10 px-5 relative'>
                                        <Link target='_blank' to={`${service.website_link}`}  >     
                                        <h1 className='text-[#9EFF00] text-xl rounded-lg bg-[#262626] sm:mr-6  mr-2 sm:p-3 p-2 font-bold top-4 right-4 absolute '><HiMiniArrowUpRight/></h1>
                                        </Link>
                                        <div className='text-white  pb-3'>
                                            <h1 className='text-lg  font-bold mb-4'>{service.website}</h1>
                                            <Link target='_blank' to={`${service.website_link}`} className='bg-[#262626] text-[#98989A] w-fit max-sm:text-[14px]  p-2 px-3 rounded-md'>
                                                {service.website_link}</Link>
                                        </div>
                                        <div className='text-[#98989A]  mt-5 '>
                                            <h1 className='text-lg max-sm:text-[15px]'>{service.description}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default MainOurProducts