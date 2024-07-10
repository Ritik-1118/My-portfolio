"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAnglesRight, FaGithub } from 'react-icons/fa6';
import { GoDot } from 'react-icons/go';
import Link from 'next/link';

export const AddProject = ({index,img,projectName,description,url,gitUrl,tools}) => {
    
    const [currentIndex,setCurrentIndex] = useState(0);

    const prevImg = () =>{
        // console.log("Function called******************************")
        const isFirstImg = currentIndex === 0;
        const newIndex = isFirstImg ? img.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextImg = () =>{
        const isLastImg = currentIndex === img.length - 1;
        const newIndex = isLastImg ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToImg = (imgIndex) =>{
        setCurrentIndex(imgIndex);
    }

    return (
        <div>
            <div className={`flex ${index != 1 && "items-center"}`}>
                <hr className=' text-3xl w-1/2'/>
                <div className='border rounded-full text-2xl px-3'>{index}</div>
                <hr className=' text-3xl w-1/2'/>
            </div>
            {(index % 2 == 1) && (
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >   
                    <div className='col-span-6'>
                        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-sky-200 bg-blue-900 p-4 relative'>                
                            {/*Sliding image */}
                            <div className=" relative group">
                                <div className='w-full overflow-hidden rounded-lg hover:blur-sm'>
                                    <Image src={img[currentIndex]?.url} alt={projectName} width={500} height={600} className='w-full h-auto'/>
                                </div>
                                {/*Left arrow */}
                                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                                    <FaAngleDoubleLeft onClick={prevImg} className="text-md"/>
                                </div>
                                {/*Right arrow */}
                                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                                    <FaAnglesRight onClick={nextImg} className="text-md"/>
                                </div>
                                <div className=" flex justify-center text-gray-900 text-2xl">
                                    {img.map((img,imgIndex) => (
                                        <div key={imgIndex}>
                                            <GoDot  className="cursor-pointer hover:text-blue-500" onClick={()=> goToImg(imgIndex)} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='w-full flex flex-col items-center justify-center mt-2'>
                                <div className=' flex items-center justify-between'>
                                    <Link href={url} target='_blank' className='mr-8 rounded-lg bg-blue-600 hover:bg-transparent hover:border hover:border-blue-400 text-white p-2 px-6 text-lg font-semibold'>Visit</Link>
                                    <Link href={gitUrl} target='_blank' className='pr-4 text-white '> 
                                        <div className=' flex items-center gap-2 border border-blue-400 rounded-xl py-2 px-2 hover:bg-blue-600'>
                                            <div>Github</div>
                                            <div><FaGithub className="text-3xl"/></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className='col-span-6'>
                        <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>{projectName}</div>
                        <div className='flex'>
                            <p className=' text-md pt-2 italic'>{description}</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools</p>
                            {tools && tools.map((tool,i)=>(
                                <button type='button' key={i} className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'>{tool}</button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
            {(index % 2 == 0) && (
                <motion.div 
                whileHover={{scale:1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:"0vw",y:"0vw"}}
                transition={{duration:1.5}}
                className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
            >   
                <div className='col-span-6'>
                    <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>{projectName}</div>
                    <div className='flex'>
                        <p className=' text-md pt-2 italic'>{description}</p>
                    </div>
                    <div className='my-5'>
                        <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools</p>
                        {tools && tools.map((tool,i)=>(
                            <button type='button' key={i} className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'>{tool}</button>
                        ))}
                    </div>
                </div>

                <div className='col-span-6'>
                    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-sky-200 bg-blue-900 p-4 relative'>                
                        {/*Sliding image */}
                        <div className=" relative group">
                            <div className='w-full overflow-hidden rounded-lg hover:blur-sm'>
                                <Image src={img[currentIndex]?.url} alt={projectName} width={500} height={600} className='w-full h-auto'/>
                            </div>
                            {/*Left arrow */}
                            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                                <FaAngleDoubleLeft onClick={prevImg} className="text-md"/>
                            </div>
                            {/*Right arrow */}
                            <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer">
                                <FaAnglesRight onClick={nextImg} className="text-md"/>
                            </div>
                            <div className=" flex justify-center text-gray-900 text-2xl">
                                {img.map((img,imgIndex) => (
                                    <div key={imgIndex}>
                                        <GoDot  className="cursor-pointer hover:text-blue-500" onClick={()=> goToImg(imgIndex)} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex flex-col items-center justify-center mt-2'>
                            <div className=' flex items-center justify-between'>
                                <Link href={url} target='_blank' className='mr-8 rounded-lg bg-blue-600 hover:bg-transparent hover:border hover:border-blue-400 text-white p-2 px-6 text-lg font-semibold'>Visit</Link>
                                <Link href={gitUrl} target='_blank' className='pr-4 text-white '> 
                                    <div className=' flex items-center gap-2 border border-blue-400 rounded-xl py-2 px-2 hover:bg-blue-600'>
                                        <div>Github</div>
                                        <div><FaGithub className="text-3xl"/></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

            </motion.div>
            )}
        </div>
    )
}
