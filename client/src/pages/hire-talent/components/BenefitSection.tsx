const BenefitSection = () => {
  return (
    <div>
      {/* Benefits Section */}
      <section className="py-14 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold font-inter text-[#004AAC]">Why Hire Through Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Verified Experts", desc: "Work with certified accountants and finance professionals." },
            { title: "Flexible Hiring", desc: "Freelance, part-time, or full-time – we’ve got you covered." },
            { title: "Industry Experience", desc: "Talent with experience across various industries." },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold font-inter text-[#e1b04a] mb-2">{item.title}</h3>
              <p className="text-sm font-inter text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default BenefitSection
