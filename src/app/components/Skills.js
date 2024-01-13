import React from "react"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNode, faPython, faCpp, faPhp, faGit, faGithub, faWordpress, } from "@fortawesome/free-brands-svg-icons";
import { FaBootstrap, FaDatabase } from 'react-icons/fa6';

export const Skills = ({name,x,y,icon}) =>{
    const getIcon = () => {
        switch (icon) {
            case "faHtml5":
                return <FontAwesomeIcon icon={faHtml5} />;
            case "faCss3":
                return <FontAwesomeIcon icon={faCss3} />;
            case "faJs":
                return <FontAwesomeIcon icon={faJs} />;
            case "faReact":
                return <FontAwesomeIcon icon={faReact} />;
            case "fanext":
                // return <FontAwesomeIcon icon={faCaretSquareUp} size="xs" style={{color: "#000000",}} />
            case "faNode":
                return <FontAwesomeIcon icon={faNode} />;
            case "faPython":
                return <FontAwesomeIcon icon={faPython} />;
            case "faPhp":
                return <FontAwesomeIcon icon={faPhp} />;
            case "faGit":
                return <FontAwesomeIcon icon={faGit} />;
            case "faGithub":
                return <FontAwesomeIcon icon={faGithub} />;
            case "faDatabase":
                return <FaDatabase className="text-blue-400" />
            case "faBootstrap":
                return <FaBootstrap className="text-blue-400" />
            case "faWordpress":
                return <FontAwesomeIcon icon={faWordpress} />;
            default:
            return null;
        }
    };
    return(
        <motion.div className=" flex items-center justify-center rounded-full font-semibold bg-blue-700 text-white py-3 px-6 shadow-sky-300 cursor-pointer absolute"
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            // viewport={{once:true}}
        >
            {getIcon()}
            <span className="ml-2">{name}</span>
        </motion.div>
    )
}

const SkillsContainer = () =>{
    return(
        <>
            <h2 className=" font-bold text-8xl my-8 w-full text-center text-blue-500">Skills</h2>
            <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div className=" flex items-center justify-center rounded-full font-semibold text-white p-8 shadow-black cursor-pointer"
                    whileHover={{scale:1.05}}
                >Web
                </motion.div>
                <Skills name="HTML5" x="0vw" y="-20vw" icon="faHtml5"/>
                <Skills name="CSS" x="-10vw" y="-14vw" icon="faCss3"/>
                <Skills name="JavaScript" x="9vw" y="-14vw" icon="faJs"/>
                <Skills name="REACT" x="-15vw" y="-5vw" icon="faReact"/>
                <Skills name="NEXT . JS" x="15vw" y="-5vw" icon=""/>
                <Skills name="NODE" x="0vw" y="-8vw" icon="faNode"/>
                <Skills name="EXPRESS" x="0vw" y="8vw" icon=""/>
                <Skills name="BOOTSTRAP" x="-25vw" y="-10vw" icon="faBootstrap"/>
                <Skills name="TAILWIND" x="25vw" y="-10vw" icon=""/>
                <Skills name="PYTHON" x="15vw" y="5vw" icon="faPython"/>
                <Skills name="C++" x="-15vw" y="5vw"/>
                <Skills name="PHP" x="0vw" y="16vw" icon="faPhp"/>
                <Skills name="GIT" x="-25vw" y="10vw" icon="faGit"/>
                <Skills name="GITHUB" x="25vw" y="10vw" icon="faGithub"/>
                <Skills name="MySql" x="-14vw" y="17vw" icon="faDatabase"/>
                <Skills name="WordPress" x="15vw" y="17vw" icon="faWordpress" />
            </div>
        </>
    );
}
export default SkillsContainer;