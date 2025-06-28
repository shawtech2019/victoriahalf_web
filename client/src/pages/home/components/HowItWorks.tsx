import { motion } from 'framer-motion';
import { FiMessageSquare, FiPackage, FiCheckCircle } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const howItWorksSteps = [
  {
    icon: <FiMessageSquare size={40} color='#ffffff' className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]" />,
    title: "Consultation",
    description:
      "Connect with our experts to discuss your needs and goals. We'll help you understand the best solutions tailored for you.",
    buttonText: "Chat Now",
  },
  {
    icon: <FiPackage size={40} color='#ffffff' className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]"  />,
    title: "Choose a Package",
    description:
      "Select from our range of service packages that best match your requirements and budget all designed for maximum impact.",
    buttonText: "Get Started",
  },
  {
    icon: <FiCheckCircle  size={40} color='#ffffff' className="mb-4 bg-[#004aac] w-20 h-20 p-4 rounded-[50px]" />,
    title: "Receive Your Service",
    description:
      "Sit back and relax while we deliver high-quality services on time. Your satisfaction is our top priority.",
    buttonText: "Read Testimonials",
  },
];

const HowItWorks = () => {
  // Intersection Observer for animation
  const { ref: titleRef,  inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-center mb-12">

        <h2 className="lg:text-4xl text-2xl font-bold text-center font-inter  text-[#E1B04A] mb-4">How it works</h2>
        <p className="text-center text-gray-600 text-[16px] font-poppins max-w-2xl mx-auto mb-12">
          Discover how we make the process smooth and effortless from start to finish. Your success is just three simple steps away.
        </p>

        </motion.div>
        <motion.div 
        ref={statsRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : -50 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[5px] shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-bold font-inter  mb-4">{step.title}</h3>
              <p className="text-gray-600 px-[2rem] text-[16px]  mb-6">{step.description}</p>
              <button className="bg-[#004aac] font-sans  font-normal text-white px-6 py-2 rounded-[5px] hover:bg-blue-700 transition duration-300">
                {step.buttonText}
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
