import React from 'react';

function Services() {
  return (
    <section id="services" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">IT Staffing</h3>
          <p>Providing top-tier tech talent for your business needs.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">Project Management</h3>
          <p>End-to-end project handling with expertise and efficiency.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">Technical Consulting</h3>
          <p>Professional insights and technical solutions tailored to you.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
