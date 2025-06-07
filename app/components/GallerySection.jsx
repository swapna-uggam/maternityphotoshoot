
'use client';

import Image from 'next/image';

const galleryItems = [
  { id: 1, title: "Vintage Maternity Shoot", img: "/pinvintage.jpg", alt: "Vintage style maternity photoshoot" },
  { id: 2, title: "Beach Maternity", img: "/pinbeach.jpg", alt: "Beach maternity photoshoot" },
  { id: 3, title: "Traditional Saree", img: "/pintraditional.jpg", alt: "Traditional saree maternity photoshoot" },
  { id: 4, title: "Couple Session", img: "/pincouple.jpg", alt: "Couple maternity photoshoot" },
  { id: 5, title: "Black & White", img: "/pinblack.jpg", alt: "Black and white maternity photos" },
  { id: 6, title: "Outdoor Natural", img: "/pinhero1.jpg", alt: "Outdoor natural light maternity shoot" },
  { id: 7, title: "Studio Glamour", img: "/pinstudio.jpg", alt: "Studio maternity photography" },
  { id: 8, title: "Family Inclusion", img: "/pinfamily.jpg", alt: "Family maternity photoshoot" },
  { id: 9, title: "Seasonal Theme", img: "/pintheme.jpg", alt: "Seasonal themed maternity shoot" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-10  px-3 sm:px-6 md:py-1">
      <div className="max-w-5xl mx-auto mt-[-65px] md:mt-[-30px] text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Maternity Photography Gallery
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Browse our collection of beautiful maternity photoshoots
        </p>
      </div>

      {/* Grid layout with 2 columns even on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[1/1] overflow-hidden rounded-md group bg-gray-100"
          >
            <Image
              src={item.img}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              priority
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-2 text-center">
              <h3 className="text-white text-[12px] sm:text-base font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
