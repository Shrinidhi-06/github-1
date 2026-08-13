"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
         <nav className="sticky top-0 z-50 border-b border-white/10 bg-blue-950/95 px-4 py-3 text-white shadow-lg backdrop-blur-md sm:px-6">
         <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo / Business Name */}
        <a href="#home" onClick={closeMenu} 
        className="text-lg font-extrabold tracking-tight transition hover:text-orange-400 sm:text-xl md:text-2xl"
        >
           <span>RS</span>{" "}
          <span className="text-orange-400">Tourist & Transport</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          <a href="#home" className="font-medium transition hover:text-orange-400" >Home</a>

          <a href="#about" className="font-medium transition hover:text-orange-400">About</a>

          <a href="#services" className="font-medium transition hover:text-orange-400">Services</a>

          <a href="#packages" className="font-medium transition hover:text-orange-400">Packages</a>

          <a href="#contact" className="font-medium transition hover:text-orange-400">Contact</a>

          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-6 py-2.5 font-bold shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
         type="button"
          className="rounded-lg p-2 text-2xl transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
           {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-4 max-w-7xl border-t border-white/10 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
          <a href="#home" onClick={closeMenu}
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
          >
            Home
          </a>

          <a href="#about" onClick={closeMenu}
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
          >
            About
          </a>

          <a href="#services" onClick={closeMenu}
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
          >
            Services
          </a>

          <a href="#packages" onClick={closeMenu}
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
          >
            Packages
          </a>

          <a href="#contact" onClick={closeMenu}
          className="rounded-lg px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
             className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-bold transition hover:bg-orange-600">
            Book Now
          </a>
        </div>
        </div>
      )}
    </nav>
  );
}