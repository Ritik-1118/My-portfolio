"use client"
import React from 'react';
import Contact_form from '../../components/contacts/Contact_form.js'
import Social_handles from '../../components/contacts/Social_handles.js'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../../variants';

const Contacts = () => {
    return (
        <div className="min-h-screen ">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <motion.h1 
                    variants={fadeIn('right',0.2)}
                    initial='hidden'
                    animate="show"
                    exit="hidden"
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
                >
                    <span className='text-blue-500' >Contact </span><span className='text-blue-500'>Me</span>
                </motion.h1>
            </div>
            <hr className=' text-blue-600'/>

            <div className="w-full pb-4 items-center justify-center">
                <div className="max-w-4xl mx-auto mt-8">
                    <motion.div 
                        variants={fadeIn('left',0.2)}
                        initial='hidden'
                        animate="show"
                        exit="hidden"
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        className='text-center'
                    >
                        <p className=' text-center text-lg'>Thank you for reaching out! I&apos;m excited to connect with you. Your feedback and messages are valuable to me. Please feel free to drop me a message below.</p>
                    </motion.div>
                </div>
            </div>

            <div className="mb-32 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 hidden sm:flex">
                    {/* Left */}
                    <motion.div 
                        variants={fadeIn('up',0.1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        className="flex flex-col items-center justify-center "
                    >
                        <Social_handles />
                    </motion.div>
                </div>
                <div className="p-4">
                    {/* Right*/}
                    <motion.div 
                        variants={fadeIn('up',0.1)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{duration: 0.5, ease: 'easeInOut'}}
                        className=" items-center justify-center "
                    >
                        <Contact_form />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
