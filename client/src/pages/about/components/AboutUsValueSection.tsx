import { motion } from "framer-motion";
import { FiFlag, FiTarget, FiUsers } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const howItWorksSteps = [
  {
    icon: (
      <FiTarget
        size={40}
        color="#ffffff"
        className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]"
      />
    ),
    title: "Our Vision",
    description:
      "We envision a world where businesses thrive through financial clarity and strategic insight. Victoriahalf aims to be the leading force in transforming accounting services, helping organizations grow sustainably and confidently on a global scale",
  },
  {
    icon: (
      <FiFlag
      size={40}
      color="#ffffff"
      className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]"
    />
    ),
    title: "Our Mission",
    description:
      "Our mission is to empower businesses with expert financial solutions that drive success. We strive to build lasting partnerships with our clients by offering reliable, innovative, and transparent accounting and advisory services.",
  },
  {
    icon: (
      <FiUsers
      size={40}
      color="#ffffff"
      className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]"
    />
    ),
    title: "Our Vision",
    description:
      "Victoriahalf fosters a culture of collaboration, continuous learning, and respect. We believe that our people are our greatest asset, and we cultivate an environment that encourages growth, diversity, and a passion for delivering excellence.",
  },
];

const AboutUsValueSection = () => {
  // Intersection Observer for animation
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section className="py-16 bg-[#072345]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2 className="lg:text-xl text-xl font-bold text-center font-inter  text-[#E1B04A] mb-4">
            Our Value
          </h2>
          <h2 className="lg:text-4xl text-2xl font-bold text-center font-inter  text-[#FFFFFF] mb-4">
            Exceptional service. Worldwide.
          </h2>
          <p className="text-center text-gray-100 text-[16px] font-poppins max-w-4xl mx-auto mb-12">
            At Victoriahalf, we are committed to delivering unparalleled service
            with integrity and precision. Our values are rooted in trust,
            excellence, and a client-first approach, ensuring that every project
            we undertake meets the highest standards of quality and
            professionalism.
          </p>
        </motion.div>
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[5px] shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-bold font-inter  mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 px-[2rem] text-[16px]  mb-6">
                {step.description}
              </p>
              {/* <button className="bg-[#004aac] font-sans  font-normal text-white px-6 py-2 rounded-[5px] hover:bg-blue-700 transition duration-300">
                {step.buttonText}
              </button> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsValueSection;
