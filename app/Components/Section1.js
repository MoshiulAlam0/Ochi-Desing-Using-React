"use client"
import React from 'react'
import Nav from './CommoneCmpns/Nav'
import ArrowButton from './CommoneCmpns/ArrowButton'
import { motion } from 'framer-motion'

const Section1 = () => {
    return (
        <section id='section1' data-scroll data-scroll-section data-scroll-speed="-.1"  className='bg-zinc-950 w-full h-screen text-white   flex flex-col justify-between' >
            <Nav />
            <div className="center-text px-[2vw]">
                {["We create", "eye-opening", "presentations"].map((e, inx) => {
                    return (
                        <div id='page1-big-text' className=' text-[7.8vw] leading-[7.1vw] uppercase font-semibold tracking-tighter'>
                            <div className="flex items-center gap-[.2vw]">
                                {inx === 1 &&
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "10vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className=" rounded-lg -translate-y-[.2vmin] w-[10vw] h-[5.6vw] my-auto overflow-hidden ">
                                        <img className='w-full h-full object-cover' src="./images/Ochi.jpg" alt="" />
                                    </motion.div>}
                                {e}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-baseline justify-between flex-wrap gap-[3vmin] pt-[2vmin] mb-[10vmin] px-[7vmin] bottom-content w-full border-t-[.2vmin] border-[#bbbbbb17]">
                {["For public and private companies", "From the first pitch to IPO"].map((e, inx) => (
                    <p className='text-[2.4vmin] font-light '>{e}</p>
                ))}

                <ArrowButton text='start the project' />

            </div>

        </section>
    )
}

export default Section1
