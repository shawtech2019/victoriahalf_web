import React, { useState } from "react";
import Images from "../../../components/contants/Images";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: Images.OurTeamImgOne,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO",
    image: Images.OurTeamImgTwo,
  },
  {
    id: 3,
    name: "Sara Lee",
    position: "Lead Developer",
    image: Images.OurTeamImgThree,
  },
  {
    id: 4,
    name: "Michael Green",
    position: "Marketing Manager",
    image: Images.OurTeamImgFour,
  },
  {
    id: 5,
    name: "Emily White",
    position: "HR Manager",
    image: Images.OurTeamImgOne,
  },
];

const OurTeam: React.FC = () => {
    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    const { ref: titleRef, inView: titleInView }  = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 3 < teamMembers.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const displayedMembers = teamMembers.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-gray-100 py-16 lg:flex items-center justify-center px-4 md:px-8 lg:px-16">
      {/* Team header and navigation controls */}
      <motion.div
      ref={titleRef} 
      initial={{ opacity: 0, y: -50}}
      animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50  }}
      transition={{ duration: 1.5, ease: "easeInOut"}}
      className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-[14px] md:text-[16px] text-[#004AAC] mt-4 font-inter font-semibold tracking-wide">
            Our Team
          </h2>
          <p className="text-[28px] md:text-[38px] text-[#e1b04a] mt-4 font-inter font-semibold tracking-wide">
            Meet our experts
          </p>
          <p className="text-[12px] md:text-[14px] text-[#646A73] font-inter mt-4 max-w-[400px] mx-auto md:mx-0">
            Our skilled accounting team delivers tailored financial solutions,
            ensuring your business thrives with expert guidance in tax,
            bookkeeping, and financial management.
          </p>
          <button className="font-inter text-[12px] md:text-[14px] mt-4 font-medium text-[#e1dac9] bg-[#004AAc] hover:bg-[#E1B04A] hover:text-white transition-transform ease-in-out duration-300 hover:scale-110 py-3 px-6 rounded-md">
            Join Now
          </button>
          <div className="flex justify-center md:justify-start mt-8 items-center space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`text-gray-700 border-[#e1b04a] border rounded-full p-2 hover:text-gray-900 ${
                currentIndex === 0 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FaAngleLeft  size={24} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex + 3 >= teamMembers.length}
              className={`text-gray-700 border-[#e1b04a] border rounded-full p-2 hover:text-gray-900 ${
                currentIndex + 3 >= teamMembers.length &&
                "opacity-50 cursor-not-allowed"
              }`}
            >
              <FaAngleRight  size={24} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Team member cards */}
      <motion.div 
      ref={statsRef} 
      initial={{ opacity: 0, y: -50}}
      animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : -50  }}
      transition={{ duration: 1.5, ease: "easeInOut"}}
      className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {displayedMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 md:h-48 lg:h-56 object-cover mb-4"
            />
            <div className="p-4">
              <h3 className="text-[16px] md:text-[18px] font-inter text-[#e1b04a] tracking-wide font-semibold">
                {member.name}
              </h3>
              <p className="text-[#646A73] text-[12px] md:text-[14px] font-inter">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
