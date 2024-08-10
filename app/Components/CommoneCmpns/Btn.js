"use client"
import { Html } from 'next/document'
import React from 'react'

const Btn = ({text, upper, blur}) => {
  return (
    <button  className={`cmn-btn ${upper ? upper : "capitalize"}  relative overflow-hidden ${blur ? blur : "backdrop-blur-xl" }  px-[3vmin] py-[1vmin] border-[1px] rounded-full`}>{text}</button>
  )
}

export default Btn

