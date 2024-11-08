import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="bg-white shadow-md p-6 rounded max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input type="text" id="name" className="w-full border rounded p-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input type="email" id="email" className="w-full border rounded p-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea id="message" className="w-full border rounded p-2" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
