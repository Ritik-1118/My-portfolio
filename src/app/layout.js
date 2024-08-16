// "use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/layouts/Navbar"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import ParticlesBg from "./components/ParticlesBg"

import MotionLayout from "./components/animations/motionLayout"


const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
    title: "Ritik | Portfolio",
    description: "Created By Ritik",
};

export default function RootLayout ( { children } ) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                // className={`${inter.className} bg-gradient-to-b from-[#05014f] to-black text-black home dark:text-white h-full`}
                className={ `${inter.className} bg-gradient-to-br from-[#070068] via-black to-black home dark:text-white h-full` }
            >
                <Navbar />
                <Header />
                <main className=" sm:px-6 lg:px-8">
                    <MotionLayout>
                        { children }
                    </MotionLayout>
                </main>
                <Footer />
                <ParticlesBg />
            </body>
        </html>
    )
}
