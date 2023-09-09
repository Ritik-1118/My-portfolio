/* eslint-disable @next/next/no-async-client-component */
"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";

export default function About() {
  return (
    <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        {/* About me heading */}
      <motion.h1 
      variants={fadeIn('up',0.1)} // Use the new animation
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{duration: 0.5, ease: 'easeInOut'}}
      className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        <span className="text-skyblue">About me</span>{" "}
        <span role="img" aria-label="smile emoji">
          🙂
        </span>
      </motion.h1>

      </div>

      <div className="w-full pt-10">
        {/* <div className="max-w-[500px] mx-auto mt-8"> */}
          <div className="space-y-2">
            <motion.div 
            variants={fadeIn('right',0.2)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="div-container text-center">
              <h1 className="font-30">Introduction</h1>
              <p className="text-style-2">Hi, I&apos;m Ritik, a passionate Web devloper based in India. Now i am fresher.
              </p>
            </motion.div>

            <motion.div 
            variants={fadeIn('left',0.3)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="div-container text-center">
              <h1 className="font-30">Education</h1>
              <p className="text-style-2">I&apos;m purshing BCA at Guru Govind Singh Indraprastha university (GGSIPU). <br/>My educational background has equipped me with a strong foundation in Web Devlopement.
              </p>
            </motion.div>

            {/* skills */}
            <motion.div 
            variants={fadeIn('right',0.4)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="div-container font-10">
              <h1 className="text-center font-30"><>SKILLS</></h1>
              <div className="skills">
              <motion.div 
              variants={fadeIn('down',0.3)}
              initial='hidden'
              animate="show"
              exit="hidden"
              className="skill-ph-ml">
                <h2 className="font-20"><u>Front-end Development:</u></h2><br/>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>CSS Frameworks (e.g., Bootstrap, Tailwind CSS)</li>
                  <li>JAVASCRIPT</li>
                  <li>RESPONSIVE WEB DESIGN</li>
                </ul>
              </motion.div>
              <motion.div 
              variants={fadeIn('up',0.4)}
              initial='hidden'
              animate="show"
              exit="hidden"
              transition={{duration: 0.5, ease: 'easeInOut'}}
              className="skill-h2 skill-ph-ml">
                <h2 className="font-20"><u>Back-end Development: </u></h2><br/>
                <ul>
                  <li>SERVER SIDE SCRIPTING (e.g PYTHON,PHP)</li>
                  <li>DATABASE MANAGEMENT (e.g MYSQL,MongoDB)</li>
                  <li>API Development</li>
                  <li>Server Configuration</li>
                </ul>
              </motion.div>
                <motion.div 
                variants={fadeIn('down',0.5)}
                initial='hidden'
                animate="show"
                exit="hidden"
                className="flex-direction-c skill-ml-5">
                  <div className="skill-h2">
                    <h2 className="font-20"><u>Web Development Frameworks: </u></h2><br/>
                    <ul>
                      <li>React.js</li>
                      <li>Django</li>
                    </ul>
                  </div>
                  <div className="skill-h2">
                    <h2 className="font-20"><u>OTHERS:</u></h2><br/>
                    <ul>
                      <li>WordPress</li>
                      <li>Git</li>
                      <li>GitHub/GitLab</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {/*  */}
            <motion.div 
            variants={fadeIn('left',0.5)}
            initial='hidden'
            animate="show"
            exit="hidden"
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className="div-container text-center">
              <h1 className="font-30">PROJECTS</h1>
              <p className="text-style-2">I&apos;m proud to have been a part of these noteworthy projects:</p>
              <Link href={""}>1. Project1</Link><br/>
              <Link href={""}>2. Project2</Link>
            </motion.div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
