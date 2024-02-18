"use client"
import Project from "../../components/CreateProject"
import { motion } from 'framer-motion';
import images from "../../components/ArrayOfImages"

const Projects = () => {
    return (
        <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-10 md:space-y-5">
                <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-blue-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    PROJECTS
                </h1>
            </div>

            <div className='sm:mx-5'>
                {/* Project 1 */}
                <div className='flex'>
                    <hr className=' text-3xl w-1/2'/>
                    <div className='border rounded-full text-2xl px-3'>1</div>
                    <hr className=' text-3xl w-1/2'/>
                </div>
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >   
                    <Project 
                        img={images.Food_Hut}
                        projectName="Food-Hut"
                        url="https://food-hut-nine.vercel.app/"
                        gitUrl="https://github.com/Ritik-1118/Food-Hut"
                    />
                    <div className='col-span-6'>
                        <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>Food-Hut</div>
                        <div className='flex'>
                            <p className=' text-md pt-2 italic'>&quot;Food-Hut&quot; is a cutting-edge MERN stack web app featuring React, Express, Node, and Tailwind CSS, providing a seamless experience for customers and restaurant owners. Our intuitive admin panel simplifies management tasks, ensuring smooth operations. Secure payments are facilitated through Stripe integration, guaranteeing trust and efficiency. With deployment on Vercel, scalability and reliability are prioritized, ensuring uninterrupted service. Welcome to &quot;Food-Hut&quot; where innovation meets convenience in the world of food delivery.</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools </p>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> React.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Node.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Express</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Tailwind</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Stripe</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Vercel</button>
                        </div>
                    </div>
                    
                </motion.div>
                <div className='flex items-center'>
                    <hr className=' text-3xl w-1/2'/>
                    <div className='border rounded-full text-2xl px-3'>2</div>
                    <hr className=' text-3xl w-1/2'/>
                </div>

                {/* Project 2 */}
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >
                    <div className='col-span-6'>
                        <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>MERN-STACK : Solvify</div>
                        <div className='flex'>
                            <p className=' text-lg pt-4 italic'>Explore my MERN project, uniting Node.js, Express.js, React.js, and Tailwind CSS for a seamless full-stack experience. It boasts secure user authentication with JWT, responsive design for various devices, and an admin panel for efficient management. This project exemplifies my ability to deliver modern, user-friendly web applications, blending backend and frontend technologies seamlessly.</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools </p>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> React.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Node.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Express</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Tailwind</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> JWT</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Vercel</button>
                        </div>
                    </div>
                    <Project 
                        img={images.solvify}
                        projectName="SOlvify MERN-STACK"
                        url="https://solvify-alpha.vercel.app/"
                        gitUrl="https://github.com/Ritik-1118/Solvify"
                    />
                </motion.div>
                <div className='flex items-center'>
                    <hr className=' text-3xl w-1/2'/>
                    <div className='border rounded-full text-2xl px-3'>3</div>
                    <hr className=' text-3xl w-1/2'/>
                </div>

                {/* Project 3 */}
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >   
                    <Project 
                        img={images.whatsApp_clone}
                        projectName="Realtime ChatApp"
                        url="https://chatapp-dun-nine.vercel.app/"
                        gitUrl="https://github.com/Ritik-1118/ChatApp-B"
                    />
                    <div className='col-span-6'>
                        <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>Realtime Live ChatApp</div>
                        <div className='flex'>
                            <p className=' text-xl pt-4 italic'>Designed and developed a dynamic Realtime ChatApp, empowering users with seamless individual messaging(text and emojies), multimedia sharing(images and audio), and advanced video and voice calling capabilities for an enriched communication experience.</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools </p>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Next.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Node.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Express</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Tailwind</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Zegocloud</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Vercel</button>
                        </div>
                    </div>
                    
                </motion.div>
                <div className='flex items-center'>
                    <hr className=' text-3xl w-1/2'/>
                    <div className='border rounded-full text-2xl px-3'>4</div>
                    <hr className=' text-3xl w-1/2'/>
                </div>
                {/* Project 4 */}
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >
                    <div className='col-span-6'>
                        <div className=' text-5xl py-4 underline underline-offset-8 font-bold'>Online-Shoe-store</div>
                        <div className='text-lg pt-4 italic'>
                            <p>Online-Shoe-store is an online store, where users can find array of shoes and services, It comes with an administrator dashboard for creating, deleting, updating posts basically it can perform CRUD operations.</p>
                            <br /><p>It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools </p>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 text-lg my-2 font-semibold'> Next.js</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 text-lg my-2 font-semibold'> Strapi</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 text-lg my-2 font-semibold'> Stripe</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 text-lg my-2 font-semibold'> Tailwind</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 text-lg my-2 font-semibold'> Vercel</button>
                        </div>
                    </div>
                    <Project 
                        img={images.online_store}
                        projectName="Online-Shoe-store"
                        url="https://online-shoe-store-sepia.vercel.app/"
                        gitUrl="#"
                    />
                </motion.div>
                <div className='flex items-center'>
                    <hr className=' text-3xl w-1/2'/>
                    <div className='border rounded-full text-2xl px-3'>5</div>
                    <hr className=' text-3xl w-1/2'/>
                </div>
                {/* Project 5 */}
                <motion.div 
                    whileHover={{scale:1.05}}
                    initial={{x:0,y:0}}
                    whileInView={{x:"0vw",y:"0vw"}}
                    transition={{duration:1.5}}
                    className='grid lg:grid-cols-12 md:grid-cols-2 sm:grid-cols-4 lg:gap-24 sm:gap-6 py-20'
                >
                    <Project 
                        img={images.converter}
                        projectName="currency_converter"
                        url="#"
                        gitUrl="https://github.com/Ritik-1118/Currency-converter"
                    />
                    <div className='col-span-6'>
                        <div className=' text-4xl py-4 underline underline-offset-8 font-bold'>Currency_converter</div>
                        <div className='flex'>
                            <p className=' text-xl pt-4 italic'>Designed a simple Currency Converter Web App,providing users with real-time exchange rates, effortless currency conversion.</p>
                        </div>
                        <div className='my-5'>
                            <p className=' text-3xl mb-4 underline underline-offset-4 flex'>Tools </p>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> DJando</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Tailwind</button>
                            <button type="button" className=' border rounded-lg px-2 py-1 mr-5 my-2 text-lg font-semibold'> Next.js</button>
                        </div>
                    </div>
                    <div className=''>

                    </div>
                </motion.div>
            </div>
            
        </div>
    );
};

export default Projects;
