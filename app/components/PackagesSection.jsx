'use client';

const packages = [
  {
    name: 'Essential',
    price: '£199',
    unit: '/session',
    features: [
      '1 hour photoshoot',
      '1 location',
      '15 edited digital images',
      'Online gallery',
    ],
    buttonStyle: 'bg-gray-100 hover:bg-pink-500 hover:text-white text-pink-500',
    borderStyle: 'border border-gray-200 hover:border-pink-300',
  },
  {
    name: 'Premium',
    price: '£349',
    unit: '/session',
    features: [
      '2 hour photoshoot',
      '2 locations',
      '30 edited digital images',
      'Online gallery',
      '5 printed photos (6x8")',
      '1 framed photo (8x10")',
    ],
    popular: true,
    buttonStyle: 'bg-pink-500 hover:bg-pink-600 text-white',
    borderStyle: 'border-2 border-pink-500',
  },
  {
    name: 'Luxury',
    price: '£599',
    unit: '/session',
    features: [
      '3 hour photoshoot',
      'Unlimited locations',
      'All edited digital images (60+)',
      'Online gallery',
      '10 printed photos (6x8")',
      '2 framed photos (8x10" & 11x14")',
      'Photo album',
      'Maternity video (2-3 min)',
    ],
    buttonStyle: 'bg-gray-100 hover:bg-pink-500 hover:text-white text-pink-500',
    borderStyle: 'border border-gray-200 hover:border-pink-300',
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-10 mt-[-30px] md:mt-[-25px] bg-gray-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            Maternity Photography Packages
          </h2>
          <p className="text-gray-60 text-sm max-w-md mx-auto leading-snug">
            Affordable options to suit every expecting mother's needs and budget
          </p>
        </div>

        {/* Side-by-side on mobile with tighter spacing */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white p-3 sm:p-5 rounded-xl shadow-sm relative flex flex-col text-xs ${pkg.borderStyle}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-pink-500 text-white sm:text-[10px] text-[6px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-base sm:text-sm md:text-sm lg:text-lg font-bold text-gray-900 mb-1 text-center leading-snug">
  {pkg.name}
</h3>

<p className="text-lg sm:text-base md:text-base lg:text-2xl font-extrabold text-pink-500 mb-3 text-center leading-none">
  {pkg.price}
  <span className="text-xs sm:text-[11px] md:text-sm lg:text-base text-gray-500 font-normal ml-1">
    {pkg.unit}
  </span>
</p>

<ul className="space-y-1 mb-3 flex-grow">
  {pkg.features.map((feature, fIdx) => (
    <li
      key={fIdx}
      className="flex items-start text-[11px] sm:text-[12px] md:text-sm lg:text-base text-gray-700 leading-snug"
    >
      <svg
        className="w-4 h-4 text-pink-500 mr-1 mt-0.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <span>{feature}</span>
    </li>
  ))}
</ul>

<a
  href="#contact"
  className={`mt-auto block w-full text-center py-2 rounded-md font-semibold transition duration-300 text-sm sm:text-sm md:text-base lg:text-lg ${pkg.buttonStyle}`}
>
  Book Now
</a>

            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2 text-xs">Don't see what you're looking for?</p>
          <a
            href="/contact"
            className="inline-block border border-pink-500 text-pink-500 hover:bg-pink-50 font-semibold py-2 px-4 rounded-md text-xs transition duration-300"
          >
            Request Custom Package
          </a>
        </div>
      </div>
    </section>
  );
}
