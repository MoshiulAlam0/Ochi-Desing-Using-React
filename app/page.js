"use client"
import React from 'react'
import Section1 from './Components/Section1'
import MovingText from './Components/MovingText'
import About from './Components/About'
import Approach from './Components/Approach'
import EyeHero from './Components/EyeHero'
import NewProject from './Components/NewProject'
import ClientReview from './Components/ClientReview'
import ClientReview2 from './Components/ClientReview2'
import CardSection from './Components/CardSection'
import BigTexSection from './Components/BigTexSection'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const page = () => {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className='overflow-hidden'>
      <Section1 />
      <MovingText />
      <About />
      <Approach />
      <EyeHero />
      <NewProject/>
      <ClientReview />
      <ClientReview2 />
      <CardSection/>
      <BigTexSection/>
      <Footer/>
      </main>

    
  )
}

export default page
