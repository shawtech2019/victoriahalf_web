import React from "react";
import HireTalentHero from "./components/HiretalentHero";
import BenefitSection from "./components/BenefitSection";
import HireTalentForm from "./components/HireTalentForm";
import Footer from "../../components/footer/Footer";
import WhyChooseUs from "../home/components/WhyChoose";
import OurTeam from "../about/components/OurTeam";
import CandidateSection from "./components/CandidateSection";

const HireTalent: React.FC = () => {
  return (
   <>
   <HireTalentHero />
   <BenefitSection />
   <CandidateSection />
   <HireTalentForm />
   <OurTeam />
   <WhyChooseUs />
   <Footer />
   </>
  );
};

export default HireTalent;
