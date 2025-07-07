'use client';
import Image from 'next/image';
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
      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className=" mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" 
            alt="Logo" 
            width={200}
            height={200}
            className="h-10 w-auto" />
            <span className="text-xl font-bold text-pink-500 4xl:text-4xl ">
            <span className="font-bold text-blue-500">Snap U</span> Photography
            </span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-pink-500 transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Push page content below navbar */}
      <div className="h-20" />

      {/* ✅ Mobile Menu - Absolute overlay, does NOT push content */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-md z-40 md:hidden">
          <div className="flex flex-col px-6 py-5 space-y-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="text-gray-800 text-base font-semibold hover:text-pink-500 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
