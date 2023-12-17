"use client"
import React from 'react';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa6';

// Imports For Email service
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link';

const Contact_form = () => {

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

    return <>
            <div className=' lg:w-full'>
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

            {/*For message sharing */}
            <ToastContainer
                position='top-center'
                hideProgressBar={true}
                theme='light'
                autoClose={2000}
            />
    </>;

};

export default Contact_form;