"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading () {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            style={ {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
                zIndex: 1000,
            } }
        >
            Loading...
        </motion.div>
    );
}
