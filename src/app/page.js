"use client"
import Image from "next/image";
import React,{ useEffect, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp, faTwitter, faInstagram, faLinkedinIn, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link';

// Tilt.js for animation
import VanillaTilt from 'vanilla-tilt';

export default function Home() {

    const tiltRef = useRef(null);
    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
            max: 25, // Maximum tilt rotation angle
            speed: 400, // Tilt speed
            glare: true, // Add glare effect (optional)
            "max-glare": 0.5 // Maximum glare opacity (optional)
            });
        }
    }, []);

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
                    <div className="text-blue-500 neon-wrapper">
                        <span className="txt">Hello Everyone!</span>
                        {/* <span className="gradient"></span>
                        <span className="dodge"></span> */}
                    </div>
                </motion.h1>
            </div>
            <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className=" max-w-none md:pt-10 pt-6 md:padding-top-200 xl:col-span-2 ">
                    {/* Intro Contents */}
                    <div className="prose prose-lg dark:prose-invert">
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            animate="show"
                            exit="hidden"
                            className='h text-white'
                        >
                        <span className="font-italic">&nbsp;Hey!</span><br/><span className='text-blue-600'><><span className="text-white">I&apos;m</span> Ritik,</></span> <br/><h1 className="pb-4 text-xl md:text-2xl font-semibold text-blue-300">A Full Stack web developer</h1>
                        </motion.div>
                        <motion.div
                                variants={fadeIn('down', 0.5)}
                                initial='hidden'
                                animate="show"
                                exit="hidden"
                                className="h-2 text-pink-100"
                            >
                                <h1>As a Full-stack developer, I specialize in building responsive web design.</h1>
                                <h1>I love coding, and I&apos;m always excited to learn something new.</h1>
                                <i>Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate.</i><br/>
                        </motion.div>
                    </div>
                    {/* Projects btn */}
                    <div className="pt-28 mt-12 sm:mt-0 ">
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

                {/* Right side image */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="hidden xl:flex xl:flex-col pt-8">
                        <Link href={'/pages/about'}>
                            <Image
                                ref={tiltRef}
                                alt="Avatar"
                                src={"/Gif/F.jpg"}
                                width={500}
                                height={550}
                                className="custom-box-shadow hover-effect img-bg rounded-lg  border-4 border-gray-400 border-double"
                            />
                        </Link>
                    </motion.div>                    
            </div>
        </div>
    );
}
