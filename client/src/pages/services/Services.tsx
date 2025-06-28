import ServicesHeroSection from './components/ServicesHeroSection'
import OUrServicesSection from './components/OurServicesSection'
import OurHomeServices from '../home/components/OurHomeServices'
import HomeTestimonialSection from '../home/components/HomeTestimonialSection'
import Footer from '../../components/footer/Footer'
import HowItWorks from '../home/components/HowItWorks'
import WhatWeAre from '../home/components/WhatWeAre'
import Newsletter from '../home/components/Newsletter'
import WhyChooseUs from '../home/components/WhyChoose'

const Services = () => {
  return (
   <>
   <ServicesHeroSection />
   <OUrServicesSection />
   <OurHomeServices />
   <HomeTestimonialSection />
   <HowItWorks />
   <WhatWeAre /> 
   <WhyChooseUs />
   <Newsletter />
   <Footer />
   </>
  )
}

export default Services
