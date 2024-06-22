import React from 'react'

const Banner = () => {
  return (
    <div className='min-h-[500px] pb-10 flex justify-center items-center relative overflow-hidden'>      
   
      <div className='text-white text-center space-y-6 relative z-10'>
        <h1 className='border-[#7E3D61] rounded-md p-1 px-4 w-fit border mx-auto'>
          WELCOME TO TESTKNOCK
        </h1>
        <h2 className="text-5xl font-bold [font-family:'Houschka'] mx-auto">
          Level Up Your Digital Game: <br />
          Let's Build Something Amazing!
        </h2>
        <h1>Unleash your potential. Our expert solutions, top-tier IT services, and insightful scorecards empower you to <br />
          achieve game-changing results. Track progress and optimize every step with our proven strategies. Contact us today!</h1>

        <div className='flex gap-[100px] justify-center'>
          <button className='p-2 px-12 rounded-3xl bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]'>
            Explore
          </button>
          <button className='p-2 px-8 border-white border rounded-3xl '>
            Learn More
          </button>
        </div>
      </div>        
    </div>
  )
}

export default Banner