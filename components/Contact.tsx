"use client";

import { useEffect, useState } from "react";

type BookingData = {
  service: string;
  option: string;
  selections: string;
};

export default function Contact() {
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    option: "",
    selections: "",
  });

  // Load selected service/package from sessionStorage
  useEffect(() => {
    const loadBookingData = () => {
      const savedBooking = sessionStorage.getItem("rsBookingData");

      if (!savedBooking) {
        return;
      }

      try {
        const parsedBooking = JSON.parse(savedBooking);

        setBookingData({
          service: parsedBooking.service || "",
          option: parsedBooking.option || "",
          selections: Array.isArray(parsedBooking.selections)
            ? parsedBooking.selections.join(", ")
            : parsedBooking.selections || "",
        });

        // Remove it immediately after transferring it to React state.
        sessionStorage.removeItem("rsBookingData");
      } catch (error) {
        console.error("Failed to read booking data:", error);
        sessionStorage.removeItem("rsBookingData");
      }
    };

    // Handle the case where Contact mounts after data was already saved
    // (e.g. hard refresh landing straight on #contact).
    loadBookingData();

    // Handle the normal case: user is already on the page, clicks
    // "Plan This Trip" in Services, and Contact needs to pick it up
    // without remounting.
    window.addEventListener("rsBookingUpdated", loadBookingData);

    return () => {
      window.removeEventListener("rsBookingUpdated", loadBookingData);
    };
  }, []);
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

${
  bookingData.option
    ? `Package / Option: ${bookingData.option}`
    : ""
}

${
  bookingData.selections
    ? `Selected Destinations / Requirements: ${bookingData.selections}`
    : ""
}

Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${date}

Additional Requirements:
${message || "None"}

Please provide the available options, pricing and booking details.

Thank you.
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

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Contact Us
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Plan Your Journey With Us
          </h2>

          <p className="mx-auto mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Looking for a tourist vehicle, transport service, or tour package?
            Send us your requirements and we&apos;ll help you plan your journey.
          </p>
        </div>

        {/* ========================= */}
        {/* MAIN GRID */}
        {/* ========================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-5">

          {/* ========================= */}
          {/* CONTACT INFORMATION */}
          {/* ========================= */}

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

            {/* CONTACT DETAILS */}

            <div className="mt-8 space-y-6">

              {/* Phone */}

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📞
                </div>

                <div>
                  <h4 className="font-bold">Phone</h4>

                  <p className="mt-1 text-sm text-gray-300">
                    +91 97413 71523
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📧
                </div>

                <div>
                  <h4 className="font-bold">Email</h4>

                  <p className="mt-1 text-sm text-gray-300">
                    Contact us for enquiries
                  </p>
                </div>
              </div>

              {/* Location */}

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

              {/* Services */}

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

            {/* GOOGLE MAP */}

            <div className="mt-16">

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                  Find Us
                </p>

                <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  Visit RS Tourist & Transport
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                  Kageri, Koni Road, Koteshwar, Udupi, Karnataka – 576222
                </p>
              </div>

              <div className="group relative h-[320px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:h-[400px]">

                <iframe
                  src="https://www.google.com/maps?q=Kageri,+Koni+Road,+Koteshwar,+Udupi,+Karnataka+576222&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RS Tourist & Transport Location"
                  className="h-full w-full grayscale-[15%] transition duration-700 group-hover:grayscale-0"
                />

                <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl border border-white/20 bg-blue-950/90 px-4 py-3 shadow-lg backdrop-blur-md">

                  <p className="text-xs font-bold uppercase tracking-wider text-orange-300">
                    RS Tourist & Transport
                  </p>

                  <p className="mt-1 text-xs text-white/70">
                    Kageri, Koni Road, Koteshwar
                  </p>

                </div>
              </div>
            </div>

            {/* DIRECTIONS */}

            <div className="mt-5 flex justify-end">

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kageri%2C+Koni+Road%2C+Koteshwar%2C+Udupi%2C+Karnataka+576222"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
              >
                Get Directions

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

            {/* WHATSAPP PROMPT */}

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

              <p className="text-sm leading-6 text-gray-300">
                Ready to plan your journey? Fill out the booking form and
                send your requirements directly through WhatsApp.
              </p>

            </div>

          </div>

          {/* ========================= */}
          {/* BOOKING FORM */}
          {/* ========================= */}

          <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:col-span-3 lg:p-10">

            <h3 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
              Send a Booking Request
            </h3>

            <p className="mt-2 text-gray-600">
              Fill in your details and travel requirements.
            </p>

            {/* ========================= */}
            {/* YOUR SELECTION */}
            {/* ========================= */}

            {bookingData.option && (
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl text-white">
                    ✓
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                      Your Selection
                    </p>

                    <h4 className="mt-1 text-xl font-black text-blue-950">
                      {bookingData.option}
                    </h4>

                    {bookingData.service && (
                      <p className="mt-1 text-sm font-medium text-gray-600">
                        {bookingData.service}
                      </p>
                    )}

                    {bookingData.selections && (
                      <div className="mt-3">

                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          Selected
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-800">
                          {bookingData.selections}
                        </p>

                      </div>
                    )}

                  </div>

                </div>
              </div>
            )}

            {/* ========================= */}
            {/* FORM */}
            {/* ========================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* NAME */}

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

              {/* PHONE + EMAIL */}

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

              {/* SERVICE */}

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
                  value={bookingData.service}
                  onChange={(event) =>
                    setBookingData((previous) => ({
                      ...previous,
                      service: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  required
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Tour Packages">
                    Tour Packages
                  </option>

                  <option value="Local & Outstation Travel">
                    Local & Outstation Travel
                  </option>

                  <option value="Goods Vehicle Transport">
                    Goods Vehicle Transport
                  </option>

                  <option value="Family Trips">
                    Family Trips
                  </option>

                  <option value="Tourist Car">
                    Tourist Car
                  </option>

                  <option value="Tourist Bus">
                    Tourist Bus
                  </option>

                  <option value="Pickup Goods Vehicle">
                    Pickup Goods Vehicle
                  </option>

                  <option value="Lorry / Goods Transport">
                    Lorry / Goods Transport
                  </option>

                </select>

              </div>

              {/* SELECTED OPTION */}

              {bookingData.option && (
                <div>

                  <label
                    htmlFor="selected-option"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Selected Package / Option
                  </label>

                  <input
                    id="selected-option"
                    type="text"
                    value={bookingData.option}
                    readOnly
                    className="w-full rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 font-semibold text-blue-950 outline-none"
                  />

                </div>
              )}

              {/* PICKUP + DESTINATION */}

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

              {/* DATE */}

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

              {/* MESSAGE */}

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

              {/* SUBMIT */}

              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-4 font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
              >
                Send Booking Request via WhatsApp
              </button>

              <p className="text-center text-xs text-gray-500">
                Your selected package and booking details will be included
                when WhatsApp opens.
              </p>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}