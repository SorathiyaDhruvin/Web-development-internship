'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-white text-2xl font-bold tracking-tighter uppercase cursor-pointer">
          Itzfizz<span className="text-primary-500">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white uppercase">
          <Link href="#work" className="hover:text-primary-500 transition-colors">Work</Link>
          <Link href="#agency" className="hover:text-primary-500 transition-colors">Agency</Link>
          <Link href="#expertise" className="hover:text-primary-500 transition-colors">Expertise</Link>
          <Link href="#contact" className="hover:text-primary-500 transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white hover:text-primary-500 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-black/95 border-b border-white/10 w-full text-white uppercase tracking-wider text-sm font-medium">
          <Link href="#work" onClick={() => setIsOpen(false)} className="hover:text-primary-500 transition-colors w-full text-center py-2">Work</Link>
          <Link href="#agency" onClick={() => setIsOpen(false)} className="hover:text-primary-500 transition-colors w-full text-center py-2">Agency</Link>
          <Link href="#expertise" onClick={() => setIsOpen(false)} className="hover:text-primary-500 transition-colors w-full text-center py-2">Expertise</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-primary-500 transition-colors w-full text-center py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
