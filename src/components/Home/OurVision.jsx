import React from 'react'
import background from "../../assets/images/Home/Vision/background.png"
import { BsArrowUpRight } from "react-icons/bs";

const OurVision = () => {
    return (
        <div>
            <div className='grid max-w-[1480px] pt-10 mx-auto mb-20  grid-cols-2 gap-5 px-5'>
                <div className='text-white '>
                    <div className='relative '>
                        <img className='absolute z-[0] w-[50vw] 2xl:h-[520px] lg:h-[560px] xl:h-[520px]' src={background} alt="" />
                    </div>
                    <div className='relative p-6  flex flex-col justify-end 2xl:h-[520px] lg:h-[560px] xl:h-[520px] z-[1]'>
                        <div className='h-[60px] font-bold text-2xl m-1 flex justify-center items-center absolute bg-[#C77DEE] rounded-full right-0 top-0 w-[60px]'>
                            <h1 className=''><BsArrowUpRight /></h1>
                        </div>
                        <h1 className='text-[#BD5D90] font-bold mb-6'>
                            Our Story
                        </h1>
                        <h1 className='font-bold' >
                            Bridging the Gap: Unleashing Innovation in Content & Tech
                        </h1>
                        <h1 className='mt-2 mb-6'>
                            Spotting a void in reliable content and tech solutions, we ignited a passion to bridge the gap. Our mission? Top-notch content interwoven with cutting-edge technology, empowering businesses with transformative solutions through our expertise and creativity.
                        </h1>
                        <button className='p-2 w-fit px-12 rounded-3xl bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='gap-5 flex flex-col justify-center'>
                    <div className='bg-[#B47BFC] rounded-2xl p-6 text-white relative'>
                        <div className='h-[60px] font-bold text-2xl m-2 flex text-white justify-center items-center absolute bg-[#2B2338] rounded-full right-0 top-0 w-[60px]'>
                            <h1 className=''><BsArrowUpRight /></h1>
                        </div>
                        <h1 className='font-bold mb-8'>
                            Our Vision
                        </h1>
                        <h1 className='font-bold mb-5'>The Content & Tech Revolution: Empowering You <br /> Through Innovation</h1>
                        <h1>
                        We weave cutting-edge technology with premium content creation, crafting experiences that redefine excellence. Our vision: empower users with user-centric experiences and foster a community built on creativity, innovation, and value
                        </h1>
                    </div>
                    <div className='bg-[#FF7FC2]  rounded-2xl p-6 text-white relative'>
                        <div className='h-[60px] font-bold text-2xl m-2 flex text-white justify-center items-center absolute bg-[#2B2338] rounded-full right-0 top-0 w-[60px]'>
                            <h1 className=''><BsArrowUpRight /></h1>
                        </div>
                        <h1 className='font-bold mb-8'>
                            Our Mission
                        </h1>
                        <h1 className='font-bold mb-5'>Beyond Textbooks: Your Personalized Learning Journey <br /> Starts Here</h1>
                        <h1>
                            We bridge the gap in education with affordable, high-quality content and cutting-edge tech solutions. We craft engaging, innovative experiences to empower businesses and individuals with the tools they need to thrive in today's digital world.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVision