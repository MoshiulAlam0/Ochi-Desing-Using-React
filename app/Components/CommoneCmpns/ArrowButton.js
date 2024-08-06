"use client"
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const ArrowButton = (props) => {
    return (
        <div className='flex items-center justify-center gap-[1vmin]'>
            <p id='fristPageBtn-text' className=" px-[3vmin]  py-[1vmin] border-[.3vmin] rounded-full border-[#bababaf5] cursor-pointer">{props.text}</p>
            <p id='fristPageicon' className='relative cursor-pointer overflow-hidden rotate-[50deg] p-[1.2vmin] border-[.3vmin] rounded-full border-[#bababaf5]' >
                <span className=' balck text-white text-[3vmin]'><FaArrowUpLong /></span>
            </p>
        </div>
    )
}

export default ArrowButton
