import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Images from "../../../components/contants/Images";

const CustomizedTraining: React.FC = () => {
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
      <section className="lg:flex flex flex-col-reverse sm:flex-row items-center justify-center gap-[4rem] lg:px-[8rem] md:px-[2.5rem] px-[2rem]">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="lg:w-[50%]"
        >
          <h1 className="lg:text-[38px] text-[#004AAC] md:text-[28px] text-[20px] mt-[1rem] font-inter font-semibold tracking-[1px]">
            Customized Training
          </h1>
          <p className="lg:text-[18px] md:text-[14px] text-[10px] text-[#646A73] font-interfont-normal mt-[1rem]">
            Our accounting training programs are tailored to your needs, whether you're a beginner or looking to enhance your skills. We offer flexible learning options for a personalized educational experience.
          </p>
          <div className="py-[1rem] flex items-center gap-8">
            <Link to="/contact">
              <button className="font-inter text-[14px] font-medium text-[#FFFFFF] bg-[#000000] hover:bg-[#004AAC] transition-transform ease-in-out duration-300 hover:scale-110 py-[6px] px-[20px] rounded-[5px]">
                Get in Touch
              </button>
            </Link>
            <Link to="/about">
              <button className="font-inter text-[14px] font-medium text-[#004AAC] bg-[#ffffff] border-[1.5px] border-[#E1B04A] hover:bg-[#E1B04A] hover:text-[#ffffff] transition-transform ease-in-out duration-300 hover:scale-110 py-[5px] px-[28px] rounded-[7px]">
                About Us
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.section
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageInView ? 1 : 0, y: imageInView ? 0 : 50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="lg:w-[50%]"
        >
          <img src={Images.CustomizeTrainingImg} alt="Description of the customized training program" />
        </motion.section>
      </section>
    </section>
  );
};

export default CustomizedTraining;
