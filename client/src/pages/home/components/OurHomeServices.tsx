import React from 'react';
import Images from '../../../components/contants/Images';
/**
 * Importing necessary libraries and components
*/
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"



/**
 * 
 * this componenets display the animation os the services 
 * 
 */



/**
 * Interface for service data
 */
interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

/**
 * Service data configuration
 */
const services: Service[] = [
  {
    id: 'tax-management',
    image: Images.TaxImgOne,
    title: 'Tax Management',
    description:
      'Comprehensive tax planning and compliance services to optimize your financial strategy....',
    imageAlt:
      'Two business professionals collaborating on financial analysis in an office setting.',
  },
  {
    id: 'consulting',
    image: Images.TaxImgTwo,
    title: 'Consulting',
    description:
      'Strategic consulting to enhance business performance, streamline operations, and drive sustainable growth.',
    imageAlt: 'Professional accountant reviewing financial documents.',
  },
  {
    id: 'audit-assurance',
    image: Images.TaxImgThree,
    title: 'Audit & Assurance',
    description:
      'Rigorous audit and assurance services to ensure accuracy, transparency, and compliance in financial reporting.',
    imageAlt: 'Diverse team of business professionals collaborating in a meeting.',
  },
  {
    id: 'mergers-acquisitions',
    image: Images.TaxImgFour,
    title: 'Mergers & Acquisitions',
    description:
      'Expert guidance through complex M&A processes, ensuring seamless transitions and maximum value creation.',
    imageAlt:
      'Colleagues discussing strategic plans with digital tablets and documents.',
  },
  {
    id: 'risk-financial-advisory',
    image: Images.TaxImgFive,
    title: 'Risk & Financial Advisory',
    description:
      'Proactive risk management and financial advisory services to safeguard assets and enhance decision-making.',
    imageAlt: 'Business chart illustrating financial performance and risk analysis.',
  },
  {
    id: 'analytics',
    image: Images.TaxImgSix,
    title: 'Analytics',
    description:
      'Advanced data analytics to uncover insights, optimize performance, and inform strategic business decisions.',
    imageAlt: 'Visual dashboards displaying business analytics and performance metrics.',
  },
];

/**
 * ServiceCard component to render individual service items
 */
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden ">
    <img
      src={service.image}
      alt={service.imageAlt}
      className="w-full h-80 object-cover"
      loading="lazy"
    />
    <div className="">
      <div className='py-4'>
      <h3 className="px-[2rem] text-2xl text-[#004aac] font-inter font-semibold mb-3">{service.title}</h3>
      <p className="px-[2rem] text-gray-600 text-[16px] mb-5">{service.description}</p>
      </div>
      <button
        className="bg-[#004aac] w-full text-white px-6 py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
      </button>
    </div>
  </div>
);

/**
 * OurServices component to display a grid of services
 */
const OurServices: React.FC = () => {
  const {ref: titleRef, inView: titleInView }  = useInView ({
    triggerOnce: false,
    threshold: 0.1,
  })
  const { ref: statsRef, inView: statsInView } =  useInView ({
    triggerOnce: false,
    threshold: 0.1
  })
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header 
        ref={titleRef}
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50}}
        transition={{ duration: 1.5, ease: "easeInOut"}}
        className="text-center mb-12">
          <h2 className="text-4xl text-[#cfb020] md:text-4xl font-bold font-inter mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-[16px] max-w-2xl mx-auto">
            Delivering trusted accounting and financial services with precision and
            professionalism, tailored to your business needs.
          </p>
        </motion.header>
        <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 50}}
        transition={{ duration: 1.5, ease: "easeInOut"}}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;