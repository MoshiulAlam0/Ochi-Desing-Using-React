"use client"
import React, { useState } from 'react'
import Card from './Card'

const PairCard = ({ hText, hText2, url, url2, textarray, textarray2 }) => {
    const [enter, setenter] = useState(false);
    const [enter2, setenter2] = useState(false);
    const anim = () =>{
        setenter(true)
    }
    const anim2 = () =>{
        setenter(false)
    }
    const anim3 = () =>{
        setenter2(true)
    }
    const anim4 = () =>{
        setenter2(false)
    }

    return (
        <div className=' pair-card-con text-white relative flex flex-wrap items-center justify-between gap-[1vmin]'>
            <h1 className=' z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vmin] overflow-hidden text-[#ceeb67] font-bold'>
                <p className={`pair-card-text rounded-3xl px-[3vmin] transition-all  uppercase ${enter ? "translate-y-[0%]" : " translate-y-[100%] "}`}>{hText}</p>
            </h1>
            <h1 className=' z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vmin] overflow-hidden text-[#ceeb67] font-bold'>
                <p className={`pair-card-text rounded-3xl px-[3vmin] transition-all  uppercase ${enter2 ? "translate-y-[0%]" : " translate-y-[100%] "}`}>{hText2}</p>
            </h1>
            <div onMouseEnter={anim} onMouseLeave={anim2} className="w-[48%] card-pair">
                <Card w="w-full" isScale={enter} headText={hText} url={url} h="h-[75vmin]" textarr={textarray} />
            </div>
            <div onMouseEnter={anim3} onMouseLeave={anim4} className="w-[48%] card-pair">
                <Card w="w-full" isScale={enter2} headText={hText2} url={url2} h="h-[75vmin]" textarr={textarray2} />
            </div>
        </div>
    )
}

export default PairCard
