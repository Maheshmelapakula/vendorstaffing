import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This company provided excellent service and delivered beyond our expectations!',
      position: 'CEO of TechCorp',
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    },
    {
      name: 'Jane Smith',
      feedback: 'Professional and reliable staffing solutions. Highly recommended!',
      position: 'HR Manager at Innovate Solutions',
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    },
    {
      name: 'Michael Brown',
      feedback: 'Great technical expertise and top-notch project management support!',
      position: 'Project Lead at SoftWare Ltd',
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    },
    {
      name: 'Emily Davis',
      feedback: 'Exceptional IT services that greatly enhanced our project outcomes.',
      position: 'CTO at Alpha Innovations',
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    },
    {
      name: 'David Wilson',
      feedback: 'Highly skilled and committed team. Outstanding experience!',
      position: 'Operations Manager at Beta Works',
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: 0 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: 0 }}
        onClick={onClick}
      />
    );
  }

  return (
    <section id="testimonials" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Client Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4 text-gray-700">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
