"use client"
import React from 'react';
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faTwitter,faInstagram,faLinkedinIn, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';

// For Email service
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <span className='text-skyblue' >CONTACT ME</span>
            </motion.h1>
        </div>

        <div className="w-full pt-10">
            <div className="max-w-[500px] mx-auto mt-8">
                <motion.div 
                variants={fadeIn('left',0.2)}
                initial='hidden'
                animate="show"
                exit="hidden"
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className='text-center'>
                    <p className='text-style-1'>Thank you for reaching out! I&apos;m excited to connect with you. Your feedback and messages are valuable to me. Please feel free to drop me a message below.</p>
                </motion.div><br/>
            </div>
            <motion.div 
            variants={fadeIn('up',0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="flex flex-col space-y-4 md:space-y-0 items-center justify-center md:space-x-8">
            {/* Contact Form */}
            <div className="md:w-1/2">
                <form ref={form} onSubmit={sendmail} className="bg-white p-6 shadow-md rounded-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Submit</button>
                </div>
                </form>
                <ToastContainer
                position='top-center'
                hideProgressBar={true}
                theme='light'
                autoClose={2000}
                />
            </div>

            {/* Social Media Icons */}
            <div className="md:w-1/2 flex justify-center items-center mt-30">
                <div className="text-2xl">
                <Link href="https://twitter.com/RitikKu56343248" className="text-blue-500 hover:text-blue-700 mr-7">
                    <i className="fab fa-twitter">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </i>
                </Link>
                <Link href="https://www.facebook.com/UNKNOWN111819" className="text-blue-700 hover:text-blue-900 mr-7">
                    <i className="fab fa-facebook">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                    </i>
                </Link>
                <Link href="https://wa.me/qr/53OS55VAGGHBA1" className="text-blue-700 hover:text-blue-900 mr-7">
                    <i className="fab fa-whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </i>
                </Link>
                <Link href="https://instagram.com/___.___unknown____.___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="text-red-600 hover:text-red-800 mr-7">
                    <i className="fab fa-instagram">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </i>
                </Link>
                <Link href="https://www.linkedin.com/in/ritik-kumar-9999b6245" className="text-blue-800 hover:text-blue-900">
                    <i className="fab fa-linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </i>
                </Link>
                </div>
            </div>
            </motion.div>
        </div>
        </div>
    );
}

export default Contacts;
