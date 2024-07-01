import React from 'react'
import thapar from "../../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../../assets/images/Home/Portfolio/cuet.gif"
import zigzag from "../../assets/images/Home/Portfolio/zigzag.png"
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='mb-20 max-w-[1480px] relative mx-auto'>
        <div>
        <h1 className="text-6xl mb-14  text-white max-sm:leading-8 max-sm:text-[28px] max-sm:pt-5 font-bold text-center  [font-family:'Houschka']">Our Awesome Portofolio</h1>
        </div>
        <div className='grid px-20 max-md:px-5 grid-cols-1 max-sm:gap-10 sm:grid-cols-2 max-md:gap-5 gap-20'>
            <Link to="portfolio/cuet_testknock" className='rounded-2xl -5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]'>
            <img className='rounded-2xl sm:w-[50vw] h-[200px]  sm:h-[280px] ' src={cuet} alt="" />
            </Link>
            <Link  to="portfolio/thapar" className='rounded-2xl py-5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]'>
            <img className='rounded-2xl sm:w-[50vw]  h-[200px]  sm:h-[280px] ' src={thapar} alt="" />
            </Link>
        </div>
        <img className='absolute left-0 md:pl-10 pt-10' src={zigzag} alt="" />

    </div>
  )
}

export default Portfolio