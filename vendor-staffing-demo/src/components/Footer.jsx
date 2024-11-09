import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 flex justify-between items-end">
      <div className="text-left">
        <h2 className="text-lg font-semibold mb-2">Contacts</h2>
        <div className="flex space-x-8">
          <div>
            <p><strong>Name:</strong> R DHANUNJAYA REDDY</p>
            <p><strong>Mobile Number:</strong> Not Provided</p>
            <p><strong>Mail ID:</strong> info@densysdatatechnology.com</p>
          </div>
          <div>
            <p><strong>Name:</strong> Tejaswini</p>
            <p><strong>Mobile Number:</strong> +91 97421 50264</p>
            <p><strong>Mail ID:</strong> contact@densysdatatechnology.com</p>
          </div>
        </div>
      </div>
      <p className="text-center w-full md:w-auto mt-4 md:mt-0">
        © 2024 Densys Data Technology. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
