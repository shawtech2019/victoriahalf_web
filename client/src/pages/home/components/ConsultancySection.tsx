import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Images from '../../../components/contants/Images';
import { FaAngleDown } from 'react-icons/fa6';

const ConsultancySection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className='bg-[#0b0622] relative py-[4rem]' ref={ref}>
      <section>
        <section className='flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <FaAngleDown
              color='#E1B04A' 
              size="50" 
              className='bg-[#ffffff] rounded-[50px] absolute lg:top-[-4%] md:top-[-2%] border-[1px] border-[#E1B04A]' 
            />
          </motion.div>
        </section>

        <motion.h2 
          className='text-[#fff] text-[28px] text-center font-poppins py-8 tracking-[0.5px] font-semibold'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Consultant Task Built in For <br />Small Business
        </motion.h2>

        <section className='flex items-center justify-center'>
          <section className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:gap-[4rem] gap-[4rem] md:gap-[4rem] px-[4rem]'>
            {[
              { img: Images.ConsultantCusomizeImg, title: 'Customized Training', desc: 'Our accounting training programs are designed to meet your unique needs, providing personalized learning experiences that align with your goals.' },
              { img: Images.ConsultantAuditImg, title: 'Audit Excellency', desc: 'Our tailored training programs empower you with the expertise and precision needed to excel in auditing, ensuring compliance, accuracy, and professional growth' },
              { img: Images.ConsultantPlaningImg, title: 'Strategy and Planning', desc: 'Our customized training programs equip you with the essential skills to develop effective strategies and execute precise financial planning for long-term success.' }
            ].map((item, index) => (
              <motion.section
                key={index}
                className='border-[1.5px] border-[#E1B04A] p-8'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              >
                <div className='flex items-center justify-center py-4'>
                  <img src={item.img} alt={item.title.toLowerCase()} />
                </div>
                <div>
                  <h2 className='text-[#fff] text-[24px] text-center py-4 font-poppins tracking-[0.5px] font-semibold'>
                    {item.title}
                  </h2>
                  <p className='text-[#abb2b9] font-inter font-light tracking-[0.3px]'>
                    {item.desc}
                  </p>
                </div>
                <div className='flex justify-center mt-4'>
                  <motion.button
                    className='text-sm font-medium text-white border-[#E1B04A]  border-[2px] py-2 px-4 rounded-[2px] hover:bg-[#E1B04A]'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                  >
                    See More
                  </motion.button>
                </div>
              </motion.section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ConsultancySection;
