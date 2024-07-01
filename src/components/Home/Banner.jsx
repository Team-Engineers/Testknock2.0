import React from 'react'

const Banner = () => {
  return (
    <div className='md:min-h-[500px] max-sm:mt-5 pb-10 flex justify-center items-center relative overflow-hidden'>      
   
      <div className='text-white text-center space-y-6 relative z-10'>
        <h1 className='border-[#7E3D61] rounded-md max-sm:py-2 max-sm:text-[13px] p-1 px-4 w-fit border mx-auto'>
          WELCOME TO TESTKNOCK
        </h1>
        <h2 className="text-5xl  max-sm:leading-8 max-sm:text-[23px] max-md:text-[40px] font-bold [font-family:'Houschka'] mx-auto">
          Level Up Your Digital Game: <br />
          Let's Build Something Amazing!
        </h2>
        <h1 className='max-sm:text-[14px]  max-sm:px-8'>Unleash your potential. Our expert solutions, top-tier IT services, and insightful scorecards empower you to <br className='max-md:hidden' />
          achieve game-changing results. Track progress and optimize every step with our proven strategies. Contact us today!</h1>

        <div className='flex sm:gap-[100px] gap-[50px] max-sm:py-5 justify-center '>
          <button className='sm:p-2 sm:px-12 px-7 max-sm:py-1  max-sm:text-[14px]  rounded-3xl bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C]'>
            Explore
          </button>
          <button className='sm:p-2 sm:px-8 px-5 border-white max-sm:py-1  max-sm:text-[14px] border rounded-3xl '>
            Learn More
          </button>
        </div>
      </div>        
    </div>
  )
}

export default Banner