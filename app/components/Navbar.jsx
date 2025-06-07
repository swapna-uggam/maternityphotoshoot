
'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#packages', label: 'Packages' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-900 z-10">
              Maternity Photography
            </Link>

            {/* Desktop & Laptop Nav - hidden on small */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-900 hover:text-pink-500 transition duration-300 font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button - visible on small only */}
            <div className="md:hidden z-50">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="text-gray-900 focus:outline-none"
              >
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

      {/* Mobile Menu Drawer */}
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
