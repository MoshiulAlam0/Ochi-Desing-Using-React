"use client"
import React from 'react'
import PairCard from './CommoneCmpns/PairCard'

const NewProject = () => {
    return (
        <section className='w-full bg-[#08080a] py-[7vmin]'>
            <h1 className='text-[5vmin] px-[7vmin] pb-[6vmin] border-b-[.2px] border-[#ffffff13] font-semibold text-zinc-100 mb-[4vmin]'>Featured projects :</h1>
            <div className="px-[7vmin] card-main flex flex-col gap-[10vmin]">
                <PairCard hText={"FYDAY"} hText2={"vise"} url="./images/projectImg1.png" url2="./images/projectImg2.jpg" textarray={["brand identify", "design research", "investor deck",]} textarray2={["design", "resorches",]} />
                <PairCard hText={"Evulation"} hText2={"trawa"} url="./images/projectImg4.png" url2="./images/projectImg3.jpg" textarray={["brand identify", "design research", "investor deck",]} textarray2={["design", "resorches",]} />
            </div>
        </section>
    )
}

export default NewProject
