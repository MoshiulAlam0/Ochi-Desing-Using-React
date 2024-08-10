"use client "
import React from 'react'
import Card2 from './CommoneCmpns/Card2'
import Btn from './CommoneCmpns/Btn'

const CardSection = () => {
  return (
    <section className='cardSection p-[7vmin] bg-[#08080a] flex items-center justify-center gap-[3vmin] flex-wrap w-full h-screen'>
        <Card2 grow="flex-grow-[.7]" url="./images/card.jpg" Btn={<Btn text="@2023-25"/>} />
        <Card2 url="./images/suc.jpg" Btn={<Btn text="top"/>}/>
        <Card2  url="./images/card2.jpg" Btn={<Btn text="bootcamp"/>}/>
    </section>
  )
}

export default CardSection
