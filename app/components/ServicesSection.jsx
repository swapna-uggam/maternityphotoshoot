
// 'use client';

// import Image from 'next/image';

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-16 md:py-2.5 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Maternity Photography Services
//           </h2>
//           <p className="text-lg text-gray-600">
//             We offer a range of specialized maternity photography services to capture your unique journey
//           </p>
//         </div>

//         <div className="grid mt-[-50px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-6  rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group animate-fadeInUp"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative w-full h-48 sm:h-56 lg:h-64 mb-6 rounded-lg overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.alt}
//                   fill
//                   className="object-cover rounded-lg transition duration-500 group-hover:scale-105"
//                   quality={90}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   );
// }

// const services = [
//   {
//     image: '/vintage1.jpg',
//     alt: 'Studio maternity photography',
//     title: 'Studio Sessions',
//     description: 'Elegant studio maternity shoots with professional lighting and backdrops for timeless portraits.',
//   },
//   {
//     image: '/outdoor1.jpg',
//     alt: 'Outdoor maternity photography',
//     title: 'Outdoor Shoots',
//     description: 'Natural light maternity photography in beautiful outdoor locations like parks, beaches, and urban settings.',
//   },
//   {
//     image: '/saree1.jpg',
//     alt: 'At-home maternity photography',
//     title: 'At-Home Sessions',
//     description: 'Comfortable and intimate maternity photoshoots in the comfort of your own home.',
//   },
//   {
//     image: '/bestimg.jpg',
//     alt: 'Couple maternity photography',
//     title: 'Couple & Family',
//     description: "Include your partner and children in the photoshoot to capture the whole family's excitement.",
//   },
//   {
//     image: '/image1.jpg',
//     alt: 'Themed maternity photography',
//     title: 'Themed Shoots',
//     description: 'Creative concepts including vintage, fairytale, seasonal, and cultural themes like saree maternity shoots.',
//   },
//   {
//     image: '/family.jpg',
//     alt: 'Black and white maternity photography',
//     title: 'Artistic Styles',
//     description: 'Black & white, fine art, silhouette, and other artistic approaches to maternity photography.',
//   },
// ];
'use client';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      title: 'Indoor Studio Shoot',
      description: 'Perfect lighting and backdrops in our professional studio.',
      image: '/studio.jpg',
    },
    {
      title: 'Outdoor Maternity Shoot',
      description: 'Natural settings to capture your glow.',
      image: '/pin3.jpg',
    },
    {
      title: 'Home Sessions',
      description: 'Comfort of your own space with our mobile setup.',
      image: '/pin10.jpg',
    },
    {
      title: 'Family Involvement',
      description: 'Include your partner and kids for a full-family memory.',
      image: '/pin8.jpg',
    },
    {
      title: 'Ethnic Theme Shoots',
      description: 'Celebrate culture with traditional attire and styling.',
      image: '/pin6.jpg',
    },
    {
      title: 'Black & White Portraits',
      description: 'Timeless and elegant monochrome captures.',
      image: '/pin7.jpg',
    },
    {
      title: 'Creative Concept Shoots',
      description: 'Artistic expressions of your maternity journey.',
      image: '/pin2.jpg',
    },
    {
      title: 'Couple Maternity Sessions',
      description: 'Cherish the bond through romantic frames.',
      image: '/pin1.jpg',
    },
  ];

  return (
    <section id="services" className="py-8 md:py-24 bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-600 mb-4">
            Our Maternity Photography Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a variety of photography styles tailored to your comfort and preferences.
          </p>
        </div>

        {/* Grid of Services */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-36 sm:h-40 md:h-44 lg:h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"/>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-black-600 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
