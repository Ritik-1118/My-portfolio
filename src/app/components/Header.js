"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faInstagram,faLinkedinIn, faFacebookSquare,faSquareXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FaRegistered } from "react-icons/fa6";

export default function Nav() {
    return (
            <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex justify-between w-full">
                    <div className="flex items-center pt-10">
                        <Link href="/" >
                            <h1 className="text-2xl font-medium flex">
                                <Image src={'/Logo3.png'} width={100} height={100} alt="Logo" className=" w-14"></Image> 
                                {/*Ritik <span className="text-blue-400">Kumar</span>
                                <FaRegistered className="  text-5xl mt-4 mx-4 text-blue-500"/>*/}
                            </h1>
                        </Link>
                    </div>

                    {/* Social media's link */}
                    <div className=" sm:ml-6 sm:flex sm:items-center in-ph-mt-3">
                        <Link href="https://github.com/Ritik-1118" className="text-blue-500 hover:text-blue-700 mr-7">
                            <i className="fab  fa-github">
                                <FontAwesomeIcon icon={faGithub}/>
                            </i>
                        </Link>
                        <Link href="https://twitter.com/RitikKu56343248" className="text-blue-500 hover:text-blue-700 mr-7">
                            <i className="fab fa-twitter">
                                <FontAwesomeIcon icon={faSquareXTwitter}/>
                            </i>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=919310429524" className="text-blue-700 hover:text-blue-900 mr-7">
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
            </div>
            </div>

        
        </>
    );
}
