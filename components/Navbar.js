"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/resale/ontario", label: "Home" },
    { href: "#", label: "New Listings" },
    { href: "#", label: "New Home Buyers" },
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
  ];

  return (
    <header className="pb-6 bg-white lg:pb-0 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image
                className="w-auto h-8 lg:h-10"
                src="/sutton.gif"
                alt="Company Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {/* Menu Open Icon */}
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            {/* Menu Close Icon */}
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <Link
            href="#"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-black transition-all duration-200 bg-amber-400 border border-transparent rounded-md lg:inline-flex hover:bg-amber-500 focus:bg-amber-500"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden fixed left-0 right-0 top-16 z-50`}
        >
          <div className="flow-root">
            <div className="flex flex-col items-center px-6 -my-2 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-amber-600 focus:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button (Mobile) */}
          <div className="px-6 mt-6">
            <Link
              href="#"
              className="inline-flex justify-center w-full px-4 py-3 text-base font-semibold text-black transition-all duration-200 bg-amber-400 border border-transparent rounded-md items-center hover:bg-amber-500 focus:bg-amber-500"
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
