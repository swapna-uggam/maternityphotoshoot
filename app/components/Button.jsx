// 'use client';
// import { useEffect, useState } from "react";
// import { FaArrowCircleUp, FaRegSmileBeam } from "react-icons/fa";

// export default function Button() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 300);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={scrollToTop}
//             className={`flex flex-col items-center justify-center bg-white text-[rgb(136,0,0)] rounded-full p-4 shadow-xl border-4 border-[rgb(136,0,0)] transition-transform duration-300 ${
//               isAnimating ? "translate-y-[-10px]" : ""
//             }`}
//             aria-label="Scroll to top"
//           >
//             <FaArrowCircleUp className="mb-1" />
//             <FaRegSmileBeam size={24} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// 'use client';
// import { useEffect, useState } from "react";
// import { FaChevronUp, FaHeart } from "react-icons/fa";

// export default function Button() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 300);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={scrollToTop}
//             className={`flex flex-col items-center justify-center 
//               bg-gradient-to-br from-pink-500 to-purple-600 
//               text-white rounded-full p-4 shadow-lg ring-4 ring-pink-300 
//               transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
//                 isAnimating ? "translate-y-[-10px]" : ""
//               }`}
//             aria-label="Scroll to top"
//           >
//             <FaChevronUp className="mb-1 text-xl" />
//             <FaHeart className="text-2xl" />
//           </button>
//         </div>
//       )}
//     </>
//   );
// 'use client';
// import { useEffect, useState } from "react";
// import { FaHome } from "react-icons/fa";

// export default function Button() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 300);
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="fixed bottom-4 right-4 z-50">
//           <button
//             onClick={scrollToTop}
//             className={`flex items-center justify-center 
//               bg-gradient-to-br from-blue-500 to-pink-500 
//               text-white rounded-full p-3 shadow-lg border border-white
//               transition-all duration-300 hover:rotate-12 hover:scale-110 ${
//                 isAnimating ? "translate-y-[-6px]" : ""
//               }`}
//             aria-label="Scroll to top"
//           >
//             <FaHome className="text-xl" />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
'use client';
import { useEffect, useState } from "react";
import { FaChevronUp, FaHome } from "react-icons/fa";

export default function Button() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className={`flex flex-col items-center justify-center 
              bg-blue-500 
              text-white rounded-full p-3 shadow-lg border border-white
              transition-all duration-300 hover:rotate-12 hover:scale-105 ${
                isAnimating ? "translate-y-[-6px]" : ""
              }`}
            aria-label="Scroll to top"
          >
            <FaChevronUp className="text-sm mb-0.5" />
            <FaHome className="text-lg" />
          </button>
        </div>
      )}
    </>
  );
}
