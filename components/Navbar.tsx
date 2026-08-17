"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-blue-950/70 px-4 py-3 text-white shadow-lg backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-black text-white shadow-lg transition duration-300 group-hover:scale-105 group-hover:bg-orange-400">
            RS
          </span>

          <span className="hidden text-lg font-extrabold tracking-tight sm:block md:text-xl">
            Tourist
            <span className="text-orange-400"> & Transport</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <a
            href="#home"
            className="relative font-medium text-white/90 transition hover:text-orange-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="relative font-medium text-white/90 transition hover:text-orange-400"
          >
            About
          </a>

          <a
            href="#services"
            className="relative font-medium text-white/90 transition hover:text-orange-400"
          >
            Services
          </a>

          <a
            href="#packages"
            className="relative font-medium text-white/90 transition hover:text-orange-400"
          >
            Packages
          </a>

          <a
            href="#contact"
            className="relative font-medium text-white/90 transition hover:text-orange-400"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-6 py-2.5 font-bold shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/30"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-2xl transition hover:bg-white/10 md:hidden"
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

            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
            >
              Services
            </a>

            <a
              href="#packages"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
            >
              Packages
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-white/10 hover:text-orange-400"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-bold transition hover:bg-orange-400"
            >
              Book Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}