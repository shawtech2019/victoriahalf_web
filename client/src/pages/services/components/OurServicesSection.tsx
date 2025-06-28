import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Images from "../../../components/contants/Images";

const OUrServicesSection: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="opacity-[0.9] py-[8rem]">
      <section className="lg:flex flex flex-col-reverse sm:flex-row items-center justify-center gap-[8rem] lg:px-[8rem] md:px-[2.5rem] px-[2rem]">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="lg:w-[50%]"
        >
             <h1 className="lg:text-[18px] text-[#004AAC] md:text-[28px] text-[20px] mt-[1rem] font-inter font-semibold tracking-[1px]">
            OUR SERVICES
          </h1>
          <h1 className="lg:text-[48px] text-[#000000] md:text-[28px] text-[20px] mt-[1rem] font-inter font-semibold tracking-[1px]">
          Accounting Solutions for Today and Tomorrow
          </h1>
          <p className="lg:text-[18px] md:text-[14px] max-w-[500px] text-[10px] text-[#646A73] font-interfont-normal mt-[1rem]">
          At Victoriahalf, we deliver tailored accounting and financial services for individuals, small businesses, and corporations. Our team offers expert bookkeeping, tax planning, payroll, auditing, and advisory solutions to keep you compliant, informed, and ready for growth.
          </p>
          <div className="py-[1rem] flex items-center gap-8">
            <Link to="/contact">
              <button className="font-inter text-[14px] font-medium text-[#FFFFFF] bg-[#000000] hover:bg-[#004AAC] transition-transform ease-in-out duration-300 hover:scale-110 py-[6px] px-[20px] rounded-[5px]">
                Get in Touch
              </button>
            </Link>
            {/* <Link to="/about">
              <button className="font-inter text-[14px] font-medium text-[#004AAC] bg-[#ffffff] border-[1.5px] border-[#E1B04A] hover:bg-[#E1B04A] hover:text-[#ffffff] transition-transform ease-in-out duration-300 hover:scale-110 py-[5px] px-[28px] rounded-[7px]">
                About Us
              </button>
            </Link> */}
          </div>
        </motion.div>
        <motion.section
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="lg:w-[50%]"
        >
          <img src={Images.OurServiceImg} className="rounded" alt="Description of the customized training program" />
        </motion.section>
      </section>
    </section>
  );
};

export default OUrServicesSection;
