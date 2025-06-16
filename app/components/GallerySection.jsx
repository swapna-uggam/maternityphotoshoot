// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Howl } from 'howler';

// const flipSound = new Howl({
//   src: ['/flip.mp3'],
//   volume: 0.3,
// });

// const galleryItems = [
//   { id: 1, title: 'Vintage Maternity Shoot', img: '/pinvintage.jpg', alt: 'Vintage style maternity photoshoot' },
//   { id: 2, title: 'Beach Maternity', img: '/pinbeach.jpg', alt: 'Beach maternity photoshoot' },
//   { id: 3, title: 'Traditional Saree', img: '/pintraditional.jpg', alt: 'Traditional saree maternity photoshoot' },
//   { id: 4, title: 'Couple Session', img: '/pincouple.jpg', alt: 'Couple maternity photoshoot' },
//   { id: 5, title: 'Black & White', img: '/pinblack.jpg', alt: 'Black and white maternity photos' },
//   { id: 6, title: 'Outdoor Natural', img: '/pinhero1.jpg', alt: 'Outdoor natural light maternity shoot' },
//   { id: 7, title: 'Studio Glamour', img: '/pinstudio.jpg', alt: 'Studio maternity photography' },
//   { id: 8, title: 'Family Inclusion', img: '/pinfamily.jpg', alt: 'Family maternity photoshoot' },
//   { id: 9, title: 'Seasonal Theme', img: '/pintheme.jpg', alt: 'Seasonal themed maternity shoot' },
// ];

// export default function GallerySection() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const intervalRef = useRef(null);

//   const nextPage = () => {
//     flipSound.play();
//     setPageIndex((prev) => (prev + 2) % galleryItems.length);
//   };

//   const prevPage = () => {
//     flipSound.play();
//     setPageIndex((prev) => (prev - 2 + galleryItems.length) % galleryItems.length);
//   };

//   const togglePlay = () => setIsPlaying((prev) => !prev);

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(nextPage, 4000);
//     } else {
//       clearInterval(intervalRef.current);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying]);

//   const leftPage = galleryItems[pageIndex];
//   const rightPage = galleryItems[(pageIndex + 1) % galleryItems.length];

//   return (
//     <section className="bg-white py-12 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-900">Maternity Album</h2>
//         <p className="text-gray-600">Flip through memories like a book 📖</p>
//       </div>

//       <div className="flex justify-center items-stretch gap-2 md:gap-6 max-w-5xl mx-auto relative">
//         <AnimatePresence key={leftPage.id}>
//           <motion.div
//             key={leftPage.id}
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             exit={{ rotateY: -90, opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative w-[45%] aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-xl"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextPage();
//               if (info.offset.x > 50) prevPage();
//             }}
//           >
//             <Image src={leftPage.img} alt={leftPage.alt} fill className="object-cover" />
//             <div className="absolute bottom-0 bg-black/50 text-white w-full p-2 text-center text-xs md:text-sm">
//               {leftPage.title}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="w-[2px] bg-gradient-to-b from-gray-300 to-gray-500 shadow-inner rounded-full" />

//         <AnimatePresence key={rightPage.id}>
//           <motion.div
//             key={rightPage.id}
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             exit={{ rotateY: -90, opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative w-[45%] aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-xl"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextPage();
//               if (info.offset.x > 50) prevPage();
//             }}
//           >
//             <Image src={rightPage.img} alt={rightPage.alt} fill className="object-cover" />
//             <div className="absolute bottom-0 bg-black/50 text-white w-full p-2 text-center text-xs md:text-sm">
//               {rightPage.title}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="mt-6 text-center space-x-4">
//         <button
//           onClick={prevPage}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
//         >
//           ← Previous
//         </button>
//         <button
//           onClick={togglePlay}
//           className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded"
//         >
//           {isPlaying ? 'Pause ⏸' : 'Play ▶️'}
//         </button>
//         <button
//           onClick={nextPage}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
//         >
//           Next →
//         </button>
//       </div>
//     </section>
//   );
// }



'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';

const flipSound = new Howl({
  src: ['/flip.mp3'],
  volume: 0.3,
});

const galleryItems = [
  { id: 1, title: 'Vintage Maternity Shoot', img: '/pinvintage.jpg', alt: 'Vintage style maternity photoshoot' },
  { id: 2, title: 'Beach Maternity', img: '/pinbeach.jpg', alt: 'Beach maternity photoshoot' },
  { id: 3, title: 'Traditional Saree', img: '/pintraditional.jpg', alt: 'Traditional saree maternity photoshoot' },
  { id: 4, title: 'Couple Session', img: '/pincouple.jpg', alt: 'Couple maternity photoshoot' },
  { id: 5, title: 'Black & White', img: '/pinblack.jpg', alt: 'Black and white maternity photos' },
  { id: 6, title: 'Outdoor Natural', img: '/pinhero1.jpg', alt: 'Outdoor natural light maternity shoot' },
  { id: 7, title: 'Studio Glamour', img: '/pinstudio.jpg', alt: 'Studio maternity photography' },
  { id: 8, title: 'Family Inclusion', img: '/pinfamily.jpg', alt: 'Family maternity photoshoot' },
  { id: 9, title: 'Seasonal Theme', img: '/pintheme.jpg', alt: 'Seasonal themed maternity shoot' },
];

export default function GallerySection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const nextPage = () => {
    flipSound.play();
    setPageIndex((prev) => (prev + 2) % galleryItems.length);
  };

  const prevPage = () => {
    flipSound.play();
    setPageIndex((prev) => (prev - 2 + galleryItems.length) % galleryItems.length);
  };

  const togglePlay = () => setIsPlaying((prev) => !prev);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextPage, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const leftPage = galleryItems[pageIndex];
  const rightPage = galleryItems[(pageIndex + 1) % galleryItems.length];

  const polaroidStyles = "bg-white p-2 pb-6 border border-gray-200 shadow-2xl rounded-sm transform transition-all";

  return (
    <section id="gallery" className="bg-gray-50 py-8 px-4">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">Maternity Gallery Album</h2>
        <p className="text-gray-600 mb-12 text-xs sm:text-base 2xl:text-3xl">Flip through memories like a real photo album 📸</p>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-10 max-w-6xl mx-auto">
        <AnimatePresence key={leftPage.id}>
          <motion.div
            key={leftPage.id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) nextPage();
              if (info.offset.x > 50) prevPage();
            }}
            className={`${polaroidStyles} w-[40%] aspect-[3/4] rotate-[-3deg]`}
          >
            <div className="relative w-full h-full">
              <Image src={leftPage.img} alt={leftPage.alt} fill className="object-cover rounded-sm" />
            </div>
            <p className="text-center text-xs mt-2">{leftPage.title}</p>
          </motion.div>
        </AnimatePresence>

        <div className="w-[1px] bg-gray-400 h-[90%] shadow-inner" />

        <AnimatePresence key={rightPage.id}>
          <motion.div
            key={rightPage.id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) nextPage();
              if (info.offset.x > 50) prevPage();
            }}
            className={`${polaroidStyles} w-[40%] aspect-[3/4] rotate-[3deg]`}
          >
            <div className="relative w-full h-full">
              <Image src={rightPage.img} alt={rightPage.alt} fill className="object-cover rounded-sm" />
            </div>
            <p className="text-center text-xs mt-2">{rightPage.title}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center space-x-4">
        <button
          onClick={prevPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
        >
          ← Previous
        </button>
        <button
          onClick={togglePlay}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded"
        >
          {isPlaying ? 'Pause ⏸' : 'Play ▶️'}
        </button>
        <button
          onClick={nextPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium mt-2 py-2 px-4 rounded"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
