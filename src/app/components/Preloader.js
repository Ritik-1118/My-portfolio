import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show the Preloader on component mount
        setIsLoading(false);

        // Hide the Preloader after 1 seconds
        const timer = setTimeout(() => {
        setIsLoading(true);
        }, 1000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${isLoading ? 'active' : ''}`}>
        <div className="font">
            <h1 className='text-blue-800 text-9xl'>LOADING</h1>
        </div>
        <style jsx>{`
            .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            /* background: green; */
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            transition: opacity 0.5s ease;
            z-index: 9999;
            }
            .font{
                font-family: 'poppins', sans-serif;
                font-weight:800;
                position: fixed;
                transform: translate(-50%,-50%);
            }
            .font h1{
                position: absolute;
                transform: translate(-50%,-50%);
            }
            .font h1:nth-child(1){
                color: transparent;
                -webkit-text-stroke: 2px #03a9f4;
            }
            
            .preloader.active {
            opacity: 0;
            pointer-events: none;
            }

            .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            width: 200px;
            height: 200px;
            animation: spin 2s linear infinite;
            }

            @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(0deg);
            }
            }
        `}</style>
        </div>
    );
};

export default Preloader;
