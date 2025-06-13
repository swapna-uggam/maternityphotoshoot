'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#packages', label: 'Packages' },
  { href: '#about', label: 'About' },
  { href: '#Contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 4xl:px-16">
          <div className="flex items-center justify-between h-16 relative w-full">


            {/* Logo Section - pushes far left in 4xl */}
            <div className="flex items-center space-x-2 z-10 4xl:mr-auto">
              <img src="/logo.png" alt="Logo" className="h-14 w-16 4xl:h-20 4xl:w-24" />
              <Link
                href="/"
                className="text-xl font-bold text-pink-600 4xl:text-4xl">
                <span className="font-bold text-blue-800">Snap U</span> Photography
              </Link>
            </div>

            {/* Desktop Nav - aligns right, grows on 4k */}
            <div className="hidden md:flex space-x-6 4xl:space-x-10 4xl:text-2xl ml-auto">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-black-700 hover:text-pink-500 transition duration-300 font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden z-50 ">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="text-gray-900 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`absolute top-16 right-0 bg-white shadow-lg rounded-bl-lg rounded-tl-lg md:hidden z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{ width: '210px' }}
      >
        <nav className="px-4 py-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-pink-500 hover:text-white"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

