import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"; // Import social media icons
import Images from "../contants/Images";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072345] text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <img src={Images.Logo} className="w-[200px] h-" alt="" />
          </div>
          <p>
            We have digitalized accounting work experience to help people
            willing to kickstart a career in accounting but have no experience.
            This training increases your chances of getting a job and gives
            quality support to make you truly brilliant.
          </p>
        </div>
        {/* About Us Section */}
        <div className="font-sans">
          <h3 className="text-lg font-inter font-bold text-white mb-4">
            About Us
          </h3>
          <ul className="font-sans text-[18px]">
            <li className="mb-2 hover:text-white transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/case-study">Case Study</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/services">Services</Link>
            </li>
            <li className="mb-2 hover:text-white transition">
              <Link to="/news">News</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-lg font-inter font-bold text-white mb-4">
            Our Services
          </h3>
          <ul className="font-sans text-[18px]">
            <li className="mb-2 font-sans hover:text-white transition">
              <Link to="/services/strategy-planning">
                Strategy and Planning
              </Link>
            </li>
            <li className="mb-2 font-sans hover:text-white transition">
              <Link to="/services/tax-trusts">Tax and Trusts</Link>
            </li>
            <li className="mb-2 font-sans hover:text-white transition">
              <Link to="/services/audit-evaluation">Audit and Evaluation</Link>
            </li>
            <li className="mb-2 font-sans hover:text-white transition">
              <Link to="/services/taxes-efficiency">Taxes and Efficiency</Link>
            </li>
            <li className="mb-2 font-sans hover:text-white transition">
              <Link to="/services/finance-restructuring">
                Finance and Restructuring
              </Link>
            </li>
            <li className="hover:text-white font-sans transition">
              <Link to="/services/financial-advisor">Financial Advisor</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg text-[18px] font-inter font-bold text-white mb-4">
            Contact Us
          </h3>
          <p className="mb-2">Klara Södra 1, 111 52 Stockholm</p>
          <p className="mb-2">+4 509 120 6705</p>
          <p className="mb-2">(454) 954 4803</p>
          <p className="mb-2">
            <Link
              to="mailto:onatrix@support.com"
              className="hover:text-white transition"
            >
              ictoriahalfng@gmail.com
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-[#F5F5F5] mb-4">
          © 2023 Shawtechglobal. All Rights Reserved. Designed by{" "}
          {/* <Link to="#" className="hover:text-white">
            Themesflat
          </Link> */}
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF />
          </Link>
          s
          <Link
            to="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
