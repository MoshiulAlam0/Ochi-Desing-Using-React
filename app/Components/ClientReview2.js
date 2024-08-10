"use client"
import React from 'react'
import UnderLineText from './CommoneCmpns/UnderLineText'
import ClinetInfo from './CommoneCmpns/ClinetInfo'

const ClientReview2 = ({ ulText, name }) => {
    return (
        <section id='client-review2' className="w-full py-[2vmin] bg-[#08080a] h-screen text-white ">
            <ClinetInfo ulText="Oxizen" name="rihad" />
            <ClinetInfo ulText="haidra" name="abdullah" />
            <ClinetInfo ulText="portfulio" name="alex zendra" />
            <ClinetInfo ulText="top cobra" name="king kobra" />
            <ClinetInfo ulText="nuture " name="karanol" />
            <ClinetInfo ulText="GIM web" name="robat hex" />
            <ClinetInfo ulText="graphis design" name="oltra mix" />
            <ClinetInfo ulText="web template" name="hey lelo" />
            <ClinetInfo ulText="design logo" name="dulhan se" />
        </section>
    )
}

export default ClientReview2
