// "use client";
import React from "react";
import dynamic from "next/dynamic";
import ProjectsBtn from '../../components/ProjectsBtn'
import { TypeAnimation } from "react-type-animation";
import TextAnimation from "../../components/demo/TextAnimation"
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';
import Spline from '@splinetool/react-spline/next';


const RobotCanvas = dynamic( () => import( "../../components/Three/RobotCanvasComponent" ), {
    ssr: false,
} );

export default function Page () {
    return (
        <>
            <main className="max-w-6xl mx-auto">
                <div className="relative max-w-6xl mx-auto h-screen">
                    <Spline
                        scene="https://prod.spline.design/D1COLzCYvDbCeJWs/scene.splinecode"
                    />
                </div>
                <div className="absolute top-[12rem] left-[18rem]">
                    <div className="flex">
                        <div className="flex flex-col items-center pr-4">
                            <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
                            <div className="w-2 h-1 -mt-2 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[400px] border-t-blue-800"></div>
                        </div>
                        <div className="-mt-2">
                            <span className="font-mono text-7xl text-white">Hi,I&apos;m <span className="text-blue-700">Ritik,</span></span>
                            <TextAnimation />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

// export default function Page () {
//     return (
//         <>
//             <div className="">
//                 <div className="min-h-screen divide-y divide-gray-100 dark:divide-gray-700">
//                     <div className="space-y-2 pt-5 pb-8 md:space-x-5">
//                         <motion.h1
//                             variants={fadeIn('left', 0.4)}
//                             initial='hidden'
//                             animate="show"
//                             exit="hidden"
//                             transition={{ duration: 0.5, ease: 'easeInOut' }}
//                             className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
//                             <div className=" neon-wrapper">
//                                 <span className="font-bold text-sky-900">Hello <span className="txt">Everyone!</span></span>
//                             </div>
//                         </motion.h1>
//                     </div>
//                     <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
//                         {/* Left Side */}
//                         <div className="flex max-w-none md:pt-10 pt-8 md:padding-top-200 xl:col-span-2">
//                             <div className="flex flex-col items-center mt-10" >
//                                 <div className=" bg-blue-600 px-3 py-3 rounded-full "></div>
//                                 <div className="bg-blue-600 ml-4 -mt-1 rounded-b-full rounded-r-full pr-1 h-full mr-4"></div>
//                             </div>
//                             <div className=" ">
//                                 {/* Intro Contents */}
//                                 <div className="prose prose-lg dark:prose-invert">
//                                 {/* <div className="w-5 h-5 rounded-full bg-[#800000]" />
//                                 <div className="w-1 sm:h-80 h-40 blue-gradient" /> */}
//                                     <motion.div
//                                         variants={fadeIn('down', 0.3)}
//                                         initial='hidden'
//                                         animate="show"
//                                         exit="hidden"
//                                         className='h flex flex-col text-white text-5xl pt-6'
//                                     >
//                                         <span className='text-blue-600 font-mono text-7xl'><><span className="text-white">Hi,I&apos;m</span> Ritik,</></span>
//                                         <div className=" flex items-center font-extralight pb-4 text-2xl text-blue-300">
//                                             A&nbsp;<TypeAnimation sequence={['Full-stack developer',2000, 'Web developer',2000, 'Sofware Developer',2000, 'UI/UX Designer',2000]}
//                                                 speed={50} className="text-[#4245ff]" wrapper="span" repeat={Infinity} />
//                                         </div>
//                                     </motion.div>
//                                     <motion.div
//                                             variants={fadeIn('down', 0.5)}
//                                             initial='hidden'
//                                             animate="show"
//                                             exit="hidden"
//                                             className="h-2 text-pink-100 text-lg"
//                                         >
//                                             <h1>As a Full-stack developer, I specialize in building responsive web design.</h1>
//                                             <h1>I love coding, and I&apos;m always excited to learn something new.</h1>
//                                             <i>Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate.</i><br/>
//                                     </motion.div>
//                                 </div>
//                                 {/* Projects btn */}
//                                 <div className="pt-36 md:pt-28 mt-20 sm:mt-0 ">
//                                     <motion.div
//                                         variants={fadeIn('right', 1.1)}
//                                         initial='hidden'
//                                         animate="show"
//                                         exit="hidden"
//                                         className='flex relative mt-10'
//                                     >
//                                         <ProjectsBtn />
//                                     </motion.div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Right side */}
//                         <motion.div
//                             variants={fadeIn('down', 0.5)}
//                             initial='hidden'
//                             animate="show"
//                             exit="hidden"
//                             transition={{ duration: 0.5, ease: 'easeInOut' }}
//                             className="w-full md:h-full z-50 flex items-center justify-center "
//                         >
//                             <RobotCanvas />
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
