

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


// function MyApp({ Component, pageProps }) {
  //   const router = useRouter();
  //   return(
    //     <RootLayout>
    //       <AnimatePresence mode='wait'>
    //         <motion.div key={router.route} className=''>
    
    //           <Component {...pageProps} />;
    //           <motion.div className='slide-in'
    //           initial={{scaleY:0}}
    //           animate={{scaleY:0}}
    //           exit={{scaleY:1}}
//           transition={{duration:1,ease:[0.22,1,0.36,1]}}
//           ></motion.div>
//           <motion.div className='slide-out'
//           initial={{scaleY:1}}
//           animate={{scaleY:0}}
//           exit={{scaleY:0}}
//           transition={{duration:1,ease:[0.22,1,0.36,1]}}
//           >
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//     </RootLayout>
//   );
// };

























// // pages/_app.js
// import '../globals.css'
// import RootLayout from '../layout';
// import { useEffect } from 'react';
// import swup from '../../../swup-config'; // Adjust the import path based on your project structure

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     swup.start();
//   }, []);

//   return (
//   <RootLayout>
//       <div className="swup-transition-main">
//         <Component {...pageProps} />
//       </div>
//   </RootLayout>
//   );
// }

// export default MyApp;

//   );