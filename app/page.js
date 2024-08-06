"use client"
import React from 'react'
import Section1 from './Components/Section1'
import MovingText from './Components/MovingText'
import About from './Components/About'
import Approach from './Components/Approach'
import EyeHero from './Components/EyeHero'
import ProjectSection from './Components/ProjectSection'
import ClientReview from './Components/ClientReview'
import ClientReview2 from './Components/ClientReview2'

const page = () => {
  return (
    <main className='overflow-hidden'>
      <Section1 />
      <MovingText />
      <About />
      <Approach />
      <EyeHero />
      <ProjectSection />
      <ClientReview />
      <ClientReview2 />
      </main>

    
  )
}

export default page
