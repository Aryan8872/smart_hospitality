"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-4 sm:top-7 z-50">
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md rounded-full pl-4 pr-1.5 py-1.5 border border-black/10 shadow-xl shadow-black/10">
        <a href="#" className="flex items-center gap-2.5 pr-3 sm:pr-4">
          <span className="grid grid-cols-3 gap-[2.5px]">
            <span className="w-1 h-1 rounded-full bg-[#42A85D]"></span>
            <span className="w-1 h-1 rounded-full bg-black/70"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/70"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/70"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/70"></span>
            <span className="w-1 h-1 rounded-full bg-[#42A85D]"></span>
          </span>
          <span className="font-heading font-semibold text-sm tracking-tight whitespace-nowrap">
            SHM
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm text-black/60">
          <a href="#about" className="px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            About
          </a>
          <a href="#services" className="px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Services
          </a>
          <a href="#who-we-serve" className="px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Who We Serve
          </a>
          <a href="#standards" className="px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Standards
          </a>
          <a href="#academy" className="px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Academy
          </a>
        </div>
        <a href="#contact" className="ml-1 sm:ml-2 bg-[#1E4D33] hover:bg-[#2A6647] active:scale-95 text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#1E4D33]/30">
          Contact
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-1 p-2 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-black transition-all"></span>
          <span className="block w-5 h-0.5 bg-black mt-1.5 transition-all"></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-black/10 shadow-xl">
          <nav className="flex flex-col gap-2">
            {["About", "Services", "Who We Serve", "Standards", "Academy", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-full text-black/80 hover:text-black hover:bg-black/5 transition-colors"
                href={`#${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};
