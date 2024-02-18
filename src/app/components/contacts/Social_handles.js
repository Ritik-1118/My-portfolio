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
                <div className='text-xl py-4 items-center justify-center'>
                    <div className=' py-1 flex items-center justify-center'>Whatsapp &nbsp;
                        <Link href="https://api.whatsapp.com/send?phone=919310429524" className='flex items-center justify-center'>
                            <span><FaWhatsapp className=' cursor-pointer'/></span>&nbsp;: +91 9310429524
                        </Link>
                    </div>
                    <p className=' py-1 flex items-center justify-center'>Linkedin &nbsp; 
                        <Link href="https://www.linkedin.com/in/ritik-kumar-9999b6245" className='flex items-center justify-center'>
                            <span><FaLinkedin className=' cursor-pointer'/></span> &nbsp;: ritik-kumar-9999b6245
                        </Link>
                    </p>
                    <p className=' py-1 flex items-center justify-center'>Instagram &nbsp; 
                        <Link href="https://instagram.com/___.___unknown____.___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='flex items-center justify-center'>
                            <span><FaInstagram className=' cursor-pointer'/></span> &nbsp;: ___.___unknown____.___
                        </Link>
                    </p>
                    <p className=' py-1 flex items-center justify-center'>Twitter &nbsp;
                        <Link href="https://twitter.com/RitikKu56343248" className='flex items-center justify-center'>
                            <span><FaTwitter className=' cursor-pointer'/></span> &nbsp;: RitikKu56343248
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </>;

};

export default Social_handles;