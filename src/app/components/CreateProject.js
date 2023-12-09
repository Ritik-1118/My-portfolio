/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

const Project = ({img,projectName,url,gitUrl}) =>{
    
    return(
        <div className='col-span-6'>
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-sky-200 bg-blue-900 p-6 relative'>
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-blue-300"/>    
                <Link href={url} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <img src={img} alt='Project1 Img' width={500} height={600} className='w-full h-auto'/>
                </Link>
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