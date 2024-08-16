/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SkillsContainer from "../../../components/Skills.js"
import SkillsSm from '../../../components/SkillsSm.js'
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../variants";
import { PageWrapper } from '../../../animations';
// import Preloader from '../../../components/Preloader'
import { StarSplineAbout } from "../../../components/animations/starSplineAbout.js"
// import dynamic from 'next/dynamic.js';
// const StarSplineAbout = dynamic( () => import( "../../../components/animations/starSplineAbout.js" ), {
//     ssr: false,
// } );

// Tilt.js for animation
import VanillaTilt from 'vanilla-tilt';



export default function About () {

    const tiltRef = useRef( null )

    useEffect( () => {
        // Check if the component is running on the client side
        if ( typeof window !== 'undefined' ) {
            // const router = useRouter(); // Initialize the router

            if ( tiltRef.current ) {
                VanillaTilt.init( tiltRef.current, {
                    max: 25, // Maximum tilt rotation angle
                    speed: 400, // Tilt speed
                    glare: true, // Add glare effect (optional)
                    "max-glare": 0.5 // Maximum glare opacity (optional)
                } );
            };

        }
    }, [] );


    return (
        <>
            <PageWrapper>
                <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="max-w-6xl mx-auto  space-y-2 pt-6 pb-8 md:space-y-5">
                        {/* About me heading */ }
                        <motion.h1
                            variants={ fadeIn( 'up', 0.1 ) }
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            transition={ { duration: 0.5, ease: 'easeInOut' } }
                            className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
                        >
                            <span className="text-blue-500">About Me</span>
                        </motion.h1>
                    </div>

                    <div className="space-y-6 pt-6 pb-8 md:space-y-4">
                        <div className="max-w-6xl mx-auto mt-8">
                            <div className='bg-blue-color flex flex-col md:flex-row md:items-center rounded-3xl my-10'>
                                {/* Left part Introduction */ }
                                <div className="flex-1 p-6 rounded-lg shadow-md text-white">
                                    <motion.h1 variants={ fadeIn( 'down', 0.3 ) } initial='hidden' animate="show" exit="hidden" className="text-base">
                                        <span className='text-4xl text-white my-10'>Hey!<br />I&apos;m <span className='text-blue-500'> Ritik</span></span><br />
                                    </motion.h1>
                                    <motion.p variants={ fadeIn( 'right', 1.1 ) } initial='hidden' animate="show" exit="hidden" className='font-light text-xl md:text-2xl text-blue-300 space-y-4'>&gt;&gt; Passionate Web developer</motion.p><br />
                                    <motion.p variants={ fadeIn( 'down', 0.3 ) } initial='hidden' animate="show" exit="hidden" className="text-base font-style">
                                        I&apos;m pursuing BCA at Guru Govind Singh Indraprastha University (GGSIPU). I am very passionate about improving my coding skills & developing applications & websites. My educational background has equipped me with a strong foundation in Web Development.
                                    </motion.p>
                                    <Link href={ 'https://drive.google.com/file/d/119Ga5ceRRqGHofUxxXnBblGiXLjp_ZBK/view?usp=sharing' } target='_blank'>
                                        <motion.button variants={ fadeIn( 'right', 0.3 ) }
                                            initial='hidden'
                                            animate="show"
                                            exit="hidden"
                                            type='button'
                                            className='bg-indigo-600 hover:bg-green-500 text-white font-semibold py-2 my-10 px-4 rounded-lg shadow-md hover-effect'>Resume &gt;
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Right part (Image) */ }
                                <motion.div
                                    variants={ fadeIn( 'left', 0.3 ) }
                                    initial='hidden'
                                    animate="show"
                                    exit="hidden"
                                    className=' flex-1 flex items-center justify-center sm:mb-4'>
                                    <Image ref={ tiltRef } src={ '/Gif/codder2.gif' } width={ 400 } height={ 400 } alt='Coder Image' className='-z-3 hover-effect gifimage' />
                                </motion.div>
                            </div>

                            <div className='md:hidden'>
                                <SkillsSm />
                            </div>
                        </div>
                        {/* Skills in desktop*/ }
                        <div className='hidden relative w-full md:block pb-10 rounded-lg'>
                            <StarSplineAbout /> {/* stars animation in background*/ }
                            <div className='absolute inset-0'>
                                <SkillsContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}

