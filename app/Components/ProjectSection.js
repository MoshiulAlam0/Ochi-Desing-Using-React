"use client"
import React from 'react'
import Card from './CommoneCmpns/Card'
import ArrowHiddenBtn from './CommoneCmpns/ArrowHiddenBtn'



const ProjectSection = () => {
  return (
    <section className='py-[10vmin] w-full  text-white'>
      <h1 className='text-[5vmin] pb-[6vmin] border-b-[.2px] border-[#ffffff13] px-[7vmin] font-semibold text-zinc-100'>Featured projects :</h1>
      <div className="maincard flex gap-[5vmin] flex-col px-[7vmin] py-[5vmin]">
        <div className="">
          <div className="relative card-con flex-wrap flex gap-[2vmin] w-full ">
            <Card headText={"FYDAY"} url="./images/projectImg1.png" w="w-[49%]" h="h-[75vmin]" textarr={["brand identify", "design research", "investor deck",]} />
            <div className="absolute overflow-hidden flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className='translate-y text-[#ceeb67] text-[15vmin] font-semibold uppercase'>FYDAY</h1>
              <h1 className='hidden text-[#ceeb67] text-[15vmin] font-semibold uppercase'>VISE</h1>
            </div>
            <Card headText={"VISE"} url="./images/projectImg2.jpg" w="w-[49%]" h="h-[75vmin]" textarr={["brand identify"]} />
          </div>
        </div>
        <div className="">
          <div className="relative card-con flex-wrap flex gap-[2vmin] w-full ">
            <Card headText={"FYDAY"} url="./images/projectImg1.png" w="w-[49%]" h="h-[75vmin]" textarr={["brand identify", "investor deck",]} />
            <div className="absolute overflow-hidden flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className='translate-y text-[#ceeb67] text-[15vmin] font-semibold uppercase'>FYDAY</h1>
              <h1 className='hidden text-[#ceeb67] text-[15vmin] font-semibold uppercase'>VISE</h1>
            </div>
            <Card headText={"VISE"} url="./images/projectImg2.jpg" w="w-[49%]" h="h-[75vmin]" textarr={["brand identify", "best design", "celografy"]} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-[3vmin]">
        <ArrowHiddenBtn text="View all case studies" color="text-black" arrowBg="bg-black" arrowColor="text-white" bg="bg-white" />
      </div>
    </section>
  )
}

export default ProjectSection
