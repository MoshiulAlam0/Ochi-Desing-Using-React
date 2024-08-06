"use client"
import React from 'react'
import UnderLineText from './UnderLineText'

const ClinetInfo = ({ ulText, name }) => {
    return (
        <div className=" capitalize py-[2.5vmin] border-t-[1px] border-b-[1px] border-[#ffffff13]">
            <div className="flex items-center justify-between px-[7vmin]">
                <div className="text-[2.6vmin] w-[30%]">
                    <UnderLineText text={ulText} color="bg-white" />
                </div>
                <p className='text-[2.6vmin] w-[30%]'>{name}</p>
                <div className='uppercase text-[2.6vmin] '>
                    <UnderLineText text="read" color="bg-white" />
                </div>
            </div>
        </div>
    )
}

export default ClinetInfo
