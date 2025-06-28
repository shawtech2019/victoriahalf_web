import { useState } from 'react';

const testimonials = [
  {
    name: "Aniya Lester",
    title: "CEO Brand",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  },
  {
    name: "Juliet Bond",
    title: "Entrepreneur",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  },
  {
    name: "Joss Dowling",
    title: "Entrepreneur",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  },
  {
    name: "Addie Hickman",
    title: "Manager",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-5">Testimonials</h2>
        <p className="text-center text-gray-600 mb-10">
          We Are Trusted Over 16+ Countries Worldwide
        </p>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative flex justify-center items-center">
          <button
            className="absolute left-0 text-2xl p-2 bg-gray-200 rounded-full"
            onClick={prevSlide}
          >
            &#10094;
          </button>

          <div className="w-full max-w-lg text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="mx-auto w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-6">
                {testimonials[currentIndex].quote}
              </p>
              <h3 className="text-xl font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>

          <button
            className="absolute right-0 text-2xl p-2 bg-gray-200 rounded-full"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>

        <p className="text-center mt-5">
          Slide {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
