export default function About() {
  return (
    <section id="about" className="bg-gray-50 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            About Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            About RS Tourist & Transport
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            RS Tourist & Transport provides personalized travel packages
            for memorable family holidays across India. We also provide
            reliable transport solutions with different types of goods
            vehicles available.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Family Holidays */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🏖️
            </div>

            <h3 className="mt-5 text-xl font-bold text-blue-950">
              Family Holidays
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Customized travel packages designed for comfortable
              family experiences.
            </p>
          </div>

          {/* Travel Across India */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🇮🇳
            </div>

            <h3 className="mt-5 text-xl font-bold text-blue-950">
              Travel Across India
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Explore destinations across India with planned tours
              and reliable service.
            </p>
          </div>

          {/* Transport Services */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              🚚
            </div>

            <h3 className="mt-5 text-xl font-bold text-blue-950">
              Transport Services
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Different types of goods vehicles are available for
              transportation needs.
            </p>
          </div>

        </div>

        {/* Location */}
        <div className="mt-14 rounded-2xl bg-blue-950 px-6 py-8 text-center text-white shadow-lg sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Our Location
          </p>

          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
            Kageri, Koni Road, Koteshwar
          </h3>

          <p className="mt-2 text-gray-300">
            Udupi, Karnataka, India
          </p>
        </div>

      </div>
    </section>
  );
}