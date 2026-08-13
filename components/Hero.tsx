export default function Hero() {
  return (
    <section
      id="home"
       className="relative flex min-h-[calc(100vh-72px)] items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/travel.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>
     
      {/* Subtle blue overlay */}
      <div className="absolute inset-0 bg-blue-950/20"></div>
     
      {/* Hero Content */}
       <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
       <div className="mx-auto max-w-4xl">

       {/* Small Brand Label */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-base">
            Your Journey, Our Responsibility
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Explore India
            <span className="block text-orange-400">
              With RS Tourist
            </span>
          </h1>


          {/* Description */}
         <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-100 sm:text-lg sm:leading-8 md:text-xl">
            Personalized travel packages for memorable family holidays
            across India with comfortable transport services.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Book Your Tour */}
            <a
              href="#packages"
             className="w-full rounded-full bg-orange-500 px-8 py-4 font-bold shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl sm:w-auto"
             >
              Book Your Tour
            </a>

            {/* Contact Us */}
            <a
              href="#contact"
             className="w-full rounded-full border-2 border-white px-8 py-4 font-bold transition duration-200 hover:-translate-y-1 hover:bg-white hover:text-blue-950 sm:w-auto"
            > 
            Contact Us
            </a>

          </div>

           {/* Trust Points */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-200">
            <span>✓ Comfortable Travel</span>
            <span>✓ Family Friendly</span>
            <span>✓ Personalized Packages</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}