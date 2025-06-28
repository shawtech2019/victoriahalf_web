import Images from "../../../components/contants/Images";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsWhoWeAreSection = () => {
  const { ref: leftRef, inView: leftInView } = useInView ({
    triggerOnce: false,
    threshold: 0.1,
  })

  const { ref: rightLeft, inView: rightInView } = useInView ({
    triggerOnce: false,
    threshold: 0.1,
  })
  return (
    <section className="bg-[#f5f5f5] py-24 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
         className="lg:w-1/2">
          <h5 className="text-lg font-semibold font-inter text-[#E1B04A] mb-3">
            WHO WE ARE
          </h5>
          <h2 className="text-3xl leading-[48x] font-inter md:text-4xl font-bold text-[#004aac] mb-5">
            Victoriahalf, we deliver Accounting by the Book. Perform with Trust.
          </h2>
          <p className="text-gray-700 mb-8 text-[18px] leading-relaxed">
            At Victoriahalf, we deliver Accounting by the Book. Perform with
            Trust. With 10+ years of experience, we provide precise, reliable
            financial services that build lasting client partnerships
          </p>

          <section className="space-y-6">
            {/* Audit & Assurance Block */}
            <div className="flex items-start gap-4 p-5  hover:shadow-md transition">
              <div className="flex-shrink-0">
                <HiOutlineClipboardCheck
                  size={40}
                  className="text-white bg-[#004aac] rounded-full p-2"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#072345] mb-2">
                  Audit & Assurance
                </h3>
                <p className="text-gray-700 text-sm">
                  Delivering global expertise in audit and assurance to help
                  businesses maintain compliance and gain financial clarity with
                  confidence.
                </p>
              </div>
            </div>

            {/* Advisory */}
            <div className="flex items-start gap-4 p-5  hover:shadow-md transition">
              <div className="flex-shrink-0">
                <MdOutlineSupportAgent 
                  size={40}
                  className="text-white bg-[#004aac] rounded-full p-2"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#072345] mb-2">
                  Advisory
                </h3>
                <p className="text-gray-700 text-sm">
                  Our advisory services equip you with tailored strategies for
                  success. Victoriahalf helps you navigate financial challenges,
                  optimize operations, and make informed decisions that fuel
                  sustainable business growth.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 m p-5 hover:shadow-md transition">
              <div className="flex-shrink-0">
                <FaRegChartBar
                  size={40}
                  className="text-white bg-[#004aac] rounded-full p-2"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#072345] mb-2">
                  Managements
                </h3>
                <p className="text-gray-700 text-sm">
                  Victoriahalf’s management services are designed to enhance
                  your business performance. From budgeting to process
                  improvement, we streamline your financial operations to keep
                  your business efficient, agile, and future-ready.
                </p>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Image */}
        <motion.div 
        ref={rightLeft}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="lg:w-1/2 w-full">
          <img
            src={Images.WhoWeAreImg}
            alt="Who We Are"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsWhoWeAreSection;
