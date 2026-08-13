export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Business */}
          <div>
            <h2 className="text-2xl font-extrabold">
              RS{" "}
              <span className="text-orange-400">
                Tourist & Transport
              </span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-gray-300">
              Comfortable travel, reliable transport, and memorable journeys
              across India. Let us help you plan your next trip.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#home"
                className="text-gray-300 transition hover:text-orange-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-300 transition hover:text-orange-400"
              >
                About
              </a>

              <a
                href="#services"
                className="text-gray-300 transition hover:text-orange-400"
              >
                Services
              </a>

              <a
                href="#packages"
                className="text-gray-300 transition hover:text-orange-400"
              >
                Packages
              </a>

              <a
                href="#gallery"
                className="text-gray-300 transition hover:text-orange-400"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-gray-300 transition hover:text-orange-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-gray-300">
              <p>📍 Kageri, Koni Road, Koteshwar</p>
              <p>Udupi, Karnataka, India</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>📧 example@email.com</p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
            >
              Book Now
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-400 sm:flex-row sm:text-left">
          <p>
            © 2026 RS Tourist & Transport. All rights reserved.
          </p>

          <p>
            Travel comfortably. Travel confidently.
          </p>
        </div>

      </div>
    </footer>
  );
}