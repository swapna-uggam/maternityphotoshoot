// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { dbB } from '../admin/firebase/configB';
// import { collection, getDocs } from 'firebase/firestore';

// export default function PackageSection() {
//   const [packages, setPackages] = useState([]);
//   const [expandedCard, setExpandedCard] = useState(null);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       const querySnapshot = await getDocs(collection(dbB, 'packages'));
//       const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPackages(data);
//     };

//     fetchPackages();
//   }, []);

//   const toggleExpand = (id) => {
//     setExpandedCard(expandedCard === id ? null : id);
//   };

//   return (
//     <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-pink-50">
//       <div className="mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
//         <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black text-center mb-8 md:mb-12">
//           Maternity Photography Packages
//         </h2>

//         <p className="text-center text-gray-600 text-xs sm:text-base 2xl:text-3xl mt-[-30px] xl:mt-[-30px] mx-auto mb-8 md:mb-12">
//           Affordable pricing options for every need. All packages include high-resolution edited images with print release.
//         </p>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
//             {packages.map((plan, idx) => {
//               const isExpanded = expandedCard === plan.id;
//               return (
//                 <div
//                   key={idx}
//                   className={`relative flex flex-col rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-1 ${
//                     plan.popular ? 'border-2 border-pink-400' : ''
//                   } bg-white ${isExpanded ? 'scale-[1.03] z-10' : ''}`}
//                 >
//                   {plan.badge === 'most-popular' && (
//                     <div className="absolute top-3 right-0 sm:top-4 sm:right-3 lg:top-6 lg:right-4 bg-pink-600 text-white text-[10px] sm:text-xs font-semibold px-1 py-[2px] rounded-full shadow-sm z-5">
//                       ⭐ Most Popular
//                     </div>
//                   )}

//                   <div className={`${plan.color || 'bg-pink-100'} py-6 px-5 md:py-8 md:px-8`}>
//                     <h3 className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${plan.textFontColor || 'text-black'}`}>
//                       {plan.title}
//                     </h3>
//                     <div className="text-center mt-2 md:mt-4">
//                       <span className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${plan.textFontColor || 'text-black'}`}>
//                         {plan.price}
//                       </span>
//                       <span className={`text-xs md:text-base 2xl:text-lg ${plan.textFontColor ? 'text-pink-200' : 'text-gray-600'}`}>
//                         /session
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
//                     <ul className={`space-y-2 md:space-y-4 2xl:space-y-5 flex-grow transition-all duration-500 ${isExpanded ? '' : 'line-clamp-4 overflow-hidden'}`}>
//                       {(plan.features || []).map((feature, i) => (
//                         <li
//                           key={i}
//                           className={`flex items-start`}
//                         >
//                           <svg
//                             className={`w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 text-pink-500 mr-2 mt-0.5 flex-shrink-0`}
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                           <span className="text-xs text-black md:text-sm 2xl:text-base">
//                             {feature}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="mt-4 md:mt-6 flex flex-col gap-2 text-center">
//                       <button
//                         onClick={() => toggleExpand(plan.id)}
//                         className="inline-block font-bold py-2 px-4 border border-pink-300 text-pink-600 rounded-lg hover:bg-pink-100 text-xs md:text-sm"
//                       >
//                         {isExpanded ? 'Show Less' : '...Read More'}
//                       </button>
//                       <Link
//                         href="#Contact"
//                         className={`inline-block font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg transition duration-300 w-full text-xs md:text-base 2xl:text-lg ${
//                           plan.popular
//                             ? 'bg-gradient-to-br from-pink-500 to-pink-500 text-white hover:text-black hover:bg-pink-100'
//                             : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
//                         }`}
//                       >
//                         Book Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
//             <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
//               Custom Packages Available
//             </h3>
//             <p className="text-gray-600 text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
//               Have special requirements? We offer custom packages for large families, events, and commercial needs.
//             </p>
//             <div className="text-center">
//               <Link
//                 href="#Contact"
//                 className="inline-block bg-gradient-to-br from-pink-500 to-pink-400 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:text-black hover:bg-pink-100 transition duration-300 text-xs md:text-base 2xl:text-lg"
//               >
//                 Request Custom Package
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { dbB } from '../admin/firebase/configB';
// import { collection, getDocs } from 'firebase/firestore';

// export default function PackageSection() {
//   const [packages, setPackages] = useState([]);
//   const [expandedCard, setExpandedCard] = useState(null);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       const querySnapshot = await getDocs(collection(dbB, 'packages'));
//       const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPackages(data.sort((a, b) => a.priority - b.priority));
//     };

//     fetchPackages();
//   }, []);

//   const openCard = (id) => setExpandedCard(id);
//   const closeCard = () => setExpandedCard(null);

//   const selectedPlan = packages.find((plan) => plan.id === expandedCard);

//   return (
//     <section id="packages" className="py-12 bg-pink-50">
//       <div className="mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
//         <h2 className="text-3xl font-bold text-black text-center mb-6">
//           Maternity Photography Packages
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
//           {packages.map((plan) => (
//             <div
//   key={plan.id}
//   className={`relative flex flex-col justify-between rounded-xl shadow-md bg-white transition-all duration-300 border ${
//     expandedCard === plan.id
//       ? ''
//       : 'w-[90%] mx-auto min-h-[320px] sm:min-h-[350px] lg:min-h-[380px]'
//   }`}
//               style={{
//                 borderColor: plan.borderColor || '#E5E7EB',
//                 borderWidth: plan.badge ? 2 : 1,
//               }}
//             >
//               {/* Badge */}
//               {plan.badge && (
//                 <div
//                   className="absolute top-2 right-2 text-[6px] font-bold px-1 py-1 rounded-full"
//                   style={{
//                     backgroundColor: plan.badgeBackgroundColor || '#FFC107',
//                     border: `1px solid ${plan.badgeBorderColor || '#FFA500'}`,
//                     color: '#000',
//                   }}
//                 >
//                   {plan.badgeName || 'Popular'}
//                 </div>
//               )}

//               {/* Header */}
//               <div className="p-3 text-center">
//                 <h3 className="text-lg font-bold" style={{ color: plan.textFontColor || '#000' }}>
//                   {plan.title}
//                 </h3>
//                 {plan.tag && <p className="text-xs text-pink-500 mt-1">{plan.tag}</p>}
//                 <p className="text-2xl font-extrabold mt-1" style={{ color: plan.textFontColor || '#000' }}>
//                   {plan.price}
//                 </p>
//                 {plan.description && (
//               <p className="text-xs text-gray-600 mt-2">
//                 {plan.description}
//                </p>
//                 )}

//               </div>

//               {/* Features Preview */}
//               <div className="px-3 pb-2">
//                 <Section title="Features" items={plan.features} isExpanded={false} />
//               </div>

//               {/* Footer */}
//               <div className="flex flex-col gap-2 items-center mt-auto px-3 pb-4">
//                 <button
//                   onClick={() => openCard(plan.id)}
//                   className="text-blue-600 text-xs underline self-end"
//                 >
//                   ...Read More
//                 </button>
//                 <Link
//                   href="#Contact"
//                   className="w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal Dialog for Expanded Card */}
//         {expandedCard && selectedPlan && (
//           <div className="fixed inset-0 bg-white/85 bg-opacity-50 z-50 flex items-center justify-center px-4">
//             <div className="bg-white max-w-md w-full rounded-xl shadow-xl relative p-6 max-h-[90vh] overflow-y-auto">
//               <button
//                 onClick={closeCard}
//                 className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
//               >
//                 &times;
//               </button>

//               {/* Modal Header */}
//               <div className="text-center mb-4">
//                 <h3 className="text-xl font-bold" style={{ color: selectedPlan.textFontColor || '#000' }}>
//                   {selectedPlan.title}
//                 </h3>
//                 <p className="text-2xl font-extrabold mt-1" style={{ color: selectedPlan.textFontColor || '#000' }}>
//                   ${selectedPlan.price}
//                 </p>
//                 {selectedPlan.tag && <p className="text-xs text-gray-500 mt-1">{selectedPlan.tag}</p>}
//               </div>

//               {/* Modal Features */}
//               <div className="mb-2">
//                 <Section title="Features" items={selectedPlan.features} isExpanded={true} />
//                 <Section title="Camera Gear" items={selectedPlan.gear} isExpanded={true} />
//                 <Section title="Deliverables" items={selectedPlan.deliverables} isExpanded={true} />
//               </div>

//               <Link
//                 href="#Contact"
//                 onClick={closeCard}
//                 className="block w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm mt-4"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function Section({ title, items, isExpanded }) {
//   if (!items || !Array.isArray(items)) return null;
//   const itemsToShow = isExpanded ? items : items.slice(0, 5);

//   return (
//     <div className="mb-3">
//       <h4 className="text-xs font-semibold mb-1">{title}</h4>
//       <ul className="list-disc ml-5 text-xs text-gray-800 space-y-1">
//         {itemsToShow.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { dbB } from '../admin/firebase/configB';
import { collection, getDocs } from 'firebase/firestore';

export default function PackageSection() {
  const [packages, setPackages] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    const fetchPackages = async () => {
      const querySnapshot = await getDocs(collection(dbB, 'packages'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(data.sort((a, b) => a.priority - b.priority));
    };

    fetchPackages();
  }, []);

  const openCard = (id) => setExpandedCard(id);
  const closeCard = () => setExpandedCard(null);
  const selectedPlan = packages.find((plan) => plan.id === expandedCard);

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCard();
      }
    };

    if (expandedCard) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [expandedCard]);

  return (
    <section id="packages" className="py-12 bg-pink-50">
      <div className="mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
        <h2 className="lg:text-3xl mt-[-20px] text-xl font-bold text-black text-center mb-6">
          Maternity Photography Packages
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packages.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col justify-between rounded-xl shadow-md bg-white border border-gray-200 transition-transform duration-200 cursor-pointer hover:shadow-lg h-[420px]"
              onClick={() => openCard(plan.id)}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute top-2 right-2 lg:text-[8px] text-[6px] font-bold px-1 py-1 rounded-full"
                  style={{
                    backgroundColor: plan.badgeBackgroundColor || '#FFC107',
                    border: `1px solid ${plan.badgeBorderColor || '#FFA500'}`,
                    color: '#000',
                  }}
                >
                  {plan.badgeName || 'Popular'}
                </div>
              )}

              {/* Header */}
              <div className="p-3 text-center">
                <h3 className="lg:text-lg text-sm font-bold" style={{ color: plan.textFontColor || '#000' }}>
                  {plan.title}
                </h3>
                {plan.tag && (
                  <p className="lg:text-xs text:xs text-pink-500 mt-1">{plan.tag}</p>
                )}
                <p className="lg:text-2xl text:lg font-extrabold mt-1" style={{ color: plan.textFontColor || '#000' }}>
                  {plan.price}
                </p>
                {plan.description && (
                  <p className="lg:text-xs text:xs text-gray-600 mt-2 line-clamp-3">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Features Preview */}
              <div className="px-3 pb-2 text-xs">
                <Section title="Features" items={plan.features} isExpanded={false} />
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-2 items-center mt-auto px-3 pb-4">
                <span className="text-blue-600 text-xs underline self-end">
                  ...Read More
                </span>
                <Link
                  href="#Contact"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {expandedCard && selectedPlan && (
          <div className="fixed inset-0 bg-white/80 bg-opacity-30 z-50 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="bg-white max-w-md w-full rounded-xl shadow-xl relative p-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeCard}
                className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
              >
                &times;
              </button>

              {/* Modal Header */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold" style={{ color: selectedPlan.textFontColor || '#000' }}>
                  {selectedPlan.title}
                </h3>
                <p className="lg:text-2xl text-[14px] font-extrabold mt-1" style={{ color: selectedPlan.textFontColor || '#000' }}>
                  {selectedPlan.price}
                </p>
                {selectedPlan.description && (
                  <p className="text-sm text-gray-600 mt-2">{selectedPlan.description}</p>
                )}
                {selectedPlan.tag && <p className="text-xs text-gray-500 mt-1">{selectedPlan.tag}</p>}
              </div>

              {/* Modal Features */}
              <div className="mb-2 text-xs lg:text:lg">
                <Section title="Features" items={selectedPlan.features} isExpanded={true} />
                <Section title="Camera Gear" items={selectedPlan.gear} isExpanded={true} />
                <Section title="Deliverables" items={selectedPlan.deliverables} isExpanded={true} />
              </div>

              <Link
                href="#Contact"
                onClick={closeCard}
                className="block w-full text-center font-bold py-2 px-4 rounded-lg bg-pink-500 text-white hover:bg-pink-200 hover:text-black lg:text-sm text-xs mt-4"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Section({ title, items, isExpanded }) {
  if (!items || !Array.isArray(items)) return null;
  const itemsToShow = isExpanded ? items : items.slice(0, 5);

  return (
    <div className="mb-3">
      <h4 className="text-xs font-semibold mb-1">{title}</h4>
      <ul className="list-disc ml-5 text-xs text-gray-800 space-y-1">
        {itemsToShow.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
