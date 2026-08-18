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
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const activeService =
    openService !== null ? services[openService] : null;

  const activeOption =
    activeService && selectedOption !== null
      ? activeService.options[selectedOption]
      : null;

  const openServiceView = (index: number) => {
    setOpenService(index);
    setSelectedOption(null);
    setSelectedItems([]);

    setTimeout(() => {
      document.getElementById("service-options")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const closeServiceView = () => {
    setOpenService(null);
    setSelectedOption(null);
    setSelectedItems([]);
  };

  const openOption = (index: number) => {
    setSelectedOption(index);
    setSelectedItems([]);

    setTimeout(() => {
      document.getElementById("service-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goBackToOptions = () => {
    setSelectedOption(null);
    setSelectedItems([]);

    setTimeout(() => {
      document.getElementById("service-options")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const toggleItem = (item: string) => {
    setSelectedItems((previous) =>
      previous.includes(item)
        ? previous.filter((selected) => selected !== item)
        : [...previous, item]
    );
  };
const goToBooking = () => {
  if (!activeService || !activeOption) return;

  const bookingData = {
    service: activeService.title,
    option: activeOption.title,
    selections:
      selectedItems.length > 0
        ? selectedItems
        : activeOption.items,
  };

  sessionStorage.setItem(
    "rsBookingData",
    JSON.stringify(bookingData)
  );
 window.dispatchEvent(new Event("rsBookingUpdated"));
   window.location.hash = "contact";

  setTimeout(() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
    
  
};
  
  return (
    <section
      id="services"
      className="bg-sand px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

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

        {/* SERVICE GRID */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const isOpen = openService === index;

            return (
              <div
  id={index === 0 ? "tour-packages" : undefined}
  key={service.number}
  className="service-card group relative h-[430px] overflow-hidden rounded-[2rem] bg-ink"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-all duration-700 group-hover:via-black/30" />

                <div className="absolute right-6 top-6 text-6xl font-black leading-none text-white/20 transition-all duration-700 group-hover:-translate-y-2 group-hover:text-white/30">
                  {service.number}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
                    RS Tourist
                  </p>

                  <h3 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openServiceView(index)}
                    className="mt-5 inline-flex items-center gap-3 font-bold text-white transition-all duration-300 hover:gap-5"
                  >
                    <span className="border-b border-orange-300 pb-1">
                      {isOpen ? "Viewing Options" : "Explore"}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      {isOpen ? "↓" : "→"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* SERVICE OPTIONS */}

        {activeService && selectedOption === null && (
          <div
            id="service-options"
            className="mt-10 animate-[panelReveal_0.6s_ease-out]"
          >
            <div className="overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl">

              <div className="relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
                <Image
                  src={activeService.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-15"
                />

                <div className="absolute inset-0 bg-blue-950/90" />

                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                      {activeService.number} / RS Tourist
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                      {activeService.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                      Choose an option and explore the details available
                      for your journey.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeServiceView}
                    aria-label="Close service options"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-blue-950"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
                {activeService.options.map((option, index) => (
                  <button
                    key={option.title}
                    type="button"
                    onClick={() => openOption(index)}
                    className="option-card group relative h-[250px] overflow-hidden rounded-2xl text-left"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h4 className="text-xl font-black text-white">
                        {option.title}
                      </h4>

                      <div className="mt-2 flex items-center gap-2 text-sm font-bold text-orange-300">
                        <span>View Details</span>
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

        {/* SELECTED OPTION */}

        {activeService && activeOption && (
          <div
            id="service-details"
            className="mt-10 animate-[detailReveal_0.7s_ease-out]"
          >
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl">

              <Image
                src={activeOption.image}
                alt=""
                fill
                sizes="100vw"
                className="scale-105 object-cover opacity-25"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/55" />

              <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-6 sm:p-10 lg:p-14">

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBackToOptions}
                    className="group flex items-center gap-2 text-sm font-bold text-white/75 transition-colors hover:text-white"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      ←
                    </span>
                    Back to options
                  </button>

                  <button
                    type="button"
                    onClick={closeServiceView}
                    aria-label="Close"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-blue-950"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-16 max-w-3xl">

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                    {activeService.title}
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                    {activeOption.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                    {activeOption.description}
                  </p>

                  {/* SELECTABLE OPTIONS */}

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      Select what you need
                    </p>

                    <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                      {activeOption.items.map((item) => {
                        const isSelected = selectedItems.includes(item);

                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleItem(item)}
                            className={`rounded-xl border px-3 py-3 text-center text-xs font-bold backdrop-blur-md transition-all duration-300 sm:text-sm ${
                              isSelected
                                ? "scale-[1.03] border-orange-400 bg-orange-400 text-blue-950 shadow-lg"
                                : "border-white/15 bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {isSelected && (
                              <span className="mr-1">✓</span>
                            )}
                            {item}
                          </button>
                        );
                      })}
                    </div>

                    {selectedItems.length > 0 && (
                      <p className="mt-3 text-sm text-orange-300">
                        Selected: {selectedItems.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* PRICE */}

                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                      Pricing
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      Contact us for a personalized quote based on your
                      destination, vehicle and travel requirements.
                    </p>
                  </div>

                  {/* CTA */}

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={goToBooking}
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-400 px-7 py-3.5 text-sm font-black text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                    >
                      Plan This Trip
                      <span>→</span>
                    </button>

                    <button
                      type="button"
                      onClick={goBackToOptions}
                      className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-950"
                    >
                      Choose Another Option
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM */}

        <div className="mt-16 border-t border-sand-dark pt-8">
          <p className="max-w-5xl text-sm leading-6 text-ink/50 transition duration-500 hover:text-ink/70 sm:text-base">
            Whether you're planning a holiday, travelling locally, or looking
            for dependable goods transportation, we're here to make the journey
            easier.
          </p>
        </div>
      </div>

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

        @keyframes panelReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes optionReveal {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes detailReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .service-card {
          opacity: 0;
          animation: serviceReveal 0.9s ease-out forwards;
        }

        .option-card {
          opacity: 0;
          animation: optionReveal 0.7s ease-out forwards;
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .option-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .option-card {
            animation: none;
            opacity: 1;
          }

          .option-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}