import '../globals.css'
import RootLayout from '../layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';
import {motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return(
        <RootLayout>
            <AnimatePresence mode='wait'>
            <motion.div key={router.pathname} className='h-full'>
                <Component {...pageProps} />;
                <Transition/>
            </motion.div>
        </AnimatePresence>
        </RootLayout>
    )
};

export default MyApp;
