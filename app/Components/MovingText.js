"use client"
import { motion } from 'framer-motion'
import React from 'react'

const MovingText = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.04"   className="py-[19vmin] rounded-tl-[6vmin] rounded-tr-[6vmin] w-screen  bg-[#004d42]">
            <div 
                className='flex uppercase  text-nowrap  text-white border-t-[.6px] border-[#ffffff23] border-b-[.6px]'>
                <motion.h1 animate={{ x: "-100%", }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='move-text text-[37vmin] font-[600] pr-[8vmin] leading-none tracking-tight'>We are Ochi</motion.h1>
                <motion.h1 animate={{ x: "-100%", }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='move-text text-[37vmin] font-[600] pr-[8vmin] leading-none tracking-tight'>We are Ochi</motion.h1>
                <motion.h1 animate={{ x: "-100%", }}
                transition={{ duration:10, repeat: Infinity, ease: "linear" }} className='move-text text-[37vmin] font-[600] pr-[8vmin] leading-none tracking-tight'>We are Ochi</motion.h1>
                <motion.h1 animate={{ x: "-100%", }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='move-text text-[37vmin] font-[600] pr-[8vmin] leading-none tracking-tight'>We are Ochi</motion.h1>
                <motion.h1 animate={{ x: "-100%", }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='move-text text-[37vmin] font-[600] pr-[8vmin] leading-none tracking-tight'>We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default MovingText
