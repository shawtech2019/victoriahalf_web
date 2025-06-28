import React from "react";
import backgroundImage from "../../../assets/multiethnic-business-people-working-together-in-the-office-1536x1024.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const WhatWeAre: React.FC = () => {
  const {ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat  py-45 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0  bg-[#072345]  opacity-70"></div>
      <motion.div
      ref={leftRef}
      initial={{ opacity: 0, x: -50}} 
      animate={{ opacity: leftInView ? 1: 0, x: leftInView ? 0 : -50 }}
      transition={{ duration: 1.5, ease: "easeInOut"}}
      className="relative max-w-3xl px-[4rem] text-start text-white">
        <h2 className="text-4xl font-inter  sm:text-4xl font-extrabold">
          Make your business stand out with our personalized accounting
          services.
        </h2>
        <p className="mt-4 text-lg">
          At our firm, we go beyond just numbers we offer tailored accounting
          solutions designed to help your business thrive. Whether you're a
          startup or an established company, our expert team works closely with
          you to simplify your finances, optimize performance, and unlock new
          opportunities for growth. Let us handle the details so you can focus
          on what matters most: building your business.
        </p>
        <div className="mt-8">
          <button
            type="button"
            className="px-8 py-3 bg-[#004aac] hover:bg-blue-700 rounded-md shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeAre;
