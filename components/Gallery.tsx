import Image from "next/image";

const galleryImages = [
  {
    title: "Tourist Cars",
    image: "/images/tourist-car.png",
  },
  {
    title: "Tourist Buses",
    image: "/images/tourist-bus.png",
  },
  {
    title: "Goods Vehicle Transport",
    image: "/images/pickup.png",
  },
  {
    title: "Lorry Transport",
    image: "/images/lorry.png",
  },
  {
    title: "Family Trips",
    image: "/images/family.png",
  },
  {
    title: "Travel Destinations",
    image: "/images/travel-Destination.png",
  },
  {
    title: "Tourist Attractions",
    image: "/images/tourist-Attraction.png",
  },
  {
    title: "Beautiful Journeys",
    image: "/images/beautiful-Journeys.png",
  },
  {
    title: "Explore India",
    image: "/images/explore-india.png",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Explore Our Journeys
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl md:text-5xl">
            Our Gallery
          </h2>

          <p className="mx-auto mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Explore our tourist vehicles, goods transport services,
            destinations, attractions, and memorable family journeys.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />

              {/* Image Title */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-left text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}