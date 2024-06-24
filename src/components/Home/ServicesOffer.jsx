import React from 'react'
import dev from "../../assets/images/Home/Services/1.svg"
import des from "../../assets/images/Home/Services/2.svg"
import tech from "../../assets/images/Home/Services/3.svg"
import car from "../../assets/images/Home/Services/4.svg"
import circle from "../../assets/images/Home/Services/circle.svg"

const ServicesOffer = () => {
    return (
        <div className='my-20 max-w-[1500px] mx-auto relative'>
            <div>
                <h1 className="text-6xl  text-white font-bold text-center  [font-family:'Houschka']">The Service We Provide <br /> For You</h1>
            </div>
            <div className='flex max-w-[1100px] mx-auto gap-20 mt-20 justify-center flex-wrap'>
                <div className='text-white flex flex-col gap-2 max-w-[250px] text-center justify-center items-center'>
                    <div className='bg-[#5454d43c] p-3 rounded-full'>
                        <img src={dev} alt="" />
                    </div>
                    <h1 className='text-xl'>Development</h1>
                    <h1 className='opacity-70'>Create a platform with the best and coolest quality from us.</h1>
                </div>
                <div className='text-white flex flex-col gap-2 max-w-[250px] text-center justify-center items-center'>
                    <div className='bg-[#f0403735] p-3 rounded-full'>
                        <img src={des} alt="" />
                    </div>
                    <h1 className='text-xl'>UI/UX Designer</h1>
                    <h1 className='opacity-70'>We provide UI/UX Design services, and of course with the best quality</h1>
                </div>
                <div className='text-white flex flex-col gap-2 max-w-[250px] text-center justify-center items-center'>
                    <div className='bg-[#fedd5a2d] p-3 rounded-full'>
                        <img src={tech} alt="" />
                    </div>
                    <h1 className='text-xl'>Tech Solution</h1>
                    <h1 className='opacity-70'>We handle it all, software to hardware, for your complete solution.</h1>
                </div>
                <div className='text-white flex flex-col gap-2 max-w-[250px] text-center justify-center items-center'>
                    <div className='bg-[#5454d43c] p-3 rounded-full'>
                        <img src={car} alt="" />
                    </div>
                    <h1 className='text-xl'>Content Creation</h1>
                    <h1 className='opacity-70'>Our site curates exclusive, high-quality content meticulously designed for professionals-in-training.</h1>
                </div>

            </div>
            <img className='absolute right-0 pr-10' src={circle} alt="" />
        </div>
    )
}

export default ServicesOffer