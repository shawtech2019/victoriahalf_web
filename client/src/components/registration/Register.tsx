import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Images from "../contants/Images";


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    experience: "",
    qualifications: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual POST logic
      console.log("Register Data:", formData);

      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/login");
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Registration error", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-8">
        <h2 className="text-2xl font-inter  font-bold text-center mb-2">
            Create your account <Link to="/"><span className="text-[#004aac]">Victoriahalf</span></Link>
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            5+ years experience | CPA Certified
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-inter font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="e.g. Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="e.g. Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-gray-700">Years of Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
              >
                <option value="">Select experience</option>
                <option value="0-1">0–1 years</option>
                <option value="2-4">2–4 years</option>
                <option value="5+">5+ years experience</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-gray-700">Qualifications</label>
              <input
                type="text"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="e.g. CPA Certified"
              />
            </div>

            <div>
              <label className="block text-sm font-inter font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="e.g. user@example.com"
              />
            </div>

            <div className="relative">
              <label className="block text-sm  font-inter font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="Enter a secure password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-9"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#004aac] hover:bg-[#E1B04A]"
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:mt-0 lg:ml-8">
          <img
            src={Images.HeroSectionHomeImgOne}
            alt="register"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
