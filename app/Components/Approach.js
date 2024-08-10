"use client"
import React from 'react'
import ArrowHiddenBtn from './CommoneCmpns/ArrowHiddenBtn'



const Approach = () => {
  return (
    <section id='approach-section' className=' w-full flex  h-screen p-[7vmin] bg-[#ceeb67]'>
      <div className="w-[50%] ">
        <h1 className= 'text-[5vmin] font-semibold mb-[5vmin] text-zinc-900 '>Our Approach :</h1>
        <ArrowHiddenBtn />
      </div>
      <div id='approach-img' className="w-[50%] h-[70vmin]  rounded-3xl overflow-hidden">
          <img className='w-full h-full object-cover' src="./images/cartom.jpg" alt="" />
      </div>
    </section>
  )
}

export default Approach
