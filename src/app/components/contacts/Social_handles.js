"use client"
import React from 'react';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

const Social_handles = () => {
    return <>
        {/*Social and Dev Handles */}
        <div className='lg:w-full'>
            <div className='border mb-3 px-10 py-3 rounded-lg'>
                <span className=' text-5xl text-blue-500 py-5 underline underline-offset-0'>Dev Handle</span>
                <Link href="https://github.com/Ritik-1118">
                    <div className='flex text-xl py-3'>
                        <p>Github</p>(&nbsp;
                        <p><FaGithub className=' cursor-pointer'/></p>&nbsp;):&nbsp;
                        <p>Ritik-1118</p>
                    </div>
                </Link>
            </div>
            <div className='border mb-3  px-10 py-4 items-center justify-center rounded-lg'>
                <span className='text-5xl text-blue-500 py-5 underline underline-offset-4'>Social Handle</span>
                <div className='text-xl py-4'>
                    <p className=' py-1 flex'>Whatsapp &nbsp;
                        <Link href="https://api.whatsapp.com/send?phone=919310429524" className='flex'>
                            <span><FaWhatsapp className=' cursor-pointer'/></span>: +91 9310429524
                        </Link>
                    </p>
                    <p className=' py-1 flex'>Linkedin &nbsp; 
                        <Link href="https://www.linkedin.com/in/ritik-kumar-9999b6245" className='flex'>
                            <span><FaLinkedin className=' cursor-pointer'/></span>: ritik-kumar-9999b6245
                        </Link>
                    </p>
                    <p className=' py-1 flex'>Instagram &nbsp; 
                        <Link href="https://instagram.com/___.___unknown____.___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='flex'>
                            <span><FaInstagram className=' cursor-pointer'/></span>: ___.___unknown____.___
                        </Link>
                    </p>
                    <p className=' py-1 flex'>Twitter &nbsp;
                        <Link href="https://twitter.com/RitikKu56343248" className='flex'>
                            <span><FaTwitter className=' cursor-pointer'/></span>: RitikKu56343248
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </>;

};

export default Social_handles;