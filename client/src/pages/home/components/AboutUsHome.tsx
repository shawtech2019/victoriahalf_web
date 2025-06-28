import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Financial consulting',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };
  return (
    <div className="py-[4rem] bg-gray-100">
      <div className="lg:max-w-7xl md:max-w-5xl mx-auto flex flex-col lg:flex-row gap-20 lg:px-[1rem] px-[2rem]">
        <div className="lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4 font-sans text-[#E1B04A] tracking-[0.3px]">About Us</h2>
          <p className="text-4xl mb-4 font-sans text-[#004AAC] font-semibold">
            We have 10 years of experience
          </p>
          <p className="text-[#676173] mb-4 font-sans text-[24px] mt-[2rem] tracking-[0.5px]">
            “We have over 25 years of experience providing expert financial advice to both businesses and individuals.”
          </p>
          <p className="mb-8 text-[14px] font-poppins text-[#646A73] font-normal tracking-[0.5px]">
            At Victoriahalf, we are passionate about providing tailored financial solutions that empower businesses to thrive. With decades of combined experience in accounting, tax compliance, and financial management, our team of certified professionals is dedicated to delivering exceptional service with precision and integrity.
          </p>
          <p className="text-[48px] mb-4 text-[#E1B04A] relative left-[6%] font-sacramento font-semibold">Ifeoluwa</p>
          <div className='flex items-center gap-2'>
            <p className="text-[24px] text-[#E1B04A] font-sans font-semibold">Ifeoluwa Abioye -</p>
            <p className="text-[#646A73]">CEO & Founder</p>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white relative lg:top-[-9rem] rounded-lg shadow-md">
          <h3 className="text-3xl font-bold bg-[#004AAC] p-8 font-inter text-[#e1dac9]">Request a Call Back</h3>
          <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div>
              <label htmlFor="name" className="block text-left font-light mb-2 text-[16px] text-[#E1B04A] font-inter tracking-[0.4px]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border-[1px] border-[#e1dac9] text-[#646A73] font-inter rounded-[2px] shadow-sm focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left font-light mb-2 text-[16px] text-[#E1B04A] font-inter tracking-[0.4px]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-[1px] border-[#e1dac9] rounded-[2px] shadow-sm focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-left font-light mb-2 text-[16px] text-[#E1B04A] font-inter tracking-[0.4px]">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-[1px] border-[#e1dac9] rounded-[2px] shadow-sm focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-left font-light mb-2 text-[16px] text-[#E1B04A] font-inter tracking-[0.4px]">
                Service
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={handleDropdownToggle}
                  className="w-full p-3 border-[1px] border-[#e1dac9] rounded-[2px] shadow-sm focus:ring-0 focus:outline-none flex justify-between items-center"
                >
                  {formData.service}
                  {isDropdownOpen ? (
                    <FaAngleUp  color="#E1B04A" size={30} className="ml-2 transition-transform duration-200" />
                  ) : (
                    <FaAngleDown  color="#004AAC" size={30} className="ml-2 transition-transform duration-200" />
                  )}
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg text-[#646A73]">
                    {['Financial consulting', 'Investment Advice', 'Tax Planning', 'Retirement Planning'].map((service) => (
                      <li
                        key={service}
                        className="p-2 hover:bg-gray-200 cursor-pointer text-[#646A73]"
                        onClick={() => {
                          setFormData({ ...formData, service });
                          setIsDropdownOpen(false);
                        }}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#E1b04a] text-white rounded-md hover:bg-[#004AAC] transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
