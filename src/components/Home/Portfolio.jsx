import React from 'react'
import thapar from "../../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../../assets/images/Home/Portfolio/cuet.gif"
import zigzag from "../../assets/images/Home/Portfolio/zigzag.png"

const Portfolio = () => {
  return (
    <div className='mb-20'>
        <div>
        <h1 className="text-6xl mb-10  text-white font-bold text-center  [font-family:'Houschka']">Our Awesome Portofolio</h1>
        </div>
        <div className='grid px-20 grid-cols-2 gap-20'>
            <div className='rounded-2xl py-5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]'>
            <img className='rounded-2xl  h-[280px] ' src={cuet} alt="" />

            </div>
            <div className='rounded-2xl py-5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]'>
            <img className='rounded-2xl  h-[280px] ' src={thapar} alt="" />
            </div>
        </div>
        <img className='absolute left-0 pl-10 pt-10' src={zigzag} alt="" />

    </div>
  )
}

export default Portfolio