"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Book, DollarSign, LifeBuoy, LogIn, Info } from 'lucide-react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md py-4 px-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"} className='flex items-center group space-x-4'>
          <h1 className="text-2xl text-white font-bold group-hover:text-primary transition-all duration-300 font-heading flex items-center justify-center gap-2">
            zylolabs.xyz
            <span className='uppercase bg-primary/20 border border-primary rounded-lg text-xs px-1 py-0.5 text-primary'>BETA</span>
          </h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <a href="/features" className="flex items-center text-muted-foreground hover:text-primary transition duration-300 space-x-2">
            <Info size={18} /> <span>Features</span>
          </a>
          <a href="/docs" className="flex items-center text-muted-foreground hover:text-primary transition duration-300 space-x-2">
            <Book size={18} /> <span>Docs</span>
          </a>
          <a href="/pricing" className="flex items-center text-muted-foreground hover:text-primary transition duration-300 space-x-2">
            <DollarSign size={18} /> <span>Pricing</span>
          </a>
          <a href="/support" className="flex items-center text-muted-foreground hover:text-primary transition duration-300 space-x-2">
            <LifeBuoy size={18} /> <span>Support</span>
          </a>
          <a href="/login" className="flex items-center transition-all duration-300 bg-primary/20 border border-primary/60 hover:bg-primary/40 text-white rounded-lg px-4 py-2 space-x-2">
            <LogIn size={18} /> <span>Login</span>
          </a>
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
        <div className="md:hidden flex flex-col items-center space-y-3 mt-6">
          <a href="/features" className="flex items-center text-muted-foreground w-full justify-center rounded-lg hover:text-primary hover:bg-primary/10 py-2 space-x-2">
            <Info size={18} /> <span>Features</span>
          </a>
          <a href="/docs" className="flex items-center text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/10 py-2 space-x-2 w-full justify-center">
            <Book size={18} /> <span>Docs</span>
          </a>
          <a href="/pricing" className="flex items-center text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/10 py-2 space-x-2 w-full justify-center">
            <DollarSign size={18} /> <span>Pricing</span>
          </a>
          <a href="/support" className="flex items-center text-muted-foreground hover:text-primary rounded-lg hover:bg-primary/10 py-2 space-x-2 w-full justify-center">
            <LifeBuoy size={18} /> <span>Support</span>
          </a>
          <a href="/login" className="flex items-center text-white bg-primary/20 border border-primary hover:bg-primary/40 w-full justify-center rounded-lg px-4 py-2 space-x-2">
            <LogIn size={18} /> <span>Login with Discord</span>
          </a>
        </div>
      )}
    </nav>
  );
}
