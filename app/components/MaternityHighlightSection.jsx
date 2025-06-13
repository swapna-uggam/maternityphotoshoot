'use client';
import React from 'react';
import Link from 'next/link';

export default function MaternityHighlightSection() {
  return (
    <div className="w-full">
      {/* Maternity message ABOVE video */}
      <div className="w-full mt-[-50px] bg-white text-black text-center py-6 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl xl:text-4xl 2xl:text-7xl font-bold text-black mb-2">
  Celebrate Your Journey with Maternity Photography!
</h2>

        <p className="text-sm sm:text-base text-gray-700 font-medium">
          See How We Turn Moments into Everlasting Memories
        </p>
      </div>

      <section className="relative w-full h-[90vh] overflow-hidden bg-black">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/highlightvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 lg:px-20 text-white">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-pink-300 mb-2 drop-shadow-md">
            Celebrate the Beauty of Motherhood
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Timeless Maternity Photography
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl mb-6 leading-relaxed drop-shadow-md">
            Embrace your journey to motherhood with elegant and professionally crafted maternity portraits. 
            Capture the bond with the life growing within. Over 1000+ maternity sessions completed across the UK.
          </p>

          <Link
            href="/#gallery"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg text-sm sm:text-base shadow-lg transition duration-300"
          >
            ✨ View Our Maternity Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
