
const HireTalentForm = () => {
  return (
    <div>
         {/* Hire Form */}
      <section className="bg-[#F9FAFB] py-14 px-4 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#004AAC]">Ready to Hire?</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Fill out the form and we’ll match you with the right accounting professional.
          </p>
        </div>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Describe the talent you’re looking for..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#004AAC] text-white py-3 rounded-md hover:bg-[#e1b04a] hover:text-[#004AAC] font-semibold transition"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  )
}

export default HireTalentForm
