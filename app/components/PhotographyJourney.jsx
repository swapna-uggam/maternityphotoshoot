
'use client';

import { useState } from 'react';
const steps = [
  {
    id: 1,
    title: "Initial Contact",
    description: "You fill out our contact form and we'll respond within 24 hours to discuss your needs.",
  },
  {
    id: 2,
    title: "Consultation",
    description: "We'll schedule a call or meeting to understand your vision, preferences, and event details.",
  },
  {
    id: 3,
    title: "Custom Proposal",
    description: "You'll receive a tailored photography package with pricing and options for your event.",
  },
  {
    id: 4,
    title: "Booking Confirmation",
    description: "Secure your date with a signed contract and deposit payment.",
  },
  {
    id: 5,
    title: "Pre-Event Planning",
    description: "Finalize shot lists, timelines, and any special requests before your big day.",
  },
  {
    id: 6,
    title: "Event Day",
    description: "Our professional photographers capture your special moments beautifully.",
  },
  {
    id: 7,
    title: "Delivery",
    description: "Receive your edited high-resolution photos within the promised timeframe.",
  },
];

export default function PhotographyJourney() {
  const [blinkStopped, setBlinkStopped] = useState(false);

  const handleBlinkStop = () => {
    setBlinkStopped(true);
  };

  return (
    <section className="py-6 px-6 bg-blue-50 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4 text-center">
          Your Photography Journey
        </h2>
        <p className="text-gray-700 mb-12 text-xs sm:text-base 2xl:text-3xl text-center">
          Here&quot;s what to expect when you work with us
        </p>

        <div className="relative">
          {/* Vertical line for steps (desktop only) */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-1 bg-blue-200 rounded" />

          <div className="space-y-3">
            {steps.map((step, index) => {
              const isFirst = index === 0;
              const blinkClass =
                isFirst && !blinkStopped ? 'animate-pulse' : '';

              return (
                <div
                  key={step.id}
                  className="relative flex items-start md:items-center gap-4 md:gap-4 cursor-pointer"
                  onClick={isFirst ? handleBlinkStop : undefined}
                >
                  {/* Step icon */}
                  <div
                    className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-full ${
                      isFirst
                        ? `bg-blue-700 text-white shadow-lg ring-2 ring-blue-700 ${blinkClass}`
                        : 'bg-blue-200 text-blue-700'
                    } text-lg font-bold`}
                  >
                    {step.id}
                  </div>

                  {/* Line connector (mobile) */}
                  <div
                    className={`absolute left-[24px] top-12 h-full w-1 ${
                      isFirst ? 'bg-blue-400' : 'bg-blue-200'
                    } md:hidden`}
                  />

                  {/* Step content */}
                  <div className="bg-white p-6 rounded-xl shadow-md w-full">
                    <h3 className="text-sm lg:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-[10px] lg:text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
