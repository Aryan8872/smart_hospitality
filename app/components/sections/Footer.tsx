"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FBFAF7] border-t border-black/10 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="grid grid-cols-3 gap-[2.5px]">
            <span className="w-1 h-1 rounded-full bg-[#42A85D]"></span>
            <span className="w-1 h-1 rounded-full bg-black/60"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/60"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/60"></span>
            <span className="w-1 h-1 rounded-full bg-black/30"></span>
            <span className="w-1 h-1 rounded-full bg-black/60"></span>
            <span className="w-1 h-1 rounded-full bg-[#42A85D]"></span>
          </span>
          <span className="font-heading font-semibold text-sm tracking-tight">
            SHM
          </span>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-black/50">
          <a href="#about" className="hover:text-black transition-colors duration-300">
            About
          </a>
          <a href="#services" className="hover:text-black transition-colors duration-300">
            Services
          </a>
          <a href="#standards" className="hover:text-black transition-colors duration-300">
            Standards
          </a>
          <a href="#academy" className="hover:text-black transition-colors duration-300">
            Academy
          </a>
          <a href="#contact" className="hover:text-black transition-colors duration-300">
            Contact
          </a>
        </div>
        <p className="text-xs text-black/30">© 2026 Smart Hospitality Management</p>
      </div>
    </footer>
  );
};
