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
      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-full pl-3 pr-1.5 py-1.5 border border-black/10 shadow-xl shadow-black/10">
        <a href="#" className="flex items-center gap-2.5 pr-3 sm:pr-4">
          <div className="h-8 w-8 sm:h-9 sm:w-9 relative shrink-0 flex items-center justify-center">
            <img
              src="/brand_logo/shmg.png"
              alt="SHMG Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <span className="font-heading font-medium text-xs sm:text-sm tracking-tight text-[#12281A] whitespace-nowrap">
            SHMG
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-1 text-sm text-black/60">
          <a href="#about" className="whitespace-nowrap px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            About
          </a>
          <a href="#services" className="whitespace-nowrap px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Services
          </a>
          <a href="#who-we-serve" className="whitespace-nowrap px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Who We Serve
          </a>
          <a href="#standards" className="whitespace-nowrap px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Standards
          </a>
          <a href="#academy" className="whitespace-nowrap px-3 py-1.5 rounded-full hover:text-black hover:bg-black/5 transition-colors duration-300">
            Academy
          </a>
        </div>
        <a href="#contact" className="shrink-0 ml-1 sm:ml-2 bg-[#1E4D33] hover:bg-[#2A6647] active:scale-95 text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#1E4D33]/30">
          Contact
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden shrink-0 ml-1 p-2 rounded-full hover:bg-black/5 transition-colors"
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
