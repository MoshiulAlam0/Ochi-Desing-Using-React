"use client"
import React from 'react'
import UnderLineText from './UnderLineText'

const ClinetInfo = ({ ulText, name }) => {
    return (
        <div className=" capitalize text-nowrap py-[2.5vmin] border-t-[1px] border-b-[1px] border-[#ffffff13]">
            <div className="flex items-center justify-between flex-wrap px-[7vmin]">
                <div id='client-project' className="text-[2.6vmin]  w-[30%]">
                    <UnderLineText text={ulText} color="bg-white" />
                </div>
                <p id='client-name' className='text-[2.6vmin]  w-[30%]'>{name}</p>
                <div id='read-text' className='uppercase text-[2.6vmin] '>
                    <UnderLineText text="read" color="bg-white" />
                </div>
            </div>
        </div>
    )
}

export default ClinetInfo
