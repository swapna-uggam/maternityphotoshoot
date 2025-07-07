'use client';
import React from 'react';
export default function MaternityPricingJustification() {
  const items = [
    {
      icon: '🌸',
      title: 'Professional Operation',
      desc: 'I run a full-time maternity photography business with an all-female UK team, offering consistent care emotional depth.',
    },
    {
      icon: '🎀',
      title: 'Comprehensive Service',
      desc: 'Packages include travel, props, outfits, and editing. From garden shoots to cozy indoors—we cover all details.',
    },
    {
      icon: '⚡',
      title: 'Fast Turnaround',
      desc: 'Get fully retouched maternity photos in just days. We deliver faster than most UK photographers, without compromise.',
    },
    {
      icon: '📸',
      title: 'Quality Investment',
      desc: 'High-end cameras, creative lighting, and cinematic editing deliver stunning, luxurious memories.',
    },
    {
      icon: '🔒',
      title: 'Peace of Mind',
      desc: 'We protect your data and images with GDPR compliance and lifelong access to your private gallery.',
    },
    {
      icon: '💝',
      title: 'Exceptional Value',
      desc: 'Our services offer not just breathtaking photos but unmatched professionalism and support for every mom-to-be.',
    },
  ];

  return (
    <section className="bg-white relative pt-15 pb-15 px-4 sm:px-8 lg:px-24 text-gray-800">
      <div className="max-w-full mx-full">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="mt-[-45px] text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black drop-shadow-lg">
  Why My Prices Are Justified
</h2>

          <p className="mt-4 text-xs sm:text-base 2xl:text-3xl text-black-700 max-w-2xl mx-auto">
            You&quot;re not just paying for photos—you&quot;re investing in a warm, professional, and seamless maternity photography experience available across the UK.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-6 lg:grid-cols-3 gap-10 gap-x-4 sm:gap-x-4 gap-y-10 2xl:gap-68  place-items-center">
          {items.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="group bg-white border border-pink-100 rounded-full shadow-md w-37 h-37 sm:w-44 sm:h-44 lg:w-64 lg:h-64 p-4 flex flex-col items-center text-center relative transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Emoji Icon Circle with bounce */}
              <div className="absolute -top-6 flex justify-center w-full">
                <div className="bg-pink-100 rounded-full w-10 h-10 flex items-center justify-center text-3xl sm:text-3xl shadow-md ring-1 ring-pink-300 transition-transform duration-300 group-hover:animate-bounce">
                  {icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-10 flex flex-col justify-center flex-grow ">
                <h3 className="text-[10px] sm:text-base font-semibold text-blue-500 mb-1 mt-[-12px]">{title}</h3>
                <p className="text-[9px] md:text-[8px] sm:text-xs md:mt-[-1px]  lg:mt-[10px] lg:text-sm text-gray-600 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
