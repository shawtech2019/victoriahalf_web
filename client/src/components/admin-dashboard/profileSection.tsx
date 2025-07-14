import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineClose } from "react-icons/ai";

const countryCodes = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
];

const ProfileSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    location: "",
    email: "",
    phone: "",
    countryCode: "+1",
    summary: "",
    certifications: "",
    experience: "",
    education: "",
    profileImage: "",
  });

  const [skills, setSkills] = useState(["Tax Filing", "Budgeting", "Excel"]);
  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setFormData({ ...formData, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { ...formData, skills });
  };

  const addSkill = () => setSkills([...skills, ""]);
  const updateSkill = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  }; 
  const removeSkill = (index: number) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div className="max-w-4xl mx-auto mt-[4rem] font-sans p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-[#004AAC] mb-6 text-center">
        Complete Your Candidate Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image Upload */}
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src={previewImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-full object-cover w-full h-full border shadow"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              title="Choose Profile Image"
            />
          </div>
          <p className="text-sm text-gray-500">Click image to upload profile photo</p>
        </div>

        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3 tracking-[1px] font-sans text-[#004aac]  pb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="border border-[#d3d3d3] px-4 py-2 rounded w-full" required />
            <input name="title" placeholder="Professional Title (e.g. Accountant)" value={formData.title} onChange={handleChange} className="border border-[#d3d3d3] px-4 py-2 rounded w-full" required />
            <input name="location" placeholder="City, Country" value={formData.location} onChange={handleChange} className="border border-[#d3d3d3] px-4 py-2 rounded w-full" />
            <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border border-[#d3d3d3] px-4 py-2 rounded w-full" />

            {/* Phone with Country Code */}
            <div className="flex gap-2">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="border border-[#d3d3d3] px-3 py-2 rounded">
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-[#d3d3d3] px-4 py-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="text-lg text-[#004aac] font-sans tracking-[1px] font-semibold mb-3 pb-2">Professional Summary</h3>
          <textarea
            name="summary"
            placeholder="Write a short professional summary"
            value={formData.summary}
            onChange={handleChange}
            className="border border-[#d3d3d3] px-4 py-2 rounded w-full h-28"
            required
          />
        </div>

        {/* Skills Section (Rearranged with icons) */}
        <div className="mb-4">
          <label className="block font-semibold font-sans tracking-[1px] text-[#004aac] text-lg mb-2">Core Skills*</label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 bg-[#f5f5f5] p-8 rounded-[10px]">
            {skills.map((skill, index) => (
              <div key={index} className="relative flex text-center items-center">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  placeholder="Skill"
                  className="w-full border-none rounded-[20px] text-[#004aac] font-sans font-medium text-[14px] bg-white p-2 shadow-sm pr-10 focus:ring-0 focus:outline-none"
                />
                <button type="button" onClick={() => removeSkill(index)} className="absolute right-3 text-[#004aac]">
                  <AiOutlineClose size={20} />
                </button>
              </div>
            ))}
            <button type="button" className="text-[#004aac] text-lg" onClick={addSkill}>
              <AiOutlinePlusCircle size={25} color="#004aac" />
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg text-[#004aac] font-sans tracking-[1px] font-semibold mb-3 pb-2">Certifications</h3>
          <textarea
            name="certifications"
            placeholder="List certifications (e.g. CPA – 2020)"
            value={formData.certifications}
            onChange={handleChange}
            className="  border-[#d3d3d3] border px-4 py-2 rounded w-full"
          />
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-lg text-[#004aac] font-sans tracking-[1px] font-semibold mb-3 pb-2">Work Experience</h3>
          <textarea
            name="experience"
            placeholder="e.g. Senior Accountant - KPMG (2020–2023)"
            value={formData.experience}
            onChange={handleChange}
            className="border border-[#d3d3d3] px-4 py-2 rounded w-full h-28"
          />
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg text-[#004aac] font-sans tracking-[1px] font-semibold mb-3 pb-2">Education</h3>
          <textarea
            name="education"
            placeholder="e.g. B.Sc. Accounting – NYU (2014)"
            value={formData.education}
            onChange={handleChange}
            className="border  border-[#d3d3d3] px-4 py-2 rounded w-full"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-[#004AAC] text-white px-8 py-2 rounded-full hover:bg-[#003080] transition"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
