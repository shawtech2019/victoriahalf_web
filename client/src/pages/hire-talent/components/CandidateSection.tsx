import { useState } from "react";

const CandidateSection = () => {
  const [hasPaid, setHasPaid] = useState(false);

  const handlePayment = () => {
    // Simulate payment logic
    setHasPaid(true);
  };

  return (
    <div>
      {/* Talent Showcase Header */}
      <section className="bg-white py-14 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#004AAC]">
            Meet Available Talent
          </h2>
          {!hasPaid && (
            <div className="mt-4 text-gray-600">
              <p className="text-sm mb-2">Unlock detailed candidate profiles for just <strong>$5</strong>.</p>
              <button
                onClick={handlePayment}
                className="bg-[#ee009d] hover:bg-[#2AA100] text-white px-6 py-2 rounded-full transition duration-300"
              >
                Unlock Access
              </button>
            </div>
          )}
        </div>

        {/* Candidate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className={`relative bg-gray-100 rounded-xl p-6 shadow-lg transition duration-300 ${
                !hasPaid ? "backdrop-blur-sm overflow-hidden" : ""
              }`}
            >
              {/* Blurred Overlay */}
              {!hasPaid && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex items-center justify-center text-sm text-gray-700 font-medium rounded-xl">
                  <span>Locked - Please Pay to View</span>
                </div>
              )}

              {/* Candidate Info */}
              <div className={`${!hasPaid ? "opacity-30" : "opacity-100"} transition`}>
                <img
                  src={`https://randomuser.me/api/portraits/men/${id + 30}.jpg`}
                  alt="Talent"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#e1b04a] text-center">John Accountant</h3>
                <p className="text-sm text-gray-600 text-center mb-1">Tax Specialist</p>
                <p className="text-xs text-gray-500 text-center">5+ years experience | CPA Certified</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CandidateSection;
