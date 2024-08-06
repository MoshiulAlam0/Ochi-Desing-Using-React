"use client"
import React from 'react'
import Nav from './CommoneCmpns/Nav'
import ArrowButton from './CommoneCmpns/ArrowButton'

const Section1 = () => {
    return (
        <section className='bg-zinc-950 w-full h-screen text-white   flex flex-col justify-between' >
            <Nav />
            <div className="center-text px-[2vw]">
                {["We create", "eye-opening", "presentations"].map((e, inx) => {
                    return (
                        <h1 className=' text-[7.8vw] leading-[7.1vw] uppercase font-semibold tracking-tighter'>
                            <div className="flex items-center gap-[.2vw]">
                                {inx === 1 && <div className=" rounded-lg -translate-y-[.2vmin] w-[10vw] h-[5.6vw] my-auto bg-green-700 ">
                                    <img src="" alt="" />
                                </div>}
                                {e}
                            </div>
                        </h1>
                    )})}
            </div>
            <div className="flex items-baseline justify-between pt-[2vmin] mb-[10vmin] px-[7vmin] bottom-content w-full border-t-[.2vmin] border-[#bbbbbb17]">
                {["For public and private companies", "From the first pitch to IPO"].map((e, inx) => (
                    <p className='text-[2.4vmin] font-light '>{e}</p>
                ))}

                <ArrowButton text='start the project' />

            </div>

        </section>
    )
}

export default Section1
