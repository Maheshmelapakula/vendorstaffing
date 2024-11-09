import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 flex flex-col md:flex-row md:justify-between md:items-start">
      <div className="text-left mb-4 md:mb-0">
        <h2 className="text-lg font-semibold mb-2">For More Details, Get in Touch With:</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="mb-4 md:mb-0">
            <p>R DHANUNJAYA REDDY</p>
            <p>Mobile: +91 80748 30778</p>
            <p>Mail: info@densysdatatechnology.com</p>
          </div>
          <div>
            <p>Thejeshwini</p>
            <p>Mobile: +91 97421 50264</p>
            <p>Mail: contact@densysdatatechnology.com</p>
          </div>
        </div>
      </div>
      <p className="text-center md:text-right w-full md:w-auto">
        © 2024 Densys Data Technology. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
