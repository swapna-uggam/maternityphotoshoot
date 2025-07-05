

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Howl } from 'howler';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../admin/firebase/config'; // ✅ Update path if necessary

// const flipSound = new Howl({
//   src: ['/flip.mp3'],
//   volume: 0.3,
// });

// export default function GallerySection() {
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [pageIndex, setPageIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const intervalRef = useRef(null);

//   // ✅ Fetch gallery data from Firebase
//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'galleryImages'));
//         const items = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             img: data.url, // ✅ map url to img
//             alt: `Gallery image`,
//             priority: data.priority || 0,
//           };
//         });

//         // Optional: sort by priority
//         items.sort((a, b) => a.priority - b.priority);

//         setGalleryItems(items);
//       } catch (err) {
//         console.error('Error fetching gallery:', err);
//       }
//     };

//     fetchGallery();
//   }, []);

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
//     if (isPlaying && galleryItems.length > 0) {
//       intervalRef.current = setInterval(nextPage, 4000);
//     } else {
//       clearInterval(intervalRef.current);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying, galleryItems]);

//   if (galleryItems.length === 0) {
//     return (
//       <section id="gallery" className="bg-gray-50 py-12 text-center">
//         <p className="text-gray-500">Loading gallery...</p>
//       </section>
//     );
//   }

//   const leftPage = galleryItems[pageIndex];
//   const rightPage = galleryItems[(pageIndex + 1) % galleryItems.length];

//   const polaroidStyles =
//     'bg-white p-2 pb-6 border border-gray-200 shadow-2xl rounded-sm transform transition-all';

//   return (
//     <section id="gallery" className="bg-gray-50 py-8 px-4">
//       <div className="text-center mb-10">
//         <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">
//           Maternity Gallery Album
//         </h2>
//         <p className="text-gray-600 mb-12 text-xs sm:text-base 2xl:text-3xl">
//           Flip through memories like a real photo album 📸
//         </p>
//       </div>

//       <div className="flex justify-center items-center gap-4 md:gap-10 max-w-6xl mx-auto">
//         {/* Left Page */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={leftPage.id}
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             exit={{ rotateY: -90, opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextPage();
//               if (info.offset.x > 50) prevPage();
//             }}
//             className={`${polaroidStyles} w-[40%] aspect-[3/4] rotate-[-3deg]`}
//           >
//             <div className="relative w-full h-full">
//               {leftPage.img && (
//                 <Image
//                   src={leftPage.img}
//                   alt={leftPage.alt}
//                   fill
//                   className="object-cover rounded-sm"
//                 />
//               )}
//             </div>
//             <p className="text-center text-xs mt-2">{leftPage.alt}</p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="w-[1px] bg-gray-400 h-[90%] shadow-inner" />

//         {/* Right Page */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={rightPage.id}
//             initial={{ rotateY: 90, opacity: 0 }}
//             animate={{ rotateY: 0, opacity: 1 }}
//             exit={{ rotateY: -90, opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextPage();
//               if (info.offset.x > 50) prevPage();
//             }}
//             className={`${polaroidStyles} w-[40%] aspect-[3/4] rotate-[3deg]`}
//           >
//             <div className="relative w-full h-full">
//               {rightPage.img && (
//                 <Image
//                   src={rightPage.img}
//                   alt={rightPage.alt}
//                   fill
//                   className="object-cover rounded-sm"
//                 />
//               )}
//             </div>
//             <p className="text-center text-xs mt-2">{rightPage.alt}</p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="mt-8 text-center space-x-4">
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
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium mt-2 py-2 px-4 rounded"
//         >
//           Next →
//         </button>
//       </div>
//     </section>
//   );
// }


//Lint error above code





'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../admin/firebase/config'; // ✅ Update path if necessary

const flipSound = new Howl({
  src: ['/flip.mp3'],
  volume: 0.3,
});

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  // ✅ Fetch gallery data from Firebase
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'galleryImages'));
        const items = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            img: data.url,
            alt: `Gallery image`,
            priority: data.priority || 0,
          };
        });

        items.sort((a, b) => a.priority - b.priority);
        setGalleryItems(items);
      } catch (err) {
        console.error('Error fetching gallery:', err);
      }
    };

    fetchGallery();
  }, []);

  // ✅ Memoized handlers to satisfy useEffect deps
  const nextPage = useCallback(() => {
    flipSound.play();
    setPageIndex((prev) => (prev + 2) % galleryItems.length);
  }, [galleryItems.length]);

  const prevPage = useCallback(() => {
    flipSound.play();
    setPageIndex((prev) => (prev - 2 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  // ✅ Use effect with correct dependencies
  useEffect(() => {
    if (isPlaying && galleryItems.length > 0) {
      intervalRef.current = setInterval(nextPage, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, galleryItems, nextPage]);

  if (galleryItems.length === 0) {
    return (
      <section id="gallery" className="bg-gray-50 py-12 text-center">
        <p className="text-gray-500">Loading gallery...</p>
      </section>
    );
  }

  const leftPage = galleryItems[pageIndex];
  const rightPage = galleryItems[(pageIndex + 1) % galleryItems.length];

  const polaroidStyles =
    'bg-white p-2 pb-6 border border-gray-200 shadow-2xl rounded-sm transform transition-all';

  return (
    <section id="gallery" className="bg-gray-50 py-8 px-4">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">
          Maternity Gallery Album
        </h2>
        <p className="text-gray-600 mb-12 text-xs sm:text-base 2xl:text-3xl">
          Flip through memories like a real photo album 📸
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 md:gap-10 max-w-6xl mx-auto">
        {/* Left Page */}
        <AnimatePresence mode="wait">
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
              {leftPage.img && (
                <Image
                  src={leftPage.img}
                  alt={leftPage.alt}
                  fill
                  className="object-cover rounded-sm"
                />
              )}
            </div>
            <p className="text-center text-xs mt-2">{leftPage.alt}</p>
          </motion.div>
        </AnimatePresence>

        <div className="w-[1px] bg-gray-400 h-[90%] shadow-inner" />

        {/* Right Page */}
        <AnimatePresence mode="wait">
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
              {rightPage.img && (
                <Image
                  src={rightPage.img}
                  alt={rightPage.alt}
                  fill
                  className="object-cover rounded-sm"
                />
              )}
            </div>
            <p className="text-center text-xs mt-2">{rightPage.alt}</p>
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
