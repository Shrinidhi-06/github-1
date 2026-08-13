"use client";

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const pickup = formData.get("pickup")?.toString() || "";
    const destination = formData.get("destination")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const whatsappMessage = `
Hello RS Tourist & Transport,

I would like to make a booking enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Required: ${service}
Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${date}

Additional Requirements:
${message}
    `.trim();

    const whatsappNumber = "9741371523";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Plan Your Journey With Us
          </h2>

          <p className="mx-auto mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Looking for a tourist vehicle, transport service, or tour package?
            Send us your requirements and we'll help you plan your journey.
          </p>
        </div>

        {/* Contact + Booking */}
        <div className="mt-12 grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl lg:col-span-2 lg:p-10">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Get In Touch
            </p>

            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              RS Tourist & Transport
            </h3>

            <p className="mt-5 leading-7 text-gray-300">
              Your trusted partner for comfortable travel, tourist vehicles,
              transport services, and memorable journeys across India.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📞
                </div>

                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📧
                </div>

                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    example@email.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📍
                </div>

                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="mt-1 text-sm text-gray-300">
                    Kageri, Koni Road, Koteshwar,
                    <br />
                    Udupi, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  🚗
                </div>

                <div>
                  <h4 className="font-bold">Our Services</h4>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    Tourist Cars • Buses • Pickup Vehicles • Goods Transport
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp Prompt */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-6 text-gray-300">
                Ready to plan your journey? Fill out the booking form and
                send your requirements directly through WhatsApp.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:col-span-3 lg:p-10">

            <h3 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
              Send a Booking Request
            </h3>

            <p className="mt-2 text-gray-600">
              Fill in your details and travel requirements.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>

              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="tourist-car">Tourist Car</option>
                  <option value="tourist-bus">Tourist Bus</option>
                  <option value="pickup">Pickup Goods Vehicle</option>
                  <option value="lorry">Lorry / Goods Transport</option>
                  <option value="tour-package">Tour Package</option>
                </select>
              </div>

              {/* Pickup + Destination */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="pickup"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Pickup Location
                  </label>

                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    placeholder="Pickup location"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Destination
                  </label>

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Destination"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                    required
                  />
                </div>

              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Travel Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Additional Requirements
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your travel requirements..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-4 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
              >
                Send Booking Request via WhatsApp
              </button>

              <p className="text-center text-xs text-gray-500">
                Your request will open in WhatsApp with your booking details.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}