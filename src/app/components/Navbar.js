'use client'

import {
    HiHome,
    HiUser,
    HiEnvelope,
    HiViewColumns,
} from 'react-icons/hi2';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const NavData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/pages/about', icon: <HiUser /> },
    { name: 'projects', path: '/pages/projects', icon: <HiViewColumns /> },
    { name: 'contact', path: '/pages/contacts', icon: <HiEnvelope /> },
    ];

const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <nav className='flex fixed bottom-0 left-0 z-50 items-center xl:justify-center w-full xl:w-16 xl:max-w-md xl:h-screen '>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[10px] xl:h-max py-8 bg-blue-900 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {NavData.map((link, index) => (  
                    <Link
                        className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-cyan-500 transition-all duration-300`}
                        href={link.path}  
                        key={index}
                    >
                        <>
                            {/* tooltip */}
                            <div className='absolute pl-12 hidden xl:group-hover:flex'>
                                <div className='bg-white relative flex items-center p-[6px] rounded-[3px]'>
                                <div className='text-[12px] leading-none font-semibold capitalize text-blue-900'>
                                    {link.name}
                                </div>
                                {/* triangle */}
                                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] absolute -left-4'></div>
                                </div>
                            </div>
                            
                            {/* icon */}
                            <div>{link.icon}</div>
                        </>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
