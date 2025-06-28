import AboutUsHeroSection from './components/AboutUsHeroSection'
import AboutUsWhoWeAreSection from './components/AboutUsWhoWeAreSection'
import AboutUsValueSection from './components/AboutUsValueSection'
import WhatWeAre from '../home/components/WhatWeAre'
import OurTeam from './components/OurTeam'
import WhyChooseUs from '../home/components/WhyChoose'
import Footer from '../../components/footer/Footer'
import Newsletter from '../home/components/Newsletter'

const AboutUs = () => {
  return (
    <>
    <AboutUsHeroSection />
    <AboutUsWhoWeAreSection />
    <AboutUsValueSection />
    <WhatWeAre />
    <OurTeam />
    <WhyChooseUs />
    <Newsletter />
    <Footer />
    </>
  )
}

export default AboutUs
