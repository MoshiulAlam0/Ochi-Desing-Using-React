"use client"
import React from 'react'
import Hero from './CommoneCmpns/Hero'
import ArrowHiddenBtn from './CommoneCmpns/ArrowHiddenBtn'

const BigTexSection = () => {
    return (
        <div data-scroll  data-scroll-speed="-.5" className=' relative -z-10 w-full  bg-[#c2e447] py-[12vmin] px-[2vmin] 1] flex-col gap-[22vmin] text-white  flex items-center justify-center '>
            <div className=" relative">
                <p className='leading-[1] tracking-tight text-center uppercase font-semibold text-[#000000] text-[27vmin]'>Ready <br />to start <br /> the project?</p>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Hero w="w-[30vmin]" h="h-[30vmin]"/>
                </div>
            </div>
            <div className=" text-[2.5vmin] flex flex-col gap-[4vmin]">
                <p className='text-[1vmin]'> <ArrowHiddenBtn  bg="bg-black" text="start the project" color='text-white' arrowBg="bg-white" arrowColor="text-black" border="border-[1px]" borderColor="border-white"/></p>
                <p className='or-text text-center capitalize ' >or</p>
                <ArrowHiddenBtn bg="bg-white" text="hello@Ochi.design" color='text-black' arrowBg="bg-black" arrowColor="text-white" />
            </div>
        </div>
    )
}

export default BigTexSection
