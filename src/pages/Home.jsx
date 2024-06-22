import React from 'react'
import Banner from '../components/Home/Banner'
import HomeAbout from '../components/Home/HomeAbout'
import ServicesOffer from '../components/Home/ServicesOffer'
import Portfolio from '../components/Home/Portfolio'
import OurVision from '../components/Home/OurVision'
import Testimonials from '../components/Home/Testimonials'
import HomeContact from '../components/Home/HomeContact'

const Home = () => {
  return (
    <div>
        <Banner /> 
        <HomeAbout />
      <ServicesOffer />
      <Portfolio />
      <OurVision />
      <Testimonials />
      <HomeContact/>
    </div>
  )
}

export default Home