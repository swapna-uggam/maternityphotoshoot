
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand / About - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1 min-w-0">
            <h3 className="text-lg font-bold mb-3 md:mb-4">Maternity Photography</h3>
            <p className="text-gray-400">
              Capturing the beautiful journey of pregnancy with artistic maternity photography across the UK.
            </p>
          </div>

          {/* Quick Links and Information side by side on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div className="min-w-0">
              <h4 className="text-lg font-bold mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                <li><Link href="/#gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
                <li><Link href="/#packages" className="text-gray-400 hover:text-white transition">Packages</Link></li>
              </ul>
            </div>

            {/* Information */}
            <div className="min-w-0">
              <h4 className="text-lg font-bold mb-3 md:mb-4">Information</h4>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1 min-w-0">
            <h4 className="text-lg font-bold mb-3 md:mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic space-y-1">
              <p>123 Photography Studio</p>
              <p>London, UK</p>
              <p>Email: <a href="mailto:info@bumptobabyphoto.com" className="hover:text-white break-all">info@bumptobabyphoto.com</a></p>
              <p>Phone: <a href="tel:+441234567890" className="hover:text-white">+44 123 456 7890</a></p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maternity Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}