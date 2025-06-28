import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Images from "../contants/Images";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual login logic
      console.log("Login Data:", formData);

      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Login error", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-inter font-bold text-center mb-2">
            Login to <Link to="/"><span className="text-[#004aac]">Victoriahalf</span></Link>
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Welcome back! Please enter your credentials.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-inter font-medium mb-2 text-gray-700">Email</label>
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
              <label className="block text-sm mb-2 font-inter font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border-[#A9A9A9] border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#004aac]"
                placeholder="Enter your password"
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
              className={`w-full px-6 py-3 mt-4 text-white rounded-md focus:outline-none font-inter focus:ring-2 focus:ring-indigo-500 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#004aac] hover:bg-[#E1B04A]"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center font-inter text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#004aac] hover:underline">
              Register here
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <img
            src={Images.HeroSectionHomeImgTwo}
            alt="login"
            className="w-full h-full rounded-[]"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
