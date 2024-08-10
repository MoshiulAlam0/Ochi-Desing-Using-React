"use client"
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

const ArrowHiddenBtn = ({pX, pY, text, color, bg , arrowBg, arrowColor, border , borderColor}) => {
    return (
        <button className={`flex items-center justify-center gap-[2.5vmin] ${border && border} ${borderColor && borderColor} cursor-pointer ${bg ? bg : "bg-black"} rounded-full text-[3vmin] ${color ? color : "text-white"} ${pX} ${pY}`}>
            <span className='uppercase'>{text}</span>
            <span className={` p-[1.6vmin] rounded-full ${arrowBg ? arrowBg : "bg-white"} rotate-45 ${arrowColor ? arrowColor : "text-black"} text-[2.3vmin]`}><FaArrowUpLong/></span>
        </button>
    )
}

export default ArrowHiddenBtn


ArrowHiddenBtn.defaultProps = {
    pX : 'px-[2.8vmin]' ,
    pY : 'py-[1vmin]' ,
    text : 'read more' ,
}