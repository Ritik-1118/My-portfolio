"use client"
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp,faTwitter,faInstagram,faLinkedinIn, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen divide-y divide-gray-100 dark:divide-gray-700 ">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <motion.h1 
        variants={fadeIn('left',0.4)}
        initial='hidden'
        animate="show"
        exit="hidden"
        transition={{duration: 0.5, ease: 'easeInOut'}}
        className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Hello Everyone!
        </motion.h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2 Display-yes">
          <motion.h1
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className='h'
          >
          Hi there! <span className='text-accent'><u>I&apos;m Ritik,</u></span> <br/>a Full Stack web developer <br/>based in India.<br/>
          </motion.h1>
          <div className="pt-4">
            <motion.h1
            variants={fadeIn('down',0.5)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className="h-2"
            >
              As a Full stack devloper, I specialize in Building responsive web design.
              <p>I love codding , and I&apos;m always excited to learn something new.</p>
            <p>Feel free to explore my portfolio and get in touch if you&apos;d like to collaborate.</p>
            </motion.h1>
                                
            
          </div>
          <div className="pt-9 mt-5 in-ph-mt-5">
            {/* Projects btn */}
            <motion.div
            variants={fadeIn('down',1.1)}
            initial='hidden'
            animate="show"
            exit="hidden"
            className='flex relative mt-10 '
            >
              <ProjectsBtn/>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 Display-none">
          {/* Avatar */}
          <motion.div 
          variants={fadeIn('up',0.5)}
          initial='hidden'
          animate="show"
          exit="hidden"
          transition={{duration: 0.5, ease: 'easeInOut'}}
          className="">
            <Link href={'/pages/about'}>
              <Image
                alt="Avatar"
                src={"/Avatar3.png"}
                width={200}
                height={250}
                className="h-68 w-68 rounded-full object-cover object-top img"
              />
            </Link>
          </motion.div>
          <motion.div
          variants={fadeIn('up',0.7)}
          initial='hidden'
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut'}}
          className="">
            <h3 className="text-center pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Ritik Kumar
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center">
              Hey my name is Ritik and I am a Full Stack web Developer.
            </p>
          </motion.div>

          <div className="flex space-x-5 pt-6">
            {/* Social Media Links */}
            <motion.div 
            variants={fadeIn('left',0.4)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="text-2xl">
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
                </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
