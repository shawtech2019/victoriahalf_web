import React from "react";
import backgroundImage from "../../../assets/business-chart-visual-graphics-report-concept-1536x1067.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const BlogHeroSection: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative max-w-3xl text-center text-[#ffffff] py-16"
      >
        <h1 className="text-6xl font-inter  font-extrabold mb-4">
          News & Articles
        </h1>
        <p className="text-2xl  leading-relaxed">
          Stay informed with the latest accounting insights, tax updates, and
          financial tips. Our expert articles help you navigate changes and make
          smarter financial decisions.We help our clients save time, money, and
          energy.
        </p>
      </motion.div>
    </section>
  );
};

export default BlogHeroSection;
