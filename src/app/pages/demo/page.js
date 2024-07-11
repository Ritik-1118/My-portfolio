"use client";
import React from "react";
import dynamic from "next/dynamic";
import ProjectsBtn from '../../components/ProjectsBtn'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';

const RobotCanvas = dynamic( () => import( "../../components/Three/RobotCanvasComponent" ), {
    ssr: false,
} );

export default function Page () {
    return (
        <div className="min-h-screen divide-y divide-gray-100 dark:divide-gray-700">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                <motion.h1
                    variants={fadeIn('left', 0.4)}
                    initial='hidden'
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
                    <div className=" neon-wrapper">
                        <span className="font-bold text-sky-900">Hello <span className="txt">Everyone!</span></span>
                    </div>
                </motion.h1>
            </div>
            <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                {/* Left Side */}
                <div className=" max-w-none md:pt-10 pt-8 md:padding-top-200 xl:col-span-2 ">
                    {/* Intro Contents */}
                    <div className="prose prose-lg dark:prose-invert">
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate="show"
                            exit="hidden"
                            className='h text-white text-5xl pt-6'
                        >
                            <span className="font-italic">&nbsp;Hey!</span><br/>
                            <span className='text-blue-600'><><span className="text-white">I&apos;m</span> Ritik,</></span> <br/>
                            <div className=" flex items-center pb-4 text-3xl font-semibold italic text-blue-300">A Full Stack web developer</div>
                        </motion.div>
                        <motion.div
                                variants={fadeIn('down', 0.5)}
                                initial='hidden'
                                animate="show"
                                exit="hidden"
                                className="h-2 text-pink-100 text-lg"
                            >
                                <h1>As a Full-stack developer, I specialize in building responsive web design.</h1>
                                <h1>I love coding, and I&apos;m always excited to learn something new.</h1>
                                <i>Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate.</i><br/>
                        </motion.div>
                    </div>
                    {/* Projects btn */}
                    <div className="pt-36 md:pt-28 mt-20 sm:mt-0 ">
                        <motion.div
                            variants={fadeIn('right', 1.1)}
                            initial='hidden'
                            animate="show"
                            exit="hidden"
                            className='flex relative mt-10'
                        >
                            <ProjectsBtn />
                        </motion.div>
                    </div>
                </div>
                {/* Right side */}
                <motion.div 
                    variants={fadeIn('down', 0.5)}
                    initial='hidden'
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full md:h-full z-50 flex items-center justify-center "
                >
                    <RobotCanvas />
                </motion.div>
            </div>
        </div>
    );
}
