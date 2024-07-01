import React from 'react'
import image from "../../assets/images/About/mainimage.png"
const AboutUs = () => {
    return (
        <div className='md:min-h-screen max-w-[2000px] mb-10 mx-auto text-white'>
            <div className='text-center px-10 mt-10 text-white'>
                <h1 className='text-4xl font-bold mb-5'>
                    About Us
                </h1>
                <h1>
                    Expert Solutions, Scorecards, And Top-Tier Technical & IT Services
                </h1>
            </div>
            <div className='flex items-center mt-20 justify-between'>
                <div className=' md:w-[800px]' >
                    <h1 className='bg-[#2B1932] w-[80%] text-[14px] max-md:w-[80%]  max-sm:w-[90%] pr-5  md:text-xl rounded-r-[100px] py-10'>
                        We believe in fostering long-term partnerships with our clients.
                        We're more than just a service provider; we're your trusted tech
                        advisors.
                    </h1>
                    <h2 className='md:text-xl text-[14px]  py-10 max-sm:pl-[40px]  pl-[100px] pr-1'>
                        We'll work closely with you to understand your unique
                        goals and challenges, then leverage our expertise in web and app
                        development, content creation, UI/UX design, and end-to-end tech
                        solutions to deliver results that make a difference.
                    </h2>
                </div>
                <div className='relative max-md:hidden'>
                    <img className=' mx-auto' src={image} alt="" />

                </div>

            </div>

        </div>
    )
}

export default AboutUs