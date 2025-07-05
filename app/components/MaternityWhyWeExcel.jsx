
'use client';
import React from 'react';
import { Heart, Camera, Users, Gift, Cloud, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: <Heart className="text-blue-500 w-8 h-8" />,
    title: 'Emotional Connection',
    text: 'We don’t just take photos—we capture feelings. Our sessions are designed to highlight the beautiful bond between you and your baby, preserving moments that radiate love, hope, and joy.',
  },
  {
    icon: <Camera className="text-blue-500 w-8 h-8" />,
    title: 'Pro Studio & Outdoor Shoots',
    text: 'Whether you prefer natural sunlight or a cozy studio setting, we provide tailored backdrops and styling that complement your personality, ensuring your comfort and confidence throughout.',
  },
  {
  icon: <Users className="text-blue-500 w-8 h-8" />,
  title: 'Creative Direction & Styling',
  text: 'Our team brings your vision to life with expert styling, flattering poses, and artistic guidance—making every shot uniquely you. We blend creativity and care to highlight your natural beauty and maternal glow.',
},

  {
    icon: <Gift className="text-blue-500 w-8 h-8" />,
    title: 'All-Inclusive Packages',
    text: 'We make everything hassle-free. From makeup and maternity gowns to props and travel, our transparent packages offer full value—no last-minute surprises or extra costs.',
  },
  {
    icon: <Cloud className="text-blue-500 w-8 h-8" />,
    title: 'Cloud + Album Delivery',
    text: 'Receive your memories in multiple formats: instantly view and share digital galleries, or relive your session through handcrafted albums designed to last generations.',
  },
  {
  icon: <Shield className="text-blue-500 w-8 h-8" />,
  title: 'Safe, Private & Personal',
  text: 'We honour your story with discretion and care. From the first consultation to final delivery, your images stay secure, your comfort comes first, and your journey is treated with the personal touch it deserves.',
}
,
];

// Duplicate for seamless animation
const repeated = [...features, ...features];

export default function MaternityWhyWeExcel() {
  return (
   <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-100 pt-20 sm:py-24 px-6 sm:px-12 lg:px-20 text-gray-800 overflow-hidden">
  <div className="w-full md:mb-[-70px] mx-auto">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-[-50px] font-bold bg-gradient-to-r text-black-transparent bg-clip-text drop-shadow-lg">
        Why We Excel in Maternity Photography
      </h2>
      <p className="mt-4 text-xs sm:text-base 2xl:text-3xl text-gray-600">
        💙 Trusted by 1000+ Moms to Capture Their Beautiful Journey 💙
      </p>
    </div>

    {/* Scrolling Cards */}
    <div className="overflow-hidden">
      <div className="flex w-max gap-10 animate-scroll-x">
        {repeated.map(({ icon, title, text }, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-sm h-auto bg-white/90 rounded-2xl shadow-md p-6 border border-pink-100 flex-shrink-0"
          >
            {icon}
            <h3 className="text-xl font-semibold text-black-700 mt-3 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Final Note */}
    <div className="text-center mt-4 mb-4 ">
      <Truck className="mx-auto text-pink-500 w-auto h-7 md:h-[-10px] animate-bounce" />
      <p className="text-sm text-gray-700  font-medium ">
        We deliver love-filled memories right to your doorstep—from London and everywhere in between.
      </p>
    </div>
  </div>
</section>
  );
}
