import React from 'react'
import dev from "../../assets/images/Home/Services/1.svg"
import des from "../../assets/images/Home/Services/2.svg"
import tech from "../../assets/images/Home/Services/3.svg"
import car from "../../assets/images/Home/Services/4.svg"
import circle from "../../assets/images/Home/Services/circle.svg"
import gradient from "../../assets/images/Services/gradient.png"
import { Link } from 'react-router-dom'

const services = [
    {
        icon: dev,
        title: "Development",
        description: "Our expert developers create robust, scalable solutions tailored to your needs. From web apps to mobile platforms, we bring your ideas to life."
    },
    {
        icon: des,
        title: "UI/UX Design",
        description: "We craft intuitive, visually appealing interfaces that enhance user experience. Our designs blend aesthetics with functionality for maximum impact."
    },
    {
        icon: tech,
        title: "Tech Solution",
        description: "We provide comprehensive tech solutions to streamline your operations. Our innovative approaches solve complex problems and drive efficiency."
    },
    {
        icon: car,
        title: "Content Creation",
        description: "Our creative team produces engaging, high-quality content that resonates with your audience. We help tell your story and build your brand."
    }
]

const MainServices = () => {
    return (
        <div className='sm:my-20 sm:mb-24 my-5 mb-24 max-w-[1500px] mx-auto relative'>
            <div>
                <h1 className="sm:text-5xl text-[6vw] text-white font-bold text-center [font-family:'Houschka']">
                    Unleash Your Digital Potential: <br />
                    Start Your Success <br className='sm:hidden' /> Story with Testknock.
                </h1>
            </div>
            <div className='flex max-w-[1200px] mx-auto gap-10 md:gap-20 sm:mt-20 mt-10 justify-center flex-wrap'>
                {services.map((service, index) => (
                    <div key={index} className='border-[#2B2338] rounded-md max-sm:mx-4 border p-1'>
                        <div className='text-white rounded-md gap-2 relative min-h-[300px] w-fit sm:w-[330px] bg-[#2B2338]'>
                            <img className='absolute p-0 top-0 w-[330px]' src={gradient} alt="" />
                            <div className='min-h-[300px flex flex-col justify-between p-5'>
                                <div className='w-fit py-3 rounded-full'>
                                    <img className='mx-aut0 sm:w-[50px] sm:h-[50px] mb-4' src={service.icon} alt="" />
                                </div>
                                <h1 className='sm:text-3xl text-2xl mb-3 text-left'>{service.title}</h1>
                                <h1 className='opacity-70 max-sm:text-[14px]'>{service.description}</h1>
                                <Link to={"/contact"} className='p-2 max-sm:text-[14px] mt-3 w-fit px-12 rounded-3xl bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]'>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img className='absolute right-0 pr-10' src={circle} alt="" />
        </div>
    )
}

export default MainServices