"use client"

import React, { useEffect, useState } from 'react'

const EyeHero = () => {
    const [xValue, setxValue] = useState(0);
    const [yValue, setyValue] = useState(0);

    const [angelValue, setangelValue] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseXLocation = e.clientX;
            let mouseYLocation = e.clientY;

            // console.log(mouseXLocation / 100)
            // console.log(mouseYLocation / 100)


            // console.log(mouseXLocation, mouseYLocation)
            // console.log(window.innerWidth / 2)
            // console.log(window.innerHeight / 2)


            let screenHalfeWidth = window.innerWidth / 2;
            let screenHalfeHeight = window.innerHeight / 2;

            // delta holo mouse ar current point  and screen ar center point  ar modhe koto tuku destance 
            let deltaX = screenHalfeWidth - mouseXLocation;
            let deltaY = screenHalfeHeight - mouseYLocation;

            let angel = Math.atan2(deltaY, deltaX) * 57.2958 /// Math.atan2 ke deltaY, deltaX dile se angel ber kore dei 

            setangelValue(angel)
            // console.log(deltaX / 100)

            setxValue(deltaX / -35)
            setyValue(deltaY / -18)
            // console.log(deltaX / 50)



        })
    })

    return (
        <div style={{ background: "url(https://cdn.dribbble.com/users/8182385/screenshots/18020054/media/6783ca699c2dd3f8a46eccaa09382305.jpg?resize=768x576&vertical=center)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='flex items-center justify-center rounded-b-3xl bg-[#08080a] w-full h-screen' >
            <div className="flex gap-[5vmin]">
                <div className=" flex items-center justify-center relative w-[35vmin] h-[35vmin] rounded-full bg-zinc-100">
                    <div style={{ transform: `translate(${xValue}px,${yValue}px` }} className="relative  flex items-center justify-center w-[20vmin] h-[20vmin] rounded-full bg-zinc-800">
                        <h1 className='text-zinc-100 text-[2vmin] font-semibold absolute to-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Play</h1>
                        <div style={{ rotate: `${angelValue}deg`, }} className="  w-full">
                            <div className="w-[4vmin] h-[4vmin] rounded-full  bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center relative w-[35vmin] h-[35vmin] rounded-full bg-zinc-100">
                    <div style={{ transform: `translate(${xValue}px,${yValue}px` }} className="relative  flex items-center justify-center w-[20vmin] h-[20vmin] rounded-full bg-zinc-800">
                        <h1 className='text-zinc-100 text-[2vmin] font-semibold absolute to-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Play</h1>
                        <div style={{ rotate: `${angelValue}deg`, }} className="  w-full">
                            <div className="w-[4vmin] h-[4vmin] rounded-full  bg-white"></div>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default EyeHero
