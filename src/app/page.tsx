"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
      
      <nav className="fixed top-0 left-0 w-full bg-background/20 backdrop-blur-md py-4 px-6 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href={"/"} className='flex items-center group space-x-4'>
            <h1 className="text-2xl text-white font-bold group-hover:text-primary transition-all duration-300 font-heading flex items-center justify-center gap-2">
              zylolabs.xyz
              <span className='uppercase bg-primary/20 border border-primary rounded-lg text-xs px-1 py-0.5 text-primary'>BETA</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">About</a>
            <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {navbarOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-6">
            <a href="#about" className="text-white">About</a>
            <a href="#projects" className="text-white">Projects</a>
            <a href="#contact" className="text-white">Contact</a>
          </div>
        )}
      </nav>

      <div className="absolute inset-0 -z-10 h-full bg-[size:4rem_4rem] opacity-40 bg-[linear-gradient(to_right,hsla(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--primary))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,hsla(var(--primary))_40%,transparent_120%)]" />
    </div>
  );
}
