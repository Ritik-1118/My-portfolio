"use client"
import { motion } from 'framer-motion';
import images from "../../components/ArrayOfImages"
import {AddProject } from "../../components/AddProject"

const Projects = () => {
    return (
        <div className="min-h-screen divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-10 md:space-y-5">
                <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-blue-500 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    PROJECTS
                </h1>
            </div>

            <div className='sm:mx-5'>
                <AddProject
                    index={1}
                    img={images.whatsApp_clone}
                    projectName="Realtime ChatApp"
                    description="Designed and developed a dynamic Realtime ChatApp, empowering users with seamless individual messaging(text and emojies), multimedia sharing(images and audio), and advanced video and voice calling capabilities for an enriched communication experience."
                    url="https://chatapp-dun-nine.vercel.app/"
                    gitUrl="https://github.com/Ritik-1118/ChatApp-B"
                    tools={["React.js","Node.js","Express","MongoDb","Tailwind","Stripe","Zegocloud","Vercel"]}
                />
                <AddProject
                    index={2}
                    img={images.Food_Hut}
                    projectName="Food-Hut"
                    description="&quot;Food-Hut&quot; is a cutting-edge MERN stack web app featuring React, Express, Node, and Tailwind CSS, providing a seamless experience for customers and restaurant owners. Our intuitive admin panel simplifies management tasks, ensuring smooth operations. Secure payments are facilitated through Stripe integration, guaranteeing trust and efficiency. With deployment on Vercel, scalability and reliability are prioritized, ensuring uninterrupted service. Welcome to &quot;Food-Hut&quot; where innovation meets convenience in the world of food delivery."
                    url="https://food-hut-nine.vercel.app/"
                    gitUrl="https://github.com/Ritik-1118/Food-Hut"
                    tools={["Next.js","Node.js","Express","MongoDb","Tailwind","Stripe","Vercel"]}
                />
                <AddProject
                    index={3}
                    img={images.Notes_Keeper}
                    projectName="Notes Keeper"
                    description="Notes Keeper is designed to streamline note-taking and management, making it more efficient and user-friendly. With seamless create, read, update, and delete (CRUD) operations, users have complete control over their information. The app also allows for easy categorization of notes through an intuitive labeling system, ensuring that all notes are organized and easily accessible."
                    url="https://note-keeper-puce.vercel.app/"
                    gitUrl="https://github.com/Ritik-1118/Note-Keeper"
                    tools={["TypeScript","React.js","Node.js","Express","MongoDb","Tailwind","Vercel"]}
                />
                <AddProject
                    index={4}
                    projectName="SOlvify MERN-STACK"
                    img={images.solvify}
                    description="Explore my MERN project, uniting Node.js, Express.js, React.js, and Tailwind CSS for a seamless full-stack experience. It boasts secure user authentication with JWT, responsive design for various devices, and an admin panel for efficient management. This project exemplifies my ability to deliver modern, user-friendly web applications, blending backend and frontend technologies seamlessly."
                    url="https://solvify-alpha.vercel.app/"
                    gitUrl="https://github.com/Ritik-1118/Solvify"
                    tools={["React.js","Node.js","Express","MongoDb","Tailwind","JWT","Vercel"]}
                />
                <AddProject
                    index={5}
                    projectName="Online-Shoe-store"
                    img={images.online_store}
                    description="Online-Shoe-store is an online store, where users can find array of shoes and services, It comes with an administrator dashboard for creating, deleting, updating posts basically it can perform CRUD operations.</p>
                    <br /><p>It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online."
                    url="https://online-shoe-store-sepia.vercel.app/"
                    gitUrl="#"
                    tools={["Next.js","Strapi","Tailwind","Vercel"]}
                />
                <AddProject
                    index={6}
                    projectName="currency_converter"
                    img={images.converter}
                    description="Designed a simple Currency Converter Web App,providing users with real-time exchange rates, effortless currency conversion."
                    url="#"
                    gitUrl="https://github.com/Ritik-1118/Currency-converter"
                    tools={["Next.js","DJando","Tailwind"]}
                />
            </div>
        </div>
    );
};

export default Projects;
