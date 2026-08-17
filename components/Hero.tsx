"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/travel.jpg",
    eyebrow: "Your Journey, Our Responsibility",
    title: "Explore India",
    highlight: "With RS Tourist",
    description:
      "Personalized travel experiences, comfortable transport, and memorable journeys across India.",
  },
  {
    image: "/images/family.png",
    eyebrow: "Travel Together",
    title: "Create Memories",
    highlight: "That Last Forever",
    description:
      "Comfortable and family-friendly journeys designed around the people and places that matter most.",
  },
  {
    image: "/images/travel-Destination.png",
    eyebrow: "Discover More",
    title: "Beautiful Places",
    highlight: "Amazing Journeys",
    description:
      "Explore breathtaking destinations across India with thoughtfully planned travel packages.",
  },
  {
    image: "/images/explore-india.png",
    eyebrow: "Experience India",
    title: "Your Next Adventure",
    highlight: "Starts Here",
    description:
      "From weekend escapes to extended holidays, let RS Tourist make your journey comfortable and effortless.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-blue-950"
    >
      {/* ===================================================== */}
      {/* BACKGROUND SLIDES */}
      {/* ===================================================== */}

      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              index === current
                ? "animate-[heroImage_7s_ease-out_forwards]"
                : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* ===================================================== */}
      {/* CINEMATIC OVERLAYS */}
      {/* ===================================================== */}

      {/* Overall darkness */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom cinematic gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/35 to-black/10" />

      {/* Left text readability gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-72px)] items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-10">

          {/* 
            KEY IS IMPORTANT.
            When current changes, React creates a new content block,
            so the animation starts again.
          */}

          <div
            key={current}
            className="max-w-4xl text-white"
          >

            {/* ================================================= */}
            {/* EYEBROW */}
            {/* ================================================= */}

            <div className="mb-6 flex items-center gap-4 animate-[heroTextReveal_0.8s_ease-out_0.1s_both]">

              <span className="h-px w-10 bg-orange-400" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300 sm:text-sm">
                {slide.eyebrow}
              </p>

            </div>

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animate-[heroHeadingReveal_1s_ease-out_0.2s_both]">

              {slide.title}

              <span className="block text-orange-400">
                {slide.highlight}
              </span>

            </h1>

            {/* ================================================= */}
            {/* DESCRIPTION */}
            {/* ================================================= */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 md:text-xl animate-[heroTextReveal_0.8s_ease-out_0.4s_both]">
              {slide.description}
            </p>

            {/* ================================================= */}
            {/* BUTTONS */}
            {/* ================================================= */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-[heroTextReveal_0.8s_ease-out_0.55s_both]">

              <a
                href="#services"
                className="group inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl"
              >
                Explore Services

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950"
              >
                Plan Your Journey

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* ================================================= */}
            {/* TRUST POINTS */}
            {/* ================================================= */}

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-200 animate-[heroTextReveal_0.8s_ease-out_0.7s_both]">

              <span>
                ✓ Comfortable Travel
              </span>

              <span>
                ✓ Family Friendly
              </span>

              <span>
                ✓ Personalized Packages
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* SLIDER CONTROLS */}
      {/* ===================================================== */}

      <div className="absolute bottom-8 left-5 z-20 flex items-center gap-3 sm:left-8 lg:left-10">

        {/* Previous */}

      
        {/* Indicators */}

       

        {/* Next */}

        

      </div>

      {/* ===================================================== */}
      {/* SLIDE COUNTER */}
      {/* ===================================================== */}

      

      {/* ===================================================== */}
      {/* ANIMATIONS */}
      {/* ===================================================== */}

      <style jsx>{`

        /* ----------------------------------------------- */
        /* HERO IMAGE */
        /* ----------------------------------------------- */

        @keyframes heroImage {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
          }

          100% {
            transform: scale(1.08) translate3d(-1%, -0.5%, 0);
          }
        }

        /* ----------------------------------------------- */
        /* GENERAL TEXT */
        /* ----------------------------------------------- */

        @keyframes heroTextReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ----------------------------------------------- */
        /* HEADING */
        /* ----------------------------------------------- */

        @keyframes heroHeadingReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

      `}</style>

    </section>
  );
}