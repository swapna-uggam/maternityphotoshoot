
'use client';

import { useState, useRef } from 'react';
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
  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef(null);

  const handleToggle = () => {
    if (showAll && galleryRef.current) {
      // Scroll to top of gallery section smoothly
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 3);

  return (
    <section id="gallery" ref={galleryRef} className="bg-white py-10 px-3 sm:px-6 md:mt-[-20px] md:py-10">
      <div className="max-w-5xl mx-auto mt-[-65px] md:mt-[-30px] text-center mb-10">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-7xl font-bold text-gray-900 mb-3">
          Maternity Photography Gallery
        </h2>
        <p className="text-xs sm:text-base 2xl:text-4xl text-gray-600">
          Browse our collection of beautiful maternity photoshoots
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
        {visibleItems.map((item) => (
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
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button onClick={handleToggle}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-300 text-sm sm:text-base">
          {showAll ? '← View Less' : '→ View More'}
        </button>
      </div>
    </section>
  );
}
