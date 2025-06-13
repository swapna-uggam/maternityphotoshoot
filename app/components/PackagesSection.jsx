// 'use client';

// const packages = [
//   {
//     name: 'Essential',
//     price: '£199',
//     unit: '/session',
//     features: [
//       '1 hour photoshoot',
//       '1 location',
//       '15 edited digital images',
//       'Online gallery',
//     ],
//     buttonStyle: 'bg-gray-100 hover:bg-pink-500 hover:text-white text-pink-500',
//     borderStyle: 'border border-gray-200 hover:border-pink-300',
//   },
//   {
//     name: 'Premium',
//     price: '£349',
//     unit: '/session',
//     features: [
//       '2 hour photoshoot',
//       '2 locations',
//       '30 edited digital images',
//       'Online gallery',
//       '5 printed photos (6x8")',
//       '1 framed photo (8x10")',
//     ],
//     popular: true,
//     buttonStyle: 'bg-pink-500 hover:bg-pink-600 text-white',
//     borderStyle: 'border-2 border-pink-500',
//   },
//   {
//     name: 'Luxury',
//     price: '£599',
//     unit: '/session',
//     features: [
//       '3 hour photoshoot',
//       'Unlimited locations',
//       'All edited digital images (60+)',
//       'Online gallery',
//       '10 printed photos (6x8")',
//       '2 framed photos (8x10" & 11x14")',
//       'Photo album',
//       'Maternity video (2-3 min)',
//     ],
//     buttonStyle: 'bg-gray-100 hover:bg-pink-500 hover:text-white text-pink-500',
//     borderStyle: 'border border-gray-200 hover:border-pink-300',
//   },
// ];

// export default function PackagesSection() {
//   return (
//     <section id="packages" className="py-10 mt-[-30px] md:mt-[-25px] bg-gray-50 px-4 sm:px-6 2x:text-xl">
//       <div className="max-w-full my-full mx-full">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
//             Maternity Photography Packages
//           </h2>
//           <p className="text-black text-sm max-w-md mx-auto leading-snug">
//             Affordable options to suit every expecting mother's needs and budget
//           </p>
//         </div>

//         {/* Side-by-side on mobile with tighter spacing */}
//         <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 2xl:gap-2">
//   {packages.map((pkg) => (
//     <div
//       key={pkg.name}
//       className={`bg-white p-3 sm:p-5 rounded-xl shadow-sm relative flex flex-col text-xs ${pkg.borderStyle} 2xl:p-4 2xl:max-w-[280px]`}
//     >
//       {pkg.popular && (
//         <div className="absolute top-0 right-0 bg-pink-500 text-white sm:text-[10px] text-[6px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
//           MOST POPULAR
//         </div>
//       )}

//       <h3 className="text-base sm:text-sm md:text-sm lg:text-lg font-bold text-gray-900 mb-1 text-center leading-snug">
//         {pkg.name}
//       </h3>

//       <p className="text-lg sm:text-base md:text-base lg:text-2xl font-extrabold text-pink-500 mb-3 text-center leading-none">
//         {pkg.price}
//         <span className="text-xs sm:text-[11px] md:text-sm lg:text-base text-gray-500 font-normal ml-1">
//           {pkg.unit}
//         </span>
//       </p>

//       <ul className="space-y-1 mb-3 flex-grow">
//         {pkg.features.map((feature, fIdx) => (
//           <li
//             key={fIdx}
//             className="flex items-start text-[11px] pl-10 sm:text-[12px] md:text-sm lg:text-base text-gray-700 leading-snug"
//           >
//             <svg
//               className="w-4 h-4 text-pink-500 mr-1 mt-0.5 flex-shrink-0"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>

//       <a
//         href="#contact"
//         className={`mt-auto block w-full text-center py-2 rounded-md font-semibold transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg ${pkg.buttonStyle}`}
//       >
//         Book Now
//       </a>
//     </div>
//   ))}
// </div>

//         <div className="mt-8 text-center">
//           <p className="text-gray-600 mb-2 text-xs">Don't see what you're looking for?</p>
//           <a
//             href="/contact"
//             className="inline-block border border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-4 rounded-md text-xs transition duration-300"
//           >
//             Request Custom Package
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";

export default function PackageSection() {
  return (
    <section id="packages" className="py-12 mt-[-40px] md:py-16 bg-pink-50">
      <div className="mx-auto px-4 md:px-6 2xl:max-w-[1600px]">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl 2xl:text-5xl font-bold text-black text-center mb-8 md:mb-12">
          Half Saree Photography Packages
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 text-xs md:text-base 2xl:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
          Affordable pricing options for every need. All packages include high-resolution edited images with print release.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
            {[
              {
                name: "Basic",
                price: "£199",
                popular: false,
                color: "bg-pink-100",
                features: [
                  "1 hour photoshoot",
                  "15 high-resolution edited images",
                  "1 outfit change",
                  "Studio or outdoor location",
                  "No makeup artist",
                  "No printed photos",
                ],
              },
              {
                name: "Premium",
                price: "£349",
                popular: true,
                color: "bg-gradient-to-br from-pink-500 to-pink-500",
                textColor: "text-white",
                features: [
                  "2 hour photoshoot",
                  "30 high-resolution edited images",
                  "2 outfit changes",
                  "Studio + outdoor locations",
                  "Professional makeup artist",
                  "5 printed 6x4 photos",
                ],
              },
              {
                name: "Deluxe",
                price: "£499",
                popular: false,
                color: "bg-pink-100",
                features: [
                  "3 hour photoshoot",
                  "50 high-resolution edited images",
                  "3 outfit changes",
                  "Multiple locations",
                  "Professional makeup & hair styling",
                  "10 printed photos + 1 framed 8x10",
                  "Online gallery with shareable link",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 ${
                  plan.popular ? "border-2 border-pink-400" : ""
                } bg-white`}
              >
                {/* Most Popular Label - positioned top-right inside the card */}
               {plan.popular && (
  <div className="absolute top-3 right-0 mt-[-5px] sm:top-4 sm:right-3 lg:top-6 lg:right-4 bg-pink-600 text-white text-[10px] sm:text-xs font-semibold px-1 py-[-15px] rounded-full shadow-sm z-5">
    ⭐ Most Popular
  </div>
)}


                <div className={`${plan.color} py-6 px-5 md:py-8 md:px-8`}>
                  <h3
                    className={`text-lg md:text-xl 2xl:text-2xl font-bold text-center ${
                      plan.textColor || "text-black"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="text-center mt-2 md:mt-4">
                    <span
                      className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${
                        plan.textColor || "text-black"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs md:text-base 2xl:text-lg ${
                        plan.textColor ? "text-pink-200" : "text-gray-600"
                      }`}
                    >
                      /session
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-8 2xl:p-10 flex flex-col flex-grow">
                  <ul className="space-y-2 md:space-y-4 2xl:space-y-5 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start ${
                          !plan.popular && i >= 4 ? "text-gray-400" : ""
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6 ${
                            !plan.popular && i >= 4 ? "text-gray-400" : "text-pink-600"
                          } mr-2 mt-0.5 flex-shrink-0`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs text-black md:text-sm 2xl:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Book Now Button */}
                  <div className="mt-4 md:mt-8 text-center">
                    <Link
                      href="#Contact"
                      className={`inline-block font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg transition duration-300 w-full text-xs md:text-base 2xl:text-lg ${
                        plan.popular
                          ? "bg-gradient-to-br from-pink-500 to-pink-500 text-white hover:text-black hover:bg-pink-100"
                          : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                      }`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom CTA */}
          <div className="mt-8 md:mt-12 2xl:mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 2xl:p-12">
            <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
              Custom Packages Available
            </h3>
            <p className="text-gray-600 text-center text-xs md:text-base 2xl:text-lg mb-4 md:mb-6">
              Have special requirements? We offer custom packages for large families, events, and commercial needs.
            </p>
            <div className="text-center">
              <Link
                href="#Contact"
                className="inline-block bg-gradient-to-br from-pink-400 to-pink-600 text-white font-bold py-2 px-3 md:py-3 md:px-6 2xl:py-4 2xl:px-8 rounded-lg hover:text-black hover:bg-pink-100 transition duration-300 text-xs md:text-base 2xl:text-lg"
              >
                Request Custom Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
