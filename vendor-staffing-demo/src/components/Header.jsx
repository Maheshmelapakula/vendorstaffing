import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Densys</h1>
      {/* Hamburger Icon */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
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
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
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
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-blue-600 text-white md:hidden shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#services" className="hover:underline" onClick={toggleMenu}>Services</a></li>
            <li><a href="#portfolio" className="hover:underline" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
