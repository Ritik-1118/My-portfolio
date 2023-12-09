"use client"
import React from 'react';
// import Link from 'next/link'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faWhatsapp,faTwitter,faInstagram,faLinkedinIn, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa6';

// Imports For Email service
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link';

const Contacts = () => {

    const form = useRef();

    const sendmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_rvsz1aq", "template_mtqmryk", form.current, "zA0vEPGhakrCnOnVx")
            .then(() => {
                toast.success("Message sent successfully");
            })
            .catch(() => {
                toast.error("Something went wrong");
            });
        e.target.reset();
    }

    return (
        <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <motion.h1 
            variants={fadeIn('right',0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className='text-blue-500' >Contact </span><span className='text-blue-500'>Me</span>
            </motion.h1>
        </div>

        <div className="w-full pb-32">
            <div className="max-w-4xl mx-auto mt-8">
                <motion.div 
                variants={fadeIn('left',0.2)}
                initial='hidden'
                animate="show"
                exit="hidden"
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className='text-center'>
                    <p className=' text-center text-lg'>Thank you for reaching out! I&apos;m excited to connect with you. Your feedback and messages are valuable to me. Please feel free to drop me a message below.</p>
                </motion.div><br/>
            </div>
            <motion.div 
                variants={fadeIn('up',0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className="flex flex-col space-y-4 md:space-y-0 items-center justify-center md:space-x-8 "
            >
                {/* Contact Form */}
                <div className=" md:w-full lg:flex md:flex items-center justify-center">
                    <div className=' px-4 lg:w-1/2'>
                        <div className='border mb-3  px-10 py-3 rounded-lg'>
                            <span className=' text-5xl py-5 underline underline-offset-0'>Dev Handle</span>
                            <Link href="https://github.com/Ritik-1118">
                                <div className='flex text-xl py-3'>
                                    <p>Github</p>(&nbsp;
                                    <p><FaGithub className=' cursor-pointer'/></p>&nbsp;):&nbsp;
                                    <p>Ritik-1118</p>
                                </div>
                            </Link>
                        </div>
                        <div className='border mb-3  px-10 py-4 items-center justify-center rounded-lg'>
                            <span className='text-5xl py-5 underline underline-offset-4'>Social Handle</span>
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
                    <div className=' lg:w-1/2'>
                        <form ref={form} onSubmit={sendmail} className=" p-6 shadow-md rounded-md border">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-blue-500 font-bold">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-blue-500 font-bold">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-blue-500 font-bold">Phone</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-blue-500 font-bold">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600">Submit</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer
                        position='top-center'
                        hideProgressBar={true}
                        theme='light'
                        autoClose={2000}
                    />
                </div>
            </motion.div>
        </div>
        </div>
    );
}

export default Contacts;
