'use client '
import React from 'react'
import Btn from './Btn'

const Card = (props) => {
  return (
    <div className={`flex flex-col gap-[1vmin]  ${props.w}`}>
      <div className="flex gap-[1vmin] items-center ">
        <div className="w-[2.3vmin] h-[2.3vmin] bg-zinc-100 rounded-full"></div>
        <p className='text-[2vmi] uppercase'>{props.headText}</p>
      </div>
      <div className={`${props.h} rounded-3xl overflow-hidden`}>
        <img className={ `transition-all w-full h-full object-cover ${props.isScale  ? "scale-[1.06]" : "scale-1"}`} src={props.url} alt="" />
      </div>
      <div className="btn flex gap-[1vmin] py-[1vmin]">
        {props.textarr.map(e =>{
          return <Btn text={e}/>
        })}
      </div>

    </div>
  )
}

export default Card
Card.defaultProps = {
  textarr:[],
}
