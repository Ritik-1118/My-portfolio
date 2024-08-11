"use client";
import { motion } from 'framer-motion';

const waveTransition = {
    hidden: { opacity: 1, y: 100, scale: 0.9, x: "-100vw" },
    visible: {
        opacity: 1,
        y: [ 100, -20, 0 ], // Wave effect by animating y position
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            times: [ 0, 0.8, 1 ] // Timing of the wave
        }
    },
    exit: {
        opacity: 0,
        y: [ 0, 20, 100 ], // Wave effect on exit
        scale: 0.9,
        x: "100vw",
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            times: [ 0, 0.5, 1 ]
        }
    },
};




export const PageWrapper = ( { children } ) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={waveTransition}
        >
            {children}
        </motion.div>
    );
};
