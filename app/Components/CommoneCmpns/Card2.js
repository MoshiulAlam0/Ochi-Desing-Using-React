"use client "
import React from 'react'
import Btn from './Btn'

const Card2 = ({ grow , url, Btn}) => {
    return (
        <div id='card-of-cardSection' className={`relative w-[48vmin] h-[70vmin] ${grow ? grow : "flex-grow-0"} rounded-3xl overflow-hidden`}>
            <img className='w-full h-full object-cover' src={url} alt="" />
            <div className="absolute z-20 bottom-[5%] left-[5%] ">
                {Btn}
            </div>
        </div>
    )
}

export default Card2
