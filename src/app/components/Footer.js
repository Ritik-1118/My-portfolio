"use client"
import { useEffect, useState } from 'react';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(true); // Start with the footer shown

    useEffect(() => {
        // Function to check screen width and hide the footer on smaller screens
        const handleResize = () => {
            if (window.innerWidth < 1279) {
                setShowFooter(false);
            } else {
                setShowFooter(true);
            }
        };

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the initial state
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className={`fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 text-center transition-opacity translate-z-0 duration-500 ${showFooter ? '' : 'hidden'}`}>
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
