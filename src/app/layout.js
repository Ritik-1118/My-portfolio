import "./globals.css";
import Head from 'next/head';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ParticlesBg from "./components/ParticlesBg"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
        title: "Portfolio",
        description: "Created By Ritik",
    };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`${inter.className} bg-gradient-to-b from-[#05014f] to-black text-black home dark:text-white h-full`}
            >
                    <Navbar/>
                    <Header/>
                    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </main>
                <Footer />
                <ParticlesBg />
            </body>
        </html>
    )
}
