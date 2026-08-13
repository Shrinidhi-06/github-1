const services = [
  {
    icon: "🧳",
    title: "Tour Packages",
    description:
      "Personalized travel packages for memorable family holidays across India.",
  },
  {
    icon: "🚗",
    title: "Local & Outstation Travel",
    description:
      "Comfortable transportation services for local and long-distance journeys.",
  },
  {
    icon: "🚚",
    title: "Goods Vehicle Transport",
    description:
      "Different types of goods vehicles are available for transportation needs.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Trips",
    description:
      "Safe and comfortable travel experiences designed for families.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            What We Offer
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Our Services
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Travel and transport solutions designed to make every journey
            comfortable, convenient, and memorable.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-orange-500"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-blue-950">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-blue-950 px-7 py-3.5 font-bold text-white shadow-md transition duration-200 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-lg"
          >
            Enquire About Our Services
          </a>
        </div>

      </div>
    </section>
  );
}