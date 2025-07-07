'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { name: "Aarav S.", image: "/review1.jpg", rating: 5, text: "Absolutely loved the shoot, highly recommended!" },
  { name: "Meera K.", image: "/review2.jpg", rating: 5, text: "Captured precious moments perfectly. Thank you!" },
  { name: "Rohit B.", image: "/review3.jpg", rating: 4, text: "Professional, friendly and super creative!" },
  { name: "Nisha D.", image: "/review4.jpg", rating: 5, text: "Such beautiful photos! Great experience." },
  { name: "Karan L.", image: "/review5.jpg", rating: 4, text: "Outstanding service and fantastic pictures." },
  { name: "Priya M.", image: "/review6.jpg", rating: 5, text: "Made me feel very comfortable during shoot." },
  { name: "Sahil T.", image: "/review7.jpg", rating: 5, text: "Pictures came out way better than expected!" },
  { name: "Anjali R.", image: "/review8.jpg", rating: 4, text: "Amazing results! Memories preserved forever." },
  { name: "Divya J.", image: "/review9.jpg", rating: 5, text: "Super smooth experience and beautiful photos!" },
];

// Images for stacked clients on the left
const stackedImages = [
  "/review1.jpg",
  "/review2.jpg",
  "/review3.jpg",
  "/review4.jpg",
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { name, rating, text } = reviews[index]; // removed image here since we don't use it

  return (
    <section className="py-12 bg-gray-50 max-w-6xl mx-auto px-4">
   {  /* <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">What Our Clients Say</h2>*/}

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT: 10,000+ Reviews and Stacked Circles */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative flex -space-x-5 mb-4">
            {stackedImages.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="w-14 h-14 rounded-full border-2 border-white overflow-hidden cursor-pointer bg-white shadow-md"
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

          <div>
            <p className="text-4xl font-extrabold text-pink-600 mb-1">10,000+</p>
            <p className="text-lg font-semibold text-gray-700 mb-2">Reviews</p>
            <p className="text-gray-700 text-sm">
              Happy Clients with <span className="font-bold text-pink-600">4.7 out of 5</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Smaller Animated Review Card WITHOUT IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full flex flex-col items-start space-y-3"
          >
            <div className="text-yellow-400 text-lg">
              {"⭐".repeat(rating)}
            </div>
            <p className="text-gray-700 italic text-base leading-relaxed">&quot;{text}&quot;</p>
            <p className="font-semibold text-gray-900 text-sm">— {name}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
