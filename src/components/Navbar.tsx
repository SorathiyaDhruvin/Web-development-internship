import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="text-white text-2xl font-bold tracking-tighter uppercase cursor-pointer">
        Itzfizz<span className="text-primary-500">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white uppercase">
        <Link href="#work" className="hover:text-primary-500 transition-colors">Work</Link>
        <Link href="#agency" className="hover:text-primary-500 transition-colors">Agency</Link>
        <Link href="#expertise" className="hover:text-primary-500 transition-colors">Expertise</Link>
        <Link href="#contact" className="hover:text-primary-500 transition-colors">Contact</Link>
      </div>

      <button className="md:hidden text-white hover:text-primary-500 transition-colors" aria-label="Menu">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
