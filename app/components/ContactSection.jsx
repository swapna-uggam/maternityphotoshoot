
'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-white pb-6 lg:mt-15 dark:bg-gray-900 text-black dark:text-white mt-7 py-14 px-4">
      {/* Section: Connect With Us */}
      <div className="text-center mb-12 border-b border-gray-300 dark:border-gray-700 pb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Connect With Us</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xl">
          <Link href="https://www.facebook.com/snapuphotography1/" target="_blank" aria-label="Facebook">
            <FaFacebookF className="text-[#1877F2] hover:scale-110 transition" />
          </Link>
          <Link href="https://www.instagram.com/snapuphotography/?hl=en" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-[#E4405F] hover:scale-110 transition" />
          </Link>
          <Link href="https://www.youtube.com/@snapuphotography" target="_blank" aria-label="YouTube">
            <FaYoutube className="text-[#FF0000] hover:scale-110 transition" />
          </Link>
          <Link href="https://wa.me/447933223422" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="text-[#25D366] hover:scale-110 transition" />
          </Link>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Follow us for updates and news
        </p>
      </div>

      {/* Section: Direct Contact */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">Prefer Direct Contact?</h3>
        <p className="mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          We&apos;re always available for a friendly chat – reach out anytime, day or night!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/447933223422"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </Link>

          {/* Call Button */}
          <Link
            href="tel:+447933223422"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaPhoneAlt className="text-sm" />
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
