import React from 'react'
import img from "../../assets/images/Home/whrv.png"
const HomeAbout = () => {
    return (
        <div>
            <div className='grid grid-cols-2  max-w-[1480px]  mx-auto gap-10 px-8'>
                <div className='border-[#6b6ba797]   border rounded-xl'>
                    <img className='p-2 w-[50vw] h-[400px] object-cover  rounded-xl' src={img} alt="" />
                </div>
                <div className='text-white'>
                    <h1 className='text-[#B47BFC] mb-10'>WHO ARE WE?</h1>
                    <h1 className='mb-10'>
                        We believe in fostering long-term partnerships with our clients.
                        We're more than just a service provider; we're your trusted tech
                        advisors. We'll work closely with you to understand your unique
                        goals and challenges, then leverage our expertise in web and app
                        development, content creation, UI/UX design, and end-to-end tech
                        solutions to deliver results that make a difference.
                    </h1>
                    <button className='p-2 px-12 rounded-3xl bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]'>
                        Discover More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout