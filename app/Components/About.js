"use client"
import React from 'react'
import UnderLineText from './CommoneCmpns/UnderLineText'

const About = () => {
  return (
    <section className="w-full h-screen py-[10vmin]  bg-[#ceeb67]">
      <h1 className='text-[7.8vmin] pb-[7vmin] px-[8vmin] text-[#212121] leading-none font-500 w-[89%]'>
        <span>Ochi is a strategic partner for fast-grow­ing tech businesses that need to</span>
        <span> <UnderLineText text=' raise funds'  size="h-[2px]" b="bottom-[-2.2px]"/>,</span>
        <span> <UnderLineText text=' sell prod­ucts'  size="h-[2px]" b="bottom-[-2.2px]"/>,</span>
        <span> <UnderLineText text=' ex­plain com­plex ideas'  size="h-[2px]" b="bottom-[-2.2px]"/>, and</span>
        <span> <UnderLineText text=' hire great peo­ple' size="h-[2px]" b="bottom-[-2.2px]"/>.</span>
      </h1>
      <div className="w-full h-[.2vmin] bg-[#25252591]"></div>
      <div className=" text-content py-[10vmin] px-[8vmin] flex justify-between">
        <p className=''>What you can expect:</p>
        <div className=" w-full flex justify-end gap-[20vmin]">
          <div className=" w-[30%] flex flex-col gap-[5vmin]">
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className="self-end flex flex-col mr-[15vmin]">
            {["S:", "Instagram", "Twiter", "Facebook", "Linkdin",].map((e, inx) => {
              return (
                inx === 0 ? <h1 className='cursor-pointer text-[4vmin] mb-[11px]'>{e}</h1> : <span className=' cursor-pointer text-[2.9vmin]'><UnderLineText text={`${e}`} /></span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
