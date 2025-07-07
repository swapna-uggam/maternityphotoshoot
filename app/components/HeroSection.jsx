// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const images = ['/cha2.jpg', '/cha1.jpg', '/cha5.jpg'];
// const languages = [
//   { text: 'Cherish the Bump Journey' },
//   { text: '"ఓ కదలిక…ఓ క్లిక్…ఓ జ్ఞాపకం!"'},
//   { text: 'கர்ப்பகாலம் ஒரு அழகு பயண'},
//   { text: 'ಗರ್ಭಕಾಲದ ಸೌಂದರ್ಯದ ಪ್ರಯಾಣ'},
//   { text: 'ഗർഭസന്ദർഭം ഓർമ്മകളായി'},
// ];
// const reviews = [
//   { name: "Aarav S.", image: "/studio.jpg", rating: 5, text: "Absolutely loved the shoot, highly recommended!" },
//   { name: "Meera K.", image: "/pinhero1.jpg", rating: 5, text: "Captured precious moments perfectly. Thank you!" },
//   { name: "Rohit B.", image: "/pinhero6.jpg", rating: 4, text: "Professional, friendly and super creative!" },
//   { name: "Nisha D.", image: "/pin6.jpg", rating: 5, text: "Such beautiful photos! Great experience." },
// ];
// const stackedImages = ["/studio.jpg", "/pinhero1.jpg", "/pinhero6.jpg", "/pin6.jpg"];

// export default function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [currentLang, setCurrentLang] = useState(0);
//   const [currentReview, setCurrentReview] = useState(0);

//   useEffect(() => {
//     const interval1 = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);
//     const interval2 = setInterval(() => {
//       setCurrentLang((prev) => (prev + 1) % languages.length);
//     }, 4000);
//     const interval3 = setInterval(() => {
//       setCurrentReview((prev) => (prev + 1) % reviews.length);
//     }, 5000);

//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//       clearInterval(interval3);
//     };
//   }, []);

//   const { name, rating, text } = reviews[currentReview];

//   return (
//     <div className="w-full mt-[-10px] overflow-hidden">
//       <section className="relative w-full sm:mt-[-100px] h-screen md:mt-1 overflow-hidden">

//         {/* Background */}
//         <div className="absolute inset-0 z-0">
//           <div className="relative w-full h-full">
//             <Image
//               src={images[currentImage]}
//               alt="Background"
//               fill
//               priority
//               quality={100}
//               className="object-cover transition-opacity duration-900 ease-in-out"
//               sizes="100vw"
//             />
//             <div className="absolute inset-0 bg-black/20" />
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="absolute z-10 w-full mt-[-2px] h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 3xl:px-40 4xl:px-64 4k:px-96 text-white">

//           {/* LEFT */}
//           <div className="w-full mt-[-70px] md:w-1/2 flex flex-col justify-center h-full space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 4xl:space-y-12 4k:space-y-16 pl-5">
//             <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-5xl 2xl:text-8xl 3xl:text-7xl 4xl:text-8xl 4k:text-6xl font-extrabold drop-shadow-lg leading-tight">
//               Capture Your Bump
//             </h1>

//             <div className="min-h-[3rem] md:min-h-[4rem] 4xl:min-h-[6rem] 4k:min-h-[8rem]">
//               <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-5xl 4xl:text-6xl 4k:text-8xl font-bold drop-shadow-lg bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
//                 {languages[currentLang].text}
//               </p>
//             </div>

//             <p className="text-sm sm:text-base md:text-xm lg:text-xl 2xl:text-4xl 3xl:text-3xl 4xl:text-4xl 4k:text-6xl drop-shadow-lg max-w-3xl 4xl:max-w-6xl 4k:max-w-8xl mt-[-10px]">
//               Celebrate the beauty of maternity through professional photography that captures your glow, strength, and the miracle of new life.
//               Each photoshoot blends artistic vision with heartfelt emotion, turning your journey into timeless visual stories.
//             </p>

//             <div className="flex flex-wrap gap-3 sm:gap-3 md:gap-2 mt-[10px] md:mb-2 4xl:mt-6 4k:mt-10">
//   <Link
//     href="/#Contact"
//     className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 text-white text-xs font-bold py-2 2xl:p-6 px-2 sm:py-2.5 sm:px-4 md:py-3 md:px-3 rounded-lg shadow sm:text-sm md:text-xm 2xl:text-2xl 3xl:text-xl 4xl:text-2xl 4k:text-4xl transition-colors duration-300"
//   >
//     Book Your Session
//   </Link>
//   <Link
//     href="/#gallery"
//     className="border-2 border-white text-white hover:bg-white hover:text-pink-500 font-bold py-2 px-2  text-xs sm:py-2.5 sm:px-4 md:py-2 md:px-3 2xl:p-6 rounded-lg shadow sm:text-sm md:text-xm 2xl:text-2xl 3xl:text-xl 4xl:text-2xl 4k:text-4xl transition-colors duration-300"
//   >
//     View Gallery
//   </Link>
// </div>

//           </div>

//           {/* RIGHT */}
//           <div className="w-full md:w-1/2 flex flex-col items-center mt-[-2px] md:items-end gap-4 sm:gap-6 md:gap-8 4k:gap-12 sm:mt-8 md:mt-0">
//             <div className="flex flex-col md:items-end gap-4 mt-[-10px] sm:gap-6 md:gap-4 4k:gap-12 w-full sm:mt-8 md:mt-0">

//               {/* Overlapping Images */}
//               <div className="flex items-center mt-[-10px] justify-center 2xl:p-32 md:justify-end gap-3 sm:gap-4 md:gap-2 4k:gap-8">
//                 <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4 4k:-space-x-6">
//                   {stackedImages.map((src, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.1, zIndex: 10 }}
//                       className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:mx-[-8px] md:h-12 lg:w-14 lg:h-14 2xl:w-16 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24 4k:w-32 4k:h-32 rounded-full overflow-hidden border-2 border-white bg-white shadow-md cursor-pointer"
//                       style={{ zIndex: stackedImages.length - i }}
//                     >
//                       <Image
//                         src={src}
//                         alt={`Client ${i + 1}`}
//                         width={96}
//                         height={96}
//                         className="object-cover w-full h-full"
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//                 <div className="text-white text-xs sm:text-sm md:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 4k:text-4xl whitespace-nowrap">
//                   <p className="font-extrabold text-sm sm:text-lg md:text-lg lg:text-2xl 3xl:text-3xl 4xl:text-4xl 4k:text-6xl text-pink-500">1000+ clients</p>
//                   <p className="text-xs sm:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl 4k:text-3xl">
//                     Happy Clients with <span className="font-bold text-pink-500">4.7 out of 5</span>
//                   </p>
//                 </div>
//               </div>

//               {/* Review Card */}
//               <AnimatePresence mode="wait">
//                 <div className="shadow-xl rounded-2xl w-2/3 2xl:w-1/2 mr-5 4k:w-2/5">
//                   <motion.div
//                     key={currentReview}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -30 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-gray-800 rounded-lg p-2 sm:p-3 md:p-4 4k:p-6 w-full max-w-[180px] sm:max-w-xs md:max-w-sm 4k:max-w-xl self-center md:self-end mx-auto max-h-[160px] sm:max-h-none overflow-hidden"
//                   >
//                     <div className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 4k:text-5xl mb-1 sm:mb-2 4k:mb-4">
//                       {"⭐".repeat(rating)}
//                     </div>
//                     <p className="italic text-xs text-white sm:text-sm md:text-xm 2xl:text-lg 3xl:text-xl 4xl:text-2xl 4k:text-4xl mb-1 sm:mb-2 4k:mb-4">"{text}"</p>
//                     <p className="font-semibold text-xs text-white sm:text-sm md:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl 4k:text-4xl">— {name}</p>
//                   </motion.div>
//                 </div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../admin/firebase/config';

const languages = [
  { text: 'Cherish the Bump Journey' },
  { text: '"ఓ కదలిక…ఓ క్లిక్…ఓ జ్ఞాపకం!"' },
  { text: 'கர்ப்பகாலம் ஒரு அழகு பயண' },
  { text: 'ಗರ್ಭಕಾಲದ ಸೌಂದರ್ಯದ ಪ್ರಯಾಣ' },
  { text: 'ഗർഭസന്ദർഭം ഓർമ്മകളായി' },
];

// ✅ Stacked Static Images (unchanged)
const stackedImages = ["/studio.jpg", "/pinhero1.jpg", "/pinhero6.jpg", "/pin6.jpg"];

export default function HeroSection() {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentLang, setCurrentLang] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [reviews, setReviews] = useState([]);

  // 🔄 Fetch background images from Firestore
  useEffect(() => {
    const fetchBackgroundImages = async () => {
      const snapshot = await getDocs(collection(db, 'heroImages'));
      const urls = snapshot.docs.map((doc) => doc.data().url);
      setBackgroundImages(urls);
    };
    fetchBackgroundImages();
  }, []);

  // 🔄 Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      const snapshot = await getDocs(collection(db, 'reviews'));
      const data = snapshot.docs.map((doc) => ({
        name: doc.data().name,
        rating: doc.data().rating,
        text: doc.data().comment,
      }));
      setReviews(data);
    };
    fetchReviews();
  }, []);

  // 🔁 Cycle background image
  useEffect(() => {
    if (backgroundImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  // 🔁 Cycle languages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔁 Cycle reviews
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  const { name, rating, text } = reviews[currentReview] || {};

  return (
    <div className="w-full mt-[-10px] overflow-hidden">
      <section className="relative w-full sm:mt-[-100px] h-screen md:mt-1 overflow-hidden">

        {/* 🔳 Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {backgroundImages.length > 0 && (
              <Image
                src={backgroundImages[currentImage]}
                alt="Background"
                fill
                priority
                quality={100}
                className="object-cover transition-opacity duration-900 ease-in-out"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 3xl:px-40 4xl:px-64 4k:px-96 text-white">

          {/* LEFT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full pl-5 space-y-6">
            <h1 className="text-xl sm:text-3xl lg:text-5xl 2xl:text-8xl font-extrabold drop-shadow-lg leading-tight">
              Capture Your Bump
            </h1>

            <p className="text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl font-bold drop-shadow-lg bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              {languages[currentLang].text}
            </p>

            <p className="text-sm lg:text-xl 2xl:text-4xl drop-shadow-lg max-w-3xl">
              Celebrate the beauty of maternity through professional photography that captures your glow, strength, and the miracle of new life.
            </p>

            <div className="flex gap-3">
              <Link
                href="/#Contact"
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow"
              >
                Book Your Session
              </Link>
              <Link
                href="/#gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-500 font-bold py-2 px-4 rounded-lg shadow"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">

            {/* Stacked Images */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {stackedImages.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-md"
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
              <div className="text-white text-sm">
                <p className="font-extrabold text-pink-500">1000+ clients</p>
                <p>
                  Happy Clients with <span className="font-bold text-pink-500">4.7 out of 5</span>
                </p>
              </div>
            </div>

            {/* Review Card */}
            <AnimatePresence mode="wait">
              {name && text && (
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/20 rounded-lg p-4 max-w-sm shadow-lg"
                >
                  <div className="text-yellow-400 mb-2">{"⭐".repeat(rating)}</div>
                  <p className="italic text-white mb-1">&quot;{text}&quot;</p>
                  <p className="text-white font-semibold">— {name}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
