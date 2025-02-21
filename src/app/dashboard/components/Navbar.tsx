import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className='flex justify-between align-center p-4 px-12 bg-[#07080e] text-white'>
            <div className='font-bold text-2xl w-full max-w-[256px]'>
                <Link href={"/"} className='flex items-center'>
                    <div className='bg-[rgba(166,69,183,0.4)] blur-md z-[1] w-[40px] h-[40px] absolute'/>
                    <Image alt="" src="/Zylo.svg" className='z-[2]' height={40} width={40}/>
                    <span className='ml-4'>Zylo</span>
                </Link>
            </div>
            <nav className='flex gap-4'>
                <button className=''>Documentation</button>
                <button className='flex items-center gap-x-2 bg-purple-500/25 border border-purple-500/80 text-purple-300 hover:bg-purple-500/35 transition-all ease-in-out duration-200 rounded-full px-3 py-1'>
                    <Image alt="" src="/Zylo.svg" height={32} width={32}/>
                    Zylo Premium
                </button>
                <button>Join our Discord</button>
            </nav>
            <div className='flex align-center gap-[10px] w-full max-w-[256px] justify-end'>
                <div className='w-8 h-8 bg-white rounded-full'/>
            </div>
        </nav>
    );
};

export default Navbar;