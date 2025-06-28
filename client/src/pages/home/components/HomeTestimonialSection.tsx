import React, { useEffect, useState } from 'react';
import backgroundImage from '../../../assets/hero-img-two.png';
import Images from '../../../components/contants/Images';


/**
 * Interface for testimonial data
 */
interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
}

/**
 * Testimonial data configuration
 */
const testimonials: Testimonial[] = [
  {
    id: 'olivia-turner',
    name: 'Olivia Turner',
    title: 'CEO, Global Strategies',
    quote:
      'I was blown away by the level of service and expertise. They delivered exactly what we needed, on time and with outstanding quality. We look forward to future collaborations.',
    image: Images.HomeTestimonialImgOne,
  },
  {
    id: 'anthony-rivera',
    name: 'Anthony Rivera',
    title: 'Chief Marketing Officer, Skyline Tech',
    quote:
      'They transformed our vision into reality with precision and creativity. Their team is a pleasure to work with, and we couldn’t be happier with the outcome.',
    image: Images.HomeTestimonialImgTwo,
  },
  {
    id: 'sarah-collins',
    name: 'Sarah Collins',
    title: 'Co-Founder, Innovate Labs',
    quote:
      'I’ve worked with many companies, but this team truly stands out. Their passion for what they do shows in every aspect of their work. A top-notch experience!',
    image: Images.HomeTestimonialImgThree,
  },
  {
    id: 'brian-harris',
    name: 'Brian Harris',
    title: 'Head of Product, Nexa Solutions',
    quote:
      'Their professionalism and attention to detail were exactly what we needed. The project was a huge success thanks to their team’s dedication and expertise.',
    image: Images.HomeTestimonialImgFour,
  },
  {
    id: 'samantha-lee',
    name: 'Samantha Lee',
    title: 'Creative Director, ArtHouse Studios',
    quote:
      'From the very first meeting, it was clear that they were committed to delivering exceptional results. They listened to our goals and exceeded every expectation!',
    image: Images.HomeTestimonialImgFour,
  },
];

/**
 * TestimonialCard component to render individual testimonial items
 */
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="p-6 bg-white border border-yellow-500 rounded-lg shadow-lg text-gray-800 transform transition-opacity duration-500">
    <img
      src={testimonial.image}
      alt={`${testimonial.name}'s portrait`}
      className="mx-auto w-24 h-24 rounded-full mb-4 border-4 border-gray-200 object-cover"
      loading="lazy"
    />
    <blockquote className="text-gray-600 text-sm italic mb-3">{testimonial.quote}</blockquote>
    <h3 className="text-lg font-semibold text-yellow-600 mb-1">{testimonial.name}</h3>
    <p className="text-sm text-gray-500">{testimonial.title}</p>
  </div>
);

/**
 * HomeTestimonialSection component to display a testimonial carousel
 */
const HomeTestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalDuration = 5000; // 5 seconds interval

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, slideIntervalDuration);

    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Hear from our satisfied clients across 16+ countries, sharing their experiences with our exceptional services.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-100">
              <h2></h2>
              Our global clients consistently praise our commitment to excellence, and we are dedicated to delivering outstanding results for businesses worldwide.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>
            <nav className="flex justify-center mt-6" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-2 transition-colors duration-300 ${
                    index === currentIndex ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;