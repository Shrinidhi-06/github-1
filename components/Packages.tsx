const packages = [
  {
    title: "Karnataka Tours",
    destinations: "Bengaluru, Mysuru, Coorg, Chikmagalur, Hampi",
    duration: "3–5 Days",
  },
  {
    title: "Tamil Nadu Tours",
    destinations: "Chennai, Ooty, Kodaikanal, Madurai, Rameswaram",
    duration: "4–6 Days",
  },
  {
    title: "Kerala Tours",
    destinations: "Munnar, Alleppey, Thekkady, Kochi, Wayanad",
    duration: "4–6 Days",
  },
 
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="bg-gray-50 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Explore With Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Tour Packages
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Explore beautiful destinations with comfortable travel plans
            designed for families and groups.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-orange-500">
                🗺️
              </div>

              {/* Title */}
              <h3 className="mt-6 text-center text-xl font-bold text-blue-950">
                {pkg.title}
              </h3>

              {/* Destinations */}
              <div className="mt-5 flex-1">
                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-semibold text-gray-900">
                    Destinations
                  </span>
                  <br />
                  {pkg.destinations}
                </p>

                {/* Duration */}
                <div className="mt-5 rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-950">
                      Duration:
                    </span>{" "}
                    {pkg.duration}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-6 block rounded-full bg-blue-950 px-5 py-3 text-center text-sm font-bold text-white transition duration-200 hover:bg-orange-500"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Custom Tour CTA */}
        <div className="mt-14 rounded-2xl bg-blue-950 px-6 py-8 text-center text-white shadow-lg sm:px-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Looking for a Custom Trip?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Tell us your preferred destinations, travel dates, and group
            requirements. We'll help you plan a comfortable trip.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-7 py-3.5 font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-orange-600"
          >
            Plan Your Trip
          </a>
        </div>

      </div>
    </section>
  );
}
