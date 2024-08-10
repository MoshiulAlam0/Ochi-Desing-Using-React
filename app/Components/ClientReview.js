'use client'
import React from 'react'
import UnderLineText from './CommoneCmpns/UnderLineText'
import ArrowButton from './CommoneCmpns/ArrowButton'

const ClientReview = () => {
  return (
    <section id='client-review' className='text-white w-full bg-[#08080a] h-screen py-[5vmin]'>
        <h1 className='px-[7vmin] text-[5vmin] text-zinc-100 font-semibold pb-[5vmin] border-b-[1px] border-[#ffffff13] '>Clients’ reviews :</h1>
        <div id='client-info-con' className=" flex flex-wrap gap-[6vmin] items-start justify-between main py-[3vmin] px-[7vmin]">
            <div className='text-[2.8vmin] client-p'><UnderLineText text="Karman Ventures" color="bg-white"/></div>
            <div className="flex flex-col gap-[1vmin] items-start">
                <p className='client-p pb-[6vmin] text-[2.8vmin]'>Services: </p>
                <ArrowButton text="investor deck"/>
                <ArrowButton text="salec deck"/>
                <ArrowButton text="Project ratting"/>
            </div>
            <div id='client-parsonal' className="w-[38%] mr-[15vmin] flex flex-col">
                <p className=' pb-[6vmin] text-[2.8vmin]' >William Barnes</p>
                <div className="flex flex-col gap-[3vmin]">
                    <img  className='client-img w-[16vmin] rounded-xl' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />
                    <p className='text-[2.4vmin]'>image description
                    They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ClientReview
