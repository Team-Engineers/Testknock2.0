import React from 'react'
import { useParams } from 'react-router-dom'
import teams from '../../Constants/team'
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
                <div className='h-[350px] relative items-end justify-center flex'>
                    <img className='h-[330px]' src={teamMember.image} alt={teamMember.name} />
                    <div className='p-4 left-4 font-bold space-y-5 absolute'>
                        <p className=''>Since: {teamMember.since}</p>
                        <h1 className='text-5xl text-[#0F071C]  mb-2 font-bold '>{teamMember.name}</h1>
                        <p className='text-4xl '>{teamMember.position}</p>
                    </div>
                </div>
            </div>
            <div className='p-20 font-bold '>
                <h >
                    <h1 className='text-4xl text-[#B47BFC]'>
                        {teamMember.Questions1.testknock}
                    </h1>
                    <p className='my-4 w-[70%] mb-10'>{teamMember.Questions.testknock}</p>
                </h>
                <h>
                    <h1 className='text-4xl text-[#B47BFC]'>
                        {teamMember.Questions1.lifehacks}
                    </h1>
                    <p className='my-4 w-[70%] mb-10'>{teamMember.Questions.lifehacks}</p>

                </h>
                <h>
                    <h1 className='text-4xl text-[#B47BFC]'>
                        {teamMember.Questions1.startCoding}
                    </h1>
                    <p className='my-4 w-[70%] mb-10'>{teamMember.Questions.startCoding}</p>

                </h>
                <h>
                    <h1 className='text-4xl text-[#B47BFC]'>
                        {teamMember.Questions1.alternateCareer}
                    </h1>
                    <p className='my-4 w-[70%] mb-10'>{teamMember.Questions.alternateCareer}</p>
                </h>
            </div>
            <Footer />
        </div>
    )
}

export default TeamOverview