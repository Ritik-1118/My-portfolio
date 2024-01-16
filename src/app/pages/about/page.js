/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SkillsContainer from "../../components/Skills.js"
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faHtml5, faJsSquare, faPython, faReact, faWordpress, faPhp, faGitAlt, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FaC, FaDatabase } from 'react-icons/fa6';

// Tilt.js for animation
import VanillaTilt from 'vanilla-tilt';

import Preloader from '../../components/Preloader'


export default function About() {

    const tiltRef = useRef(null)

    useEffect(() => {
        // Check if the component is running on the client side
        if (typeof window !== 'undefined') {
        // const router = useRouter(); // Initialize the router

        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
            max: 25, // Maximum tilt rotation angle
            speed: 400, // Tilt speed
            glare: true, // Add glare effect (optional)
            "max-glare": 0.5 // Maximum glare opacity (optional)
            });
        };

        }
    }, []);
    
    
    return (
        <>
        
        <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                {/* About me heading */}
                <motion.h1
                    variants={fadeIn('up', 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
                >
                    <span className="text-blue-500">About Me</span>
                </motion.h1>
            </div>

        <div className="space-y-6 pt-6 pb-8 md:space-y-4">
            <div className="mx-auto mt-8">
                <div className='bg-blue-color flex flex-col md:flex-row md:items-center rounded-3xl my-10'>
                    {/* Left part Introduction */}
                    <div className="flex-1 p-6 rounded-lg shadow-md text-white">
                        <motion.h1 variants={fadeIn('down', 0.3)} initial='hidden' animate="show" exit="hidden"
                                className="text-base">
                        <span className='text-4xl text-white my-10'>Hey!<br/>I&apos;m <span className='text-blue-500'> Ritik</span></span><br/>
                        </motion.h1>
                        <motion.p variants={fadeIn('right', 1.1)} initial='hidden' animate="show" exit="hidden" className='font-light text-xl md:text-2xl font-semibold text-blue-300 space-y-4'>&gt;&gt; Passionate Web developer</motion.p><br/>
                        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate="show" exit="hidden"
                                    className="text-base font-style">
                                    I&apos;m pursuing BCA at Guru Govind Singh Indraprastha University (GGSIPU). I am very passionate about improving my coding skills & developing applications & websites. My educational background has equipped me with a strong foundation in Web Development.
                        </motion.p>
                        <Link href={'https://drive.google.com/file/d/15ywExZZ5ixJdljkGuf6awwTiHkJAx8nE/view?usp=drivesdk'} target='_blank'>
                        <motion.button variants={fadeIn('right', 0.3)}
                                    initial='hidden'
                                    animate="show"
                                    exit="hidden"
                                    type='button' 
                                    className='bg-indigo-600 hover:bg-green-500 text-white font-semibold py-2 my-10 px-4 rounded-lg shadow-md hover-effect'>Resume &gt;
                        </motion.button>
                        </Link>
                    </div>

                    {/* Right part (Image) */}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        animate="show"
                        exit="hidden"
                        className=' flex-1 flex items-center justify-center '>
                    <Image ref={tiltRef} src={'/Gif/codder2.gif'}  width={400} height={400} alt='Coder Image' className='-z-3 hover-effect gifimage' />
                    </motion.div>
                </div>

                {/* Skills in phone*/} 
                <div className="div-container-1 rounded-3xl mt-8 block md:hidden">
                    <motion.h1 variants={fadeIn('down', 0.6)} initial='hidden' animate="show" exit="hidden" className="text-center text-white text-2xl font-semibold mb-4">Skills & <span className='text-blue-500'>Abilities</span></motion.h1>
                    <div className="flex flex-wrap justify-center space-x-4 py-4 space-y-4">
                    <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faHtml5} className="text-orange-600 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">HTML5</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">CSS3</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faBootstrap} className="text-purple-700 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">Bootstrap</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faJsSquare} className="text-yellow-400 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">JavaScript</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">React</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPython} className="text-blue-400 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">Python</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FaDatabase className="text-blue-400 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">MySql</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPhp} className="text-gray-900 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">PHP</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FaC className="text-blue-700 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">C-lang</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faWordpress} className="text-blue-400 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">WordPress</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faGitAlt} className="text-orange-800 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">Git</h1>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 1.1)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faGithubAlt} className="text-gray-900 text-4xl" />
                        <h1 className="icon-name text-white text-xl text-center mt-2">GitHub</h1>
                    </motion.div>
                    </div>
                </div>
            </div>
            {/* Skills in desktop*/} 
            <div className='hidden md:block pb-10 rounded-lg'>
                <SkillsContainer />
            </div>
        </div>

        </div>
        </>
    );
}

