"use client"
import React from 'react'

const UnderLineText = ({ text, size, b , color}) => {
    return (
        <div className="relative inline-block">
            <span className='relative underlineText inline-block '>
                {text}
                <span className={`line absolute ${b ? b : "bottom-[-1%]"}  right-0 w-full ${size ? size : "h-[1px]"} ${color ? color : "bg-black"}`}></span>
            </span>
        </div>
    )
}

export default UnderLineText
