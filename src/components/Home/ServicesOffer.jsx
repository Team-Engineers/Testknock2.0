import React from 'react'
import dev from "../../assets/images/Home/Services/1.svg"
import des from "../../assets/images/Home/Services/2.svg"
import tech from "../../assets/images/Home/Services/3.svg"
import car from "../../assets/images/Home/Services/4.svg"
import circle from "../../assets/images/Home/Services/circle.svg"

const services = [
    {
        icon: dev,
        title: "Development",
        description: "Create a platform with the best and coolest quality from us.",
        bgColor: "bg-[#5454d43c]"
    },
    {
        icon: des,
        title: "UI/UX Designer",
        description: "We provide UI/UX Design services, and of course with the best quality",
        bgColor: "bg-[#f0403735]"
    },
    {
        icon: tech,
        title: "Tech Solution",
        description: "We handle it all, software to hardware, for your complete solution.",
        bgColor: "bg-[#fedd5a2d]"
    },
    {
        icon: car,
        title: "Content Creation",
        description: "Our site curates exclusive, high-quality content meticulously designed for professionals-in-training.",
        bgColor: "bg-[#5454d43c]"
    }
]

const ServicesOffer = () => {
    return (
        <div className='my-20 max-w-[1500px] mx-auto relative'>
            <div>
                <h1 className="text-6xl text-white font-bold text-center [font-family:'Houschka']">
                    The Service We Provide <br /> For You
                </h1>
            </div>
            <div className='flex max-w-[1100px] mx-auto gap-20 mt-20 justify-center flex-wrap'>
                {services.map((service, index) => (
                    <div key={index} className='text-white flex flex-col gap-2 max-w-[250px] text-center justify-center items-center'>
                        <div className={`${service.bgColor} p-3 rounded-full`}>
                            <img src={service.icon} alt="" />
                        </div>
                        <h1 className='text-xl'>{service.title}</h1>
                        <h1 className='opacity-70'>{service.description}</h1>
                    </div>
                ))}
            </div>
            <img className='absolute right-0 pr-10' src={circle} alt="" />
        </div>
    )
}

export default ServicesOffer