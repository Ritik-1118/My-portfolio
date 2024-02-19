import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faHtml5, faJsSquare, faPython, faReact, faWordpress, faPhp, faGitAlt, faGithubAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaC, FaDatabase, FaRegCircleDot } from 'react-icons/fa6';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants.js";

const SkillsSm = () => {
    return <>
        <section className="">
            <div className="">
                <div className="container mx-auto py-[14vh]">
                    <div style={{backgroundImage: "url('/img/about/bg.png')",backdropFilter: "blur(50px)"}} className="bg-cover bg-no-repeat bg-center border-double lg:border-4 md:border-4 border-gray-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
                        <div className=" text-6xl text-center mt-10 mb-16 text-blue-600 font-semibold underline">
                            Skills
                        </div>    
                        <div className="flex my-8">
                            {/** vertical line */}
                            <div className="flex w-2">
                                <div className="h-full z-20 border-8 border-blue-900 rounded-full"></div>
                            </div>
                            <div className="w-full">
                                {/**Skills */}
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faHtml5} className="text-orange-600 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faCss3} className="text-blue-600 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faBootstrap} className="text-purple-700 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faJsSquare} className="text-yellow-400 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faReact} className="text-blue-400 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faPython} className="text-blue-400 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FaDatabase className="text-blue-400 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faPhp} className="text-gray-900 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FaC className="text-blue-700 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faWordpress} className="text-blue-400 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faGitAlt} className="text-orange-800 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                <div className=" ml-2 flex mb-3 py-10 items-center justify-start">
                                    <div className=" flex items-center">
                                        <GoDotFill className=" -ml-8 z-30 h-8 w-16 text-xl text-blue-500"/>
                                        <IoIosArrowBack  className=" -ml-8 h-12 w-32 text-xl text-blue-500"/>
                                        <FontAwesomeIcon icon={faGithub} className="text-gray-900 text-3xl -ml-10 h-28 w-full" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <div className="hidden div-container-1 rounded-3xl mt-8">
            <motion.h1 variants={fadeIn('down', 0.6)} initial='hidden' animate="show" exit="hidden" className="text-center text-white text-2xl font-semibold mb-4">Skills & <span className='text-blue-500'>Abilities</span></motion.h1>
            <div className="flex flex-wrap justify-center space-x-4 py-4 space-y-4">
            <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faHtml5} className="text-orange-600 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">HTML5</h1>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">CSS3</h1>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faBootstrap} className="text-purple-700 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">Bootstrap</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faJsSquare} className="text-yellow-400 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">JavaScript</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">React</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faPython} className="text-blue-400 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">Python</h1>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FaDatabase className="text-blue-400 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">MySql</h1>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faPhp} className="text-gray-900 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">PHP</h1>
            </motion.div>
            <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FaC className="text-blue-700 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">C-lang</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faWordpress} className="text-blue-400 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">WordPress</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.6)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faGitAlt} className="text-orange-800 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">Git</h1>
            </motion.div>
            <motion.div variants={fadeIn('left', 1.1)} initial='hidden' animate="show" exit="hidden" className="hover-effect skill-container bg-blue-900 p-4 rounded-lg shadow-md py-6 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faGithubAlt} className="text-gray-900 text-4xl" />
                <h1 className="icon-name text-white text-xl text-center mt-2">GitHub</h1>
            </motion.div>
            </div>
        </div>
    </>
};
export default SkillsSm;