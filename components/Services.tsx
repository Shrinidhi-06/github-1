"use client";

import { useState } from "react";
import Image from "next/image";

type Option = {
  title: string;
  image: string;
  description: string;
  items: string[];
};

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
  options: Option[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Tour Packages",
    description:
      "Personalized holidays and memorable journeys across India.",
    image: "/images/travel-Destination.png",

    options: [
      {
        title: "Karnataka Tours",
        image: "/images/travel-Destination.png",
        description:
          "Explore beautiful hill stations, historic cities, waterfalls and cultural destinations across Karnataka.",
        items: ["Coorg", "Chikmagalur", "Hampi", "Mysore"],
      },
      {
        title: "Kerala Tours",
        image: "/images/tourist-Attraction.png",
        description:
          "Experience peaceful backwaters, green landscapes, beaches and the natural beauty of Kerala.",
        items: ["Munnar", "Alleppey", "Wayanad", "Kochi"],
      },
      {
        title: "Tamil Nadu Tours",
        image: "/images/beautiful-Journeys.png",
        description:
          "Discover ancient temples, beautiful hill stations, coastal destinations and vibrant culture.",
        items: ["Ooty", "Kodaikanal", "Madurai", "Chennai"],
      },
      {
        title: "Custom Family Tours",
        image: "/images/explore-india.png",
        description:
          "Create a personalized family holiday based on your destinations, duration and travel preferences.",
        items: [
          "Family Trips",
          "Weekend Trips",
          "Multi-City Tours",
          "Custom Plans",
        ],
      },
    ],
  },

  {
    number: "02",
    title: "Local & Outstation Travel",
    description:
      "Comfortable transportation for local and long-distance journeys.",
    image: "/images/tourist-car.png",

    options: [
      {
        title: "Local Travel",
        image: "/images/tourist-car.png",
        description:
          "Comfortable transportation for shopping, appointments, functions and everyday travel within the local area.",
        items: [
          "City Travel",
          "Shopping Trips",
          "Functions",
          "Local Sightseeing",
        ],
      },
      {
        title: "Outstation Trips",
        image: "/images/beautiful-Journeys.png",
        description:
          "Travel comfortably to destinations outside your city with flexible trip planning.",
        items: [
          "One-Day Trips",
          "Multi-Day Trips",
          "Round Trips",
          "Intercity Travel",
        ],
      },
      {
        title: "Airport Transfers",
        image: "/images/tourist-car.png",
        description:
          "Reliable pickup and drop services designed to make airport travel easy and stress-free.",
        items: [
          "Airport Pickup",
          "Airport Drop",
          "Early Morning",
          "Late Night",
        ],
      },
      {
        title: "One-Way Travel",
        image: "/images/explore-india.png",
        description:
          "Convenient one-way transportation for personal, family and business journeys.",
        items: [
          "City To City",
          "Long Distance",
          "Family Travel",
          "Flexible Timing",
        ],
      },
    ],
  },

  {
    number: "03",
    title: "Goods Vehicle Transport",
    description:
      "Reliable vehicles for different goods transportation needs.",
    image: "/images/pickup.png",

    options: [
      {
        title: "Pickup Transport",
        image: "/images/pickup.png",
        description:
          "Convenient pickup vehicle transportation for small and medium-sized goods.",
        items: [
          "Household Items",
          "Shop Materials",
          "Small Loads",
          "Local Delivery",
        ],
      },
      {
        title: "Lorry Transport",
        image: "/images/lorry.png",
        description:
          "Reliable lorry transportation for larger loads and long-distance goods movement.",
        items: [
          "Large Loads",
          "Long Distance",
          "Business Goods",
          "Bulk Transport",
        ],
      },
      {
        title: "Goods Delivery",
        image: "/images/pickup.png",
        description:
          "Dependable transportation support for moving goods safely from one location to another.",
        items: [
          "Door Delivery",
          "Business Delivery",
          "Local Delivery",
          "Scheduled Trips",
        ],
      },
      {
        title: "Transport Support",
        image: "/images/lorry.png",
        description:
          "Flexible vehicle solutions for businesses and individuals with different transportation requirements.",
        items: [
          "Flexible Vehicles",
          "Business Support",
          "Regular Trips",
          "Custom Requirements",
        ],
      },
    ],
  },

  {
    number: "04",
    title: "Family Trips",
    description:
      "Safe, comfortable and enjoyable journeys designed for families.",
    image: "/images/family.png",

    options: [
      {
        title: "Family Holidays",
        image: "/images/family.png",
        description:
          "Enjoy comfortable family holidays with carefully planned journeys and memorable destinations.",
        items: [
          "Family Friendly",
          "Comfortable Travel",
          "Flexible Plans",
          "Safe Journeys",
        ],
      },
      {
        title: "Weekend Trips",
        image: "/images/beautiful-Journeys.png",
        description:
          "Take a refreshing short break with your family and explore beautiful nearby destinations.",
        items: [
          "Short Trips",
          "Hill Stations",
          "Nature Trips",
          "Weekend Getaways",
        ],
      },
      {
        title: "Group Travel",
        image: "/images/tourist-car.png",
        description:
          "Comfortable transportation for families, friends and groups travelling together.",
        items: [
          "Family Groups",
          "Friends",
          "College Groups",
          "Functions",
        ],
      },
      {
        title: "Custom Family Tours",
        image: "/images/explore-india.png",
        description:
          "Build a family journey around your preferred destination, schedule and travel requirements.",
        items: [
          "Custom Route",
          "Flexible Dates",
          "Multiple Stops",
          "Personalized Plan",
        ],
      },
    ],
  },
];

export default function Services() {
  const [openService, setOpenService] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const activeService =
    openService !== null ? services[openService] : null;

  const activeOption =
    activeService && selectedOption !== null
      ? activeService.options[selectedOption]
      : null;

  const openServiceView = (index: number) => {
    setOpenService(index);
    setSelectedOption(null);
  };

  const closeServiceView = () => {
    setOpenService(null);
    setSelectedOption(null);
  };

  const openOption = (index: number) => {
    setSelectedOption(index);
  };

  const goBack = () => {
    setSelectedOption(null);
  };

  return (
    <section
      id="services"
      className="bg-sand px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl animate-[headerReveal_0.9s_ease-out]">

          <div className="flex items-center gap-4">

            <span className="text-sm font-bold tracking-[0.25em] text-tile">
              02
            </span>

            <span className="h-px w-12 bg-tile" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ink/50 sm:text-sm">
              What We Offer
            </span>

          </div>

          <h2 className="mt-8 font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
            Travel made

            <span className="block italic text-tile transition-transform duration-500 hover:translate-x-3">
              simple.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            From family holidays to everyday transportation, RS Tourist &
            Transport provides comfortable and reliable solutions for every
            kind of journey.
          </p>

        </div>

        {/* ================= SERVICE GRID ================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {services.map((service, index) => {

            const isOpen = openService === index;

            return (
              <div
                key={service.number}
                className={`service-card group relative overflow-hidden rounded-[2rem] bg-ink transition-all duration-700 ${
                  isOpen
                    ? "min-h-[620px]"
                    : "h-[430px]"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >

                {/* ================================================= */}
                {/* NORMAL SERVICE CARD */}
                {/* ================================================= */}

                {!isOpen && (
                  <>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={800}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-all duration-700 group-hover:via-black/30" />

                    {/* Number */}

                    <div className="absolute right-6 top-6 text-6xl font-black leading-none text-white/20 transition-all duration-700 group-hover:-translate-y-2 group-hover:text-white/30">
                      {service.number}
                    </div>

                    {/* Content */}

                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

                      <p className="mb-3 translate-y-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        RS Tourist
                      </p>

                      <h3 className="font-display text-3xl font-black leading-tight text-white transition-transform duration-500 group-hover:-translate-y-1 sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                        {service.description}
                      </p>

                      {/* Explore Button */}

                      <button
                        type="button"
                        onClick={() => openServiceView(index)}
                        className="mt-5 inline-flex items-center gap-3 font-bold text-white transition-all duration-300"
                      >

                        <span className="border-b border-orange-300 pb-1">
                          Explore
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white group-hover:text-black">
                          →
                        </span>

                      </button>

                    </div>
                  </>
                )}

                {/* ================================================= */}
                {/* OPTIONS VIEW */}
                {/* ================================================= */}

                {isOpen && activeOption === null && (
                  <div className="absolute inset-0 overflow-hidden bg-blue-950">

                    {/* Background */}

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover opacity-20 transition-transform duration-[1500ms] scale-105"
                    />

                    <div className="absolute inset-0 bg-blue-950/90" />

                    <div className="relative z-10 h-full p-6 sm:p-8">

                      {/* Top */}

                      <div className="flex items-start justify-between">

                        <div className="animate-[contentReveal_0.6s_ease-out]">

                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                            RS Tourist
                          </p>

                          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                            {service.title}
                          </h3>

                          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                            Choose an option below and discover how we can
                            make your journey easier.
                          </p>

                        </div>

                        {/* Close */}

                        <button
                          type="button"
                          onClick={closeServiceView}
                          aria-label="Close"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-all duration-500 hover:rotate-90 hover:bg-white hover:text-black"
                        >
                          ×
                        </button>

                      </div>

                      {/* Options */}

                      <div className="mt-7 grid grid-cols-2 gap-3">

                        {service.options.map((option, optionIndex) => (

                          <button
                            key={option.title}
                            type="button"
                            onClick={() => openOption(optionIndex)}
                            className="option-card group relative h-[175px] overflow-hidden rounded-2xl text-left opacity-0 animate-[optionReveal_0.7s_ease-out_forwards] sm:h-[190px]"
                            style={{
                              animationDelay: `${200 + optionIndex * 120}ms`,
                            }}
                          >

                            <Image
                              src={option.image}
                              alt={option.title}
                              fill
                              sizes="(max-width: 767px) 50vw, 25vw"
                              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-700 group-hover:via-black/50" />

                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">

                              <h4 className="text-sm font-black text-white sm:text-base">
                                {option.title}
                              </h4>

                              <div className="mt-1 flex items-center gap-2 text-xs font-bold text-orange-300">

                                <span>
                                  Explore
                                </span>

                                <span className="transition-transform duration-300 group-hover:translate-x-2">
                                  →
                                </span>

                              </div>

                            </div>

                          </button>

                        ))}

                      </div>

                    </div>

                  </div>
                )}

                {/* ================================================= */}
                {/* DETAIL VIEW */}
                {/* ================================================= */}

                {isOpen && activeOption && (
                  <div className="absolute inset-0 overflow-hidden bg-blue-950">

                    {/* Background Image */}

                    <Image
                      src={activeOption.image}
                      alt={activeOption.title}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover opacity-30 scale-105 transition-transform duration-[1500ms]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-950/85 to-blue-950/95" />

                    {/* Content */}

                    <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">

                      {/* Navigation */}

                      <div className="flex items-center justify-between">

                        <button
                          type="button"
                          onClick={goBack}
                          className="group flex items-center gap-2 text-sm font-bold text-white/80 transition-colors hover:text-white"
                        >

                          <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            ←
                          </span>

                          Back

                        </button>

                        <button
                          type="button"
                          onClick={closeServiceView}
                          aria-label="Close"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-all duration-500 hover:rotate-90 hover:bg-white hover:text-black"
                        >
                          ×
                        </button>

                      </div>

                      {/* Details */}

                      <div className="mt-auto animate-[detailReveal_0.7s_ease-out]">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                          {service.title}
                        </p>

                        <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                          {activeOption.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                          {activeOption.description}
                        </p>

                        {/* Features */}

                        <div className="mt-5 grid grid-cols-2 gap-2">

                          {activeOption.items.map((item) => (

                            <div
                              key={item}
                              className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm sm:text-sm"
                            >
                              {item}
                            </div>

                          ))}

                        </div>

                        {/* CTA */}

                        <button
                          type="button"
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Hello RS Tourist & Transport, I am interested in ${activeOption.title} under ${service.title}. I would like to know more about the available options.`
                            );

                            window.open(
                              `https://wa.me/?text=${message}`,
                              "_blank"
                            );
                          }}
                          className="mt-6 inline-flex items-center gap-3 rounded-full bg-orange-300 px-5 py-3 text-sm font-black text-blue-950 transition-all duration-300 hover:gap-5 hover:bg-white"
                        >

                          Plan This Trip

                          <span>
                            →
                          </span>

                        </button>

                      </div>

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-16 border-t border-sand-dark pt-8">

          <p className="max-w-5xl text-sm leading-6 text-ink/50 transition duration-500 hover:text-ink/70 sm:text-base">
            Whether you're planning a holiday, travelling locally, or looking
            for dependable goods transportation, we're here to make the journey
            easier.
          </p>

        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`

        @keyframes headerReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateY(45px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes optionReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.94);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes detailReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card {
          opacity: 0;
          animation: serviceReveal 0.9s ease-out forwards;
        }

        .option-card {
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .option-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

      `}</style>

    </section>
  );
}