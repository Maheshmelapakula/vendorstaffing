import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Portfolio & Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Description of a successful project.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Description of a successful project.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold">Project 3</h3>
          <p>Description of a successful project.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
