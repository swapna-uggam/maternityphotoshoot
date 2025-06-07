
'use client';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'At-Home Sessions',
      description: 'Comfortable maternity shoots in your own home, capturing intimate moments naturally.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
        </svg>
      ),
    },
    {
      title: 'Creative Concepts',
      description: 'From vintage to contemporary, we create unique maternity photos that reflect your style.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Packages',
      description: 'Quality maternity photography at competitive prices with flexible packages to suit your needs.',
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-40 pt-20 pb-16 md:pt-10 md:pb-10 md:py-10 bg-gray-50 rounded-xl px-6">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Maternity Photography Services?
        </h2>
        <p className="text-gray-600 text-lg">
          We specialize in creating stunning, artistic images that celebrate your pregnancy journey.
        </p>
      </div>

      {/* Desktop Layout (3 columns) */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature} />
        ))}
      </div>

      {/* Mobile Layout (2 side-by-side + 1 centered below) */}
      <div className="md:hidden space-y-8">
        <div className="grid grid-cols-2 gap-6">
          {features.slice(0, 2).map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
        <div className=" flex justify-center">
          <div className="w-full  max-w-md">
            <FeatureCard feature={features[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="group bg-white p-6 mt-[-20px] md:p-8 md:mt-[-20px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 flex items-center justify-center bg-pink-100 text-pink-500 rounded-full mb-6 transition-transform duration-500 group-hover:rotate-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
}