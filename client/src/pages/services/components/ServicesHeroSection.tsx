import React from 'react';
import backgroundImage from "../../../assets/caucasian-male-and-female-colleague-discuss-tablet-and-file-view-through-glass-wall-and-memo-notes-1536x1024.jpg"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ServicesHeroSection: React.FC = () => {
  const {ref: titleRef,  inView: titleInView} = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#072345] opacity-60"></div>

      {/* Content */}
      <motion.div 
      ref={titleRef}
      initial={{ opacity:0, y: -50 }}
      animate={{  opacity: titleInView ? 1 :  0, y: titleInView ? 0 : 50}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative max-w-3xl text-center text-[#ffffff] py-16">
        <h1 className="text-6xl font-inter  font-extrabold mb-4">Services</h1>
        <p className="text-2xl  leading-relaxed">
        Comprehensive accounting, tax, payroll, and advisory solutions to keep your finances clear and compliant.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesHeroSection;
