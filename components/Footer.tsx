"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-blue-950 text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-400/5 blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 lg:px-10">

        {/* Top CTA */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-10 lg:p-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                Ready for your next journey?
              </p>

              <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Let's make your
                <span className="block italic text-orange-400">
                  journey memorable.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Whether it's a family holiday, a local trip, or dependable
                transport, RS Tourist & Transport is here to make your journey
                comfortable and effortless.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl"
            >
              Plan Your Journey

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <a
              href="#home"
              className="group inline-block"
            >
              <h3 className="font-display text-3xl font-black tracking-tight">
                RS
                <span className="text-orange-400"> Tourist</span>
              </h3>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                & Transport
              </p>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Personalized travel experiences and reliable transportation
              solutions for memorable journeys across India.
            </p>

            {/* Small decorative line */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                Travel with confidence
              </span>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Explore
            </h4>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#home"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-orange-400 transition-all duration-300 group-hover:w-4" />
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Services
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-white/60">

              <li className="transition-colors duration-300 hover:text-white">
                Tour Packages
              </li>

              <li className="transition-colors duration-300 hover:text-white">
                Local & Outstation Travel
              </li>

              <li className="transition-colors duration-300 hover:text-white">
                Goods Vehicle Transport
              </li>

              <li className="transition-colors duration-300 hover:text-white">
                Family Trips
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Get In Touch
            </h4>

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  📍
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Kageri, Koni Road,
                    <br />
                    Koteshwar, Udupi, Karnataka
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  ☎
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Call Us
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-orange-300"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-white/40">
            © {currentYear} RS Tourist & Transport. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/40">

            <span>
              Travel • Explore • Remember
            </span>

            <a
              href="#home"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-400"
              aria-label="Back to top"
            >
              ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}