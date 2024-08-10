"use client"

import React from 'react'
import Hero from './CommoneCmpns/Hero'

const EyeHero = () => {

    return (
        <div data-scroll data-scroll-speed="-.3" style={{ background: "url(https://cdn.dribbble.com/users/8182385/screenshots/18020054/media/6783ca699c2dd3f8a46eccaa09382305.jpg?resize=768x576&vertical=center)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='relative -z-10 flex items-center justify-center rounded-b-3xl bg-[#08080a] w-full h-screen' >
            <Hero/>
        </div>
    )
}

export default EyeHero
