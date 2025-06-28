import React from "react";
import { FaComments, FaUserTie, FaChartLine } from "react-icons/fa";
import Images from "../../../components/contants/Images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section className="py-16 bg-[#F5F5F5] font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#cfb020] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted accounting and financial services delivered with precision
            and integrity to support your business success.
          </p>
        </motion.header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
          <motion.section
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className=" flex flex-col space-y-20"
          >
            <div className="bg-gray-50 p-[2rem] gap-8 flex px-[2rem]  rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div>
                <FaComments
                  size={60}
                  color="#ffffff"
                  className="text-4xl p-2 rounded-[5px] mb-4 bg-[#004aac]"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold font-inter  text-gray-900 mb-2">
                  Free Consultations
                </h3>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  Our complimentary consultations provide personalized insights
                  to address your financial needs and goals effectively.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-[2rem] gap-8 flex px-[2rem]  rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-300  ">
              <div>
                <FaUserTie
                  size={60}
                  color="#ffffff"
                  className="text-4xl p-2 rounded-[5px] mb-4 bg-[#004aac]"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold font-inter  text-gray-900 mb-2">
                  Certified Experts
                </h3>
                <p className="text-gray-600 text-smb lg:text-[16px]">
                  Our team of certified professionals brings extensive expertise
                  to deliver reliable and high-quality financial solutions.
                </p>
              </div>
            </div>
          </motion.section>
          <div>
            <img src={Images.WhyChooseImg} alt="" />
          </div>
          <motion.section
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className=" flex flex-col space-y-20"
          >
            <div className="bg-gray-50 p-[2rem] gap-8 flex px-[2rem]  rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div>
                <FaChartLine
                  size={60}
                  color="#ffffff"
                  className="text-4xl p-2 rounded-[5px] mb-4 bg-[#004aac]"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold font-inter  text-gray-900 mb-2">
                  Scaling Businesses
                </h3>
                <p className="text-gray-600 text-sm lg:text-[16px]">
                  We empower businesses to grow and scale with strategic
                  financial planning and tailored support for sustainable
                  success.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 py-[2rem] gap-8 flex px-[2rem]  rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-300">
              <div>
                <FaUserTie
                  size={60}
                  color="#ffffff"
                  className="text-4xl p-2 rounded-[5px] mb-4 bg-[#004aac]"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold font-inter  text-gray-900 mb-2">
                  24/7 Premium Support
                </h3>
                <p className="text-gray-600 text-sm text-[16px]">
                  Our dedicated support team is available around the clock to
                  provide prompt assistance and ensure your peace of mind.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
