import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Densys</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
