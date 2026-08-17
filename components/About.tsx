import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold tracking-[0.25em] text-orange-500">
            01
          </span>

          <span className="h-px w-12 bg-orange-500" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            About RS Tourist
          </span>
        </div>

        {/* Main Layout */}
        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">

          {/* Left Content */}
          <div className="lg:col-span-5 lg:pt-8">

            <h2 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] text-blue-950 sm:text-6xl lg:text-7xl">
              Journeys
              <span className="block text-orange-500">
                that become
              </span>
              memories.
            </h2>

            <div className="mt-10 max-w-md">
              <p className="text-lg leading-8 text-gray-700">
                At RS Tourist & Transport, we believe the best journeys are
                about more than simply reaching a destination.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-500">
                From family holidays and group trips to local travel and
                reliable transport, we make every journey comfortable,
                flexible, and memorable.
              </p>
            </div>

            {/* Small Brand Statement */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-sm font-bold text-white">
                RS
              </div>

              <div>
                <p className="text-sm font-bold text-blue-950">
                  RS Tourist & Transport
                </p>

                <p className="text-xs text-gray-500">
                  Koteshwar · Udupi · Karnataka
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-4 font-bold text-blue-950"
            >
              <span className="border-b-2 border-orange-500 pb-1 transition duration-300 group-hover:text-orange-500">
                Plan your journey
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                →
              </span>
            </a>
          </div>

          {/* Right Image Composition */}
          <div className="relative lg:col-span-7">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2rem">
              <Image
                src="/images/about-journey.png"
                alt="Scenic journey through the mountains"
                width={1200}
                height={800}
                priority
                className="h-480px w-full object-cover transition duration-1000 hover:scale-105 sm:h-580px lg:h-650px"
              />

              {/* Cinematic Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 right-5 max-w-[65%] text-right text-white sm:bottom-9 sm:right-9 sm:max-w-md">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                  Discover India
                </p>

                <p className="mt-2 text-xl font-bold leading-tight sm:text-3xl">
                  The road is part of the adventure.
                </p>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -bottom-6 z-10 left-5 w-52 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:left-10 sm:w-64 lg:-left-16 lg:w-72">
              <Image
                src="/images/beautiful-Journeys.png"
                alt="Beautiful Indian travel destination"
                width={700}
                height={550}
                className="h-44 w-full object-cover transition duration-700 hover:scale-110 sm:h-52 lg:h-56"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pb-4 pt-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  Beautiful Journeys
                </p>
              </div>
            </div>

            {/* Number */}
            <div className="absolute -right-2 -top-8 hidden text-[7rem] font-black leading-none text-gray-100 lg:block">
              01
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-28 border-t border-gray-200 pt-10 sm:mt-32">
          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Travel
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Comfortable journeys for families and groups.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Explore
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discover destinations across India.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Transport
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Reliable vehicles for travel and goods transport.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}