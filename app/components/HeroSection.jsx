
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['/pinhero4.jpg', '/pin7.jpg', '/pinhero2.jpg'];
const languages = [
  { text: 'Journey with Beautiful Maternity photoshoot' },
  { text: 'ప్రెగ్నెన్సీ అందాలను ఫోటోషూట్ ద్వారా అందించండి' },
  { text: 'அழகான கர்ப்பத்துடன் பயணம் ஃபோட்டோஷூட்' },
  { text: 'ಸುಂದರ ಗರ್ಭಧಾರಣೆಯೊಂದಿಗೆ ಪ್ರಯಾಣ ಫೋಟೋಶೂಟ್' },
  { text: 'സുന്ദരമായ ഗര്‍ഭധാരണയുമായി യാത്ര ഫോട്ടോഷൂട്ട്' },
];
const reviews = [
  { name: "Aarav S.", image: "/studio.jpg", rating: 5, text: "Absolutely loved the shoot, highly recommended!" },
  { name: "Meera K.", image: "/pinhero1.jpg", rating: 5, text: "Captured precious moments perfectly. Thank you!" },
  { name: "Rohit B.", image: "/pinhero6.jpg", rating: 4, text: "Professional, friendly and super creative!" },
  { name: "Nisha D.", image: "/pin6.jpg", rating: 5, text: "Such beautiful photos! Great experience." },
];
const stackedImages = ["/studio.jpg", "/pinhero1.jpg", "/pinhero6.jpg", "/pin6.jpg"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentLang, setCurrentLang] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    const interval2 = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length);
    }, 4000);
    const interval3 = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const { name, rating, text } = reviews[currentReview];

  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative w-full md:min-h-screen h-auto min-h-[35vh] sm:min-h-[70vh]">
       {/* Background */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="relative w-full h-[40vh] sm:h-[70vh] md:h-full">
    <Image
      src={images[currentImage]}
      alt="Background"
      fill
      priority
      quality={100}
      className="object-cover transition-opacity duration-1000 ease-in-out"
      sizes="100vw"
    />
    {/* Transparent black overlay with 40% opacity */}
    <div className="absolute inset-0 bg-black/20" />
  </div>
</div>



        {/* Main Content */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-screen overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40  md:py-20 text-white">
          
          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight">
              Capture Your Pregnancy
            </h1>

            <div className="min-h-[3rem] md:min-h-[4rem]">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {languages[currentLang].text}
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg max-w-lg">
              Professional maternity photoshoots across the UK – London, West Midlands, South East, and more.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
              <Link
                href="/#Contact"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg shadow text-xs sm:text-sm md:text-base transition-colors duration-300"
              >
                Book Your Session
              </Link>
              <Link
                href="/#gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-500 font-bold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg shadow text-xs sm:text-sm md:text-base transition-colors duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* RIGHT */}
<div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-0">
  {/* Overlapping Images + Review card container */}
  <div className="flex flex-col md:flex-col md:items-end gap-4 sm:gap-6 md:gap-8 w-full mt-6 sm:mt-8 md:mt-0">
    
    {/* Overlapping Images + Text */}
    <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4 md:gap-6">
      <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
        {stackedImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-md cursor-pointer"
            style={{ zIndex: stackedImages.length - i }}
          >
            <Image
              src={src}
              alt={`Client ${i + 1}`}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
        <p className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl text-pink-400">1000+ Reviews</p>
        <p className="text-xs sm:text-sm">
          Happy Clients with <span className="font-bold text-pink-400">4.7 out of 5</span>
        </p>
      </div>
    </div>

    {/* Review Card */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentReview}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 rounded-lg shadow-lg p-2 sm:p-3 md:p-4 w-full max-w-[180px] sm:max-w-xs md:max-w-sm self-center md:self-end"
      >
        <div className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
          {"⭐".repeat(rating)}
        </div>
        <p className="italic text-xs sm:text-sm md:text-base mb-1 sm:mb-2">"{text}"</p>
        <p className="font-semibold text-xs sm:text-sm md:text-base">— {name}</p>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
