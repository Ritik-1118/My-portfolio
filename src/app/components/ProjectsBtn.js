import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
    return(
        <div className="mx-5 ">
        <Link href="/pages/projects" className="width-[160px] height-[150px] flex justify-center item-center bg-circleStar bg-cover bg-center bg-no-repeat group">
            <Image src={'/rounded-text.png'} width={141} height={148} alt='Projects' className="animate-spin-slow  max-w-[141px] max-h-[148px]"/>
            <HiArrowRight className="absolute top-10  text-6xl group-hover:translate-x-2 group-hover:text-blue-800 transition-all duration-300"/>
        </Link>
        </div>
    )
};

export default ProjectsBtn;
