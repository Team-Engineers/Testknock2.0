import React from 'react'
import { useParams } from 'react-router-dom'
import teams from '../../Utils/team'
import Footer from '../Footer'
import Navbar from '../Navbar'

const TeamOverview = () => {
    const { name } = useParams();
    const decodedName = name.replace(/_/g, ' ');
    const teamMember = teams.find(member => member.name.toLowerCase() === decodedName.toLowerCase());
    if (!teamMember) {
        return <div>
            <Navbar />
            <div className='text-center min-h-[50vh] flex justify-center items-center text-red-500 text-4xl'>
                Team member not found
            </div>
            <Footer />
        </div>;
    }

    return (
        <div className='text-white min-h-screen'>
            <div className='bg-[#5454D4] '>
                <Navbar />
                <div className='sm:h-[350px] h-[220px] relative items-end justify-center flex'>
                    <img className='sm:h-[330px] h-[200px]' src={teamMember.image} alt={teamMember.name} />
                    <div className='sm:p-4 left-4 font-bold  sm:space-y-5 absolute'>
                        <p className='max-sm:text-xs max-sm:mb-1 max-sm:text-[#0F071C]'>Since: {teamMember.since}</p>
                        <h1 className='sm:text-5xl text-2xl sm:text-[#0F071C]   font-bold '>{teamMember.name}</h1>
                        <p className='sm:text-4xl text-lg '>{teamMember.position}</p>
                    </div>
                </div>
            </div>
            <div className='sm:p-20 p-4 font-bold '>
                <h >
                    <h1 className='sm:text-4xl text-2xl text-[#B47BFC]'>
                        {teamMember.Questions1.testknock}
                    </h1>
                    <p className='my-4 sm:w-[70%] mb-10 max-sm:text-[14px]'>{teamMember.Questions.testknock}</p>
                </h>
                <h>
                    <h1 className='sm:text-4xl text-2xl text-[#B47BFC]'>
                        {teamMember.Questions1.lifehacks}
                    </h1>
                    <p className='my-4 sm:w-[70%] mb-10 max-sm:text-[14px]'>{teamMember.Questions.lifehacks}</p>

                </h>
                <h>
                    <h1 className='sm:text-4xl text-2xl text-[#B47BFC]'>
                        {teamMember.Questions1.startCoding}
                    </h1>
                    <p className='my-4 sm:w-[70%] mb-10 max-sm:text-[14px]'>{teamMember.Questions.startCoding}</p>

                </h>
                <h>
                    <h1 className='sm:text-4xl text-2xl text-[#B47BFC]'>
                        {teamMember.Questions1.alternateCareer}
                    </h1>
                    <p className='my-4 sm:w-[70%] mb-10 max-sm:text-[14px]'>{teamMember.Questions.alternateCareer}</p>
                </h>
            </div>
            <Footer />
        </div>
    )
}

export default TeamOverview