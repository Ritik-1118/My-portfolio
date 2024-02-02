/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { useState } from 'react';

const Project = ({img,projectName,url,gitUrl}) =>{
    
    const [currentIndex,setCurrentIndex] = useState(0);

    const prevImg = () =>{
        console.log("Function called******************************")
        const isFirstImg = currentIndex === 0;
        const newIndex = isFirstImg ? img.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextImg = () =>{
        console.log("Function called******************************")
        const isLastImg = currentIndex === img.length - 1;
        const newIndex = isLastImg ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToImg = (imgIndex) =>{
        setCurrentIndex(imgIndex);
    }

    return(
        <div className='col-span-6'>
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-sky-200 bg-blue-900 p-6 relative'>
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-blue-300"/>    
                <div className=" relative group">

                    <div className='w-full overflow-hidden rounded-lg'>
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
                                <GoDot  className="cursor-pointer" onClick={()=> goToImg(imgIndex)} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <Link href={url} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold text-white'>{projectName}</h2>
                    </Link>
                    <div className='mt-2 flex items-center justify-between'>
                        <Link href={url} target='_blank' className='mr-8 rounded-lg bg-blue-600 text-white p-2 px-6 text-lg font-semibold'>Visit</Link>
                        <Link href={gitUrl} target='_blank' className='w-10 pr-4 text-white'> 
                            <FaGithub className="text-3xl"/>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}


export default Project;