import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurTrustedClients: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-[#E1B04A] tracking-[0.3px] font-inter">
            We are trusted by more than
          </h2>
          <div className="text-5xl font-extrabold text-[#004AAc] font-inter mt-4">
            <CountUp start={0} end={4000} duration={2.5} suffix="+" />
          </div>
          <p className="mt-4 text-[#646A73] text-[14px] font-poppins font-light max-w-xl mx-auto">
            We deliver reliable, innovative solutions that help businesses grow
            and succeed. Our dedication to quality and client satisfaction sets
            us apart in the industry.
          </p>
          <Link to="/">
            <button className="mt-6 inline-block bg-[#004AAC] text-white transition-transform ease-in-out duration-300 hover:bg-[#E1B04a] hover:scale-110 py-[8px] px-[28px] rounded-[7px]">
              Read our story
            </button>
          </Link>
        </motion.div>

        {/* Numbers Speak */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#e1b04a]">Success Story</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-lg p-8">
              <div className="text-6xl font-extrabold font-poppins text-[#004aac]">
                <CountUp start={0} end={80} duration={2.5} />
              </div>
              <p className="mt-4 text-[#646A73] font-light font-poppins text-[14px]">
                More than 100 companies had been served
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-8">
              <div className="text-6xl font-bold text-[#004aac] font-poppins">
                <CountUp start={0} end={50} duration={2.5} />
              </div>
              <p className="mt-4 text-[#646A73] text-[14px] font-poppins font-light tracking-[0.3px]">
                More than 50 projects had been completed
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-8">
              <div className="text-6xl font-bold text-[#004aac] font-poppins">
                <CountUp start={0} end={30} duration={2.5} />
              </div>
              <p className="mt-4 text-[#646A73] text-[14px] font-poppins font-light tracking-[0.3px]">
                30 branches were established in Europe and America
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTrustedClients;
