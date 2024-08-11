"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";

export default function TextAnimation () {
    return (
        <div className=" flex items-center font-light pt-3 pb-4 text-2xl ">
            A&nbsp;<TypeAnimation sequence={ [ 'Full-stack developer', 2000, 'Web developer', 2000, 'Sofware Developer', 2000, 'UI/UX Designer', 2000 ] }
                speed={ 50 } className="text-[#4245ff]" wrapper="span" repeat={ Infinity } />
        </div>
    )
}
