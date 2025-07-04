import React from "react";

const CandidateProfile = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#004AAC] to-[#0077B6] text-white px-6 py-8 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            alt="Candidate"
            className="w-28 h-28 rounded-full mx-auto border-4 border-white mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold">John Accountant</h2>
          <p className="text-sm">Senior Tax Consultant | CPA Certified</p>
          <p className="text-xs text-blue-100">New York, United States</p>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-6 text-gray-800">
          {/* Summary */}
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">Professional Summary</h3>
            <p className="text-sm">
              John is a detail-oriented and licensed CPA with 7+ years of experience in tax compliance,
              financial analysis, and audit support. Passionate about helping companies optimize their tax
              strategies and maintain regulatory compliance. Experienced with QuickBooks, SAP, and Xero.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">Core Skills</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "Tax Planning",
                "Financial Reporting",
                "Payroll Processing",
                "Budget Forecasting",
                "Auditing",
                "QuickBooks",
                "SAP",
                "GAAP Compliance",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-[#004AAC] px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">Certifications</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Certified Public Accountant (CPA) – 2018</li>
              <li>Certified Management Accountant (CMA) – 2020</li>
              <li>QuickBooks ProAdvisor – 2022</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">Work Experience</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Senior Accountant – Deloitte</p>
                <p className="text-gray-500 text-xs">2019 – Present</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Managed tax filings and audits for over 50 clients annually.</li>
                  <li>Led a team of 4 junior accountants and conducted training sessions.</li>
                  <li>Helped reduce client tax liability by an average of 12%.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Accountant – PwC</p>
                <p className="text-gray-500 text-xs">2016 – 2019</p>
                <ul className="list-disc list-inside mt-1">
                  <li>Supported monthly and annual closing processes.</li>
                  <li>Prepared balance sheets, profit and loss statements, and other reports.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold border-b pb-2 mb-2">Education</h3>
            <div className="text-sm">
              <p className="font-medium">B.Sc. in Accounting</p>
              <p className="text-gray-500 text-xs">New York University – Class of 2014</p>
            </div>
          </div>

          {/* Contact & Resume */}
          <div className="text-center pt-6 border-t">
            <p className="text-sm text-gray-600">📧 john.accountant@example.com</p>
            <p className="text-sm text-gray-600">📞 +1 (555) 123-4567</p>
            <a
              href="#"
              className="inline-block mt-4 bg-[#004AAC] text-white px-6 py-2 rounded-full hover:bg-[#003380] transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateProfile;
