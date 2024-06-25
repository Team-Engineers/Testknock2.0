import React from 'react'
import teams from '../Constants/team'
import { Link } from 'react-router-dom'

const OurTeamMain = () => {
    return (
        <div className=' text-white min-h-[90vh] px-10 max-w-[1280px] mx-auto items-center grid '>
            <div className=''>
                <h1 className='text-white  text-center text-4xl font-bold'>
                    Our Team
                </h1>
            </div>
            <div className=" grid gap-20 mb-20 grid-cols-3">
                {teams.map((member, index) => (
                    <Link className='hover:bg-blue-400 h-[330px] overflow-hidden  bg-gray-600 hover:scale-110 transition-all duration-300' to={`${member.name.replace(/\s+/g, '_')}`} key={index}>
                        <div className=' '>
                            <img className=' object-fit relative top-[1px] grayscale hover:grayscale-0 transition-all duration-300 mx-auto' src={member.image} alt={member.name} />
                        </div>
                        <div className='relative top-[-25px] left-1'>
                            <img className='absolute z-[2] w-[50px] h-[50px] bg-black rounded-full  p-2' src={member.icon} alt="" />
                        </div>
                        <div className='bg-[#30313F] relative z-[1] h-[120px] overflow-hidden font-bold pb-8 p-3 py-5'>
                            <h3 className='text-xl mt-3'>{member.name}</h3>
                            <p className=' font-normal mt-3 opacity-75'>{member.position}</p>
                        </div>

                    </Link>
                ))}
            </div>

        </div>
    )
}

export default OurTeamMain