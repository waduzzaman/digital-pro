'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections that need transparent navbar initially
  const transparentNavbarPages = ['/', '/about', '/portfolio'];
  const shouldBeTransparent = transparentNavbarPages.includes(pathname);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !shouldBeTransparent
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <Image
              src="/icons/logo.svg"
              alt="DigitalPro Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className={`text-2xl font-bold ${
              isScrolled || !shouldBeTransparent ? 'text-blue-600' : 'text-white'
            }`}>
              DigitalPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === item.href
                    ? isScrolled || !shouldBeTransparent
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : isScrolled || !shouldBeTransparent
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2 rounded-full transition-all duration-300 ${
                isScrolled || !shouldBeTransparent
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                  isScrolled || !shouldBeTransparent ? 'bg-gray-800' : 'bg-white'
                } ${
                  isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                  isScrolled || !shouldBeTransparent ? 'bg-gray-800' : 'bg-white'
                } translate-y-2 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 transform transition-all duration-300 ${
                  isScrolled || !shouldBeTransparent ? 'bg-gray-800' : 'bg-white'
                } translate-y-4 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 mt-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}