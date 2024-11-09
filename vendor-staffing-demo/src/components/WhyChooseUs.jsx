import React from 'react';

function WhyChooseUs() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Choosing us means partnering with an industry leader committed to providing unmatched IT services and staffing solutions. Here’s why our clients trust us:
        </p>
        
        {/* Benefits List */}
        <ul className="list-disc ml-8 space-y-2">
          <li>Reduced hiring time with access to top talent</li>
          <li>Expert management of IT projects to ensure efficiency and timely delivery</li>
          <li>Customized technical solutions tailored to your business needs</li>
          <li>Dedicated support team available 24/7</li>
          <li>Flexible and scalable staffing solutions</li>
        </ul>

        {/* Embedded Video */}
        <div className="mt-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="Client Success Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow-lg"
          ></iframe>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">What Our Clients Gain</h3>
          <p className="text-gray-700 mb-4">
            Our clients benefit from our deep industry knowledge and personalized approach. We empower businesses by:
          </p>
          <ul className="list-disc ml-8 space-y-2">
            <li>Improving productivity with efficient workforce integration</li>
            <li>Ensuring seamless project execution through skilled technical leadership</li>
            <li>Reducing operational costs with optimized staffing solutions</li>
            <li>Access to state-of-the-art technology and innovation</li>
          </ul>
        </div>

        {/* Second Video Embed */}
        <div className="mt-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/another-video-id"
            title="Why Our Services Stand Out"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
