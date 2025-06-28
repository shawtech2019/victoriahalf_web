import Footer from "../../components/footer/Footer"
import AboutUs from "./components/AboutUsHome"
import ConsultancySection from "./components/ConsultancySection"
import HeroSlider from "./components/HeroSection"
import HomeTestimonialSection from "./components/HomeTestimonialSection"
import HowItWorks from "./components/HowItWorks"
import Newsletter from "./components/Newsletter"
import OurHomeServices from "./components/OurHomeServices"
import OurTrustedClients from "./components/OurTrustedClients"
import WhatWeAre from "./components/WhatWeAre"
import WhyChooseUs from "./components/WhyChoose"
import CustomizedTraining from "./components/CustomizTraining"
// import WhoWeAreSection from "./components/WhoWeAreSection"


const Home = () => {
  return (
   <>
   <HeroSlider />
   <AboutUs />
   {/* <WhoWeAreSection /> */}
   <OurHomeServices />
   <OurTrustedClients />
   <HowItWorks />
   <CustomizedTraining />
   <ConsultancySection />
   <HomeTestimonialSection /> 
   <WhyChooseUs />
   <WhatWeAre />
   <Newsletter />
   <Footer />
   </>
  )
}

export default Home
