import "./globals.css";
import Head from 'next/head';
import { Metadata } from "next";
import { Inter } from "next/font/google";
// import Nav from "./components/Nav2";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ParticlesBg from "./components/ParticlesBg"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Portfolio",
    description: "Created By Ritik",
    // icon:{
    //     icon:['/fav/logo2.png'],
    //   apple:['/apple-touch-icon.png?v=4'],
    // }
    };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
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
