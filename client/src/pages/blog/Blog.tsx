import Footer from '../../components/footer/Footer'
import Newsletter from '../home/components/Newsletter'
import WhyChooseUs from '../home/components/WhyChoose'
import BlogCardPostSection from './components/BlogCardPostSection'
import BlogHeroSection from './components/BlogHeroScetion'

const Blog = () => {
  return (
   <>
   <BlogHeroSection />
   <BlogCardPostSection />
   <WhyChooseUs />
   <Newsletter />
   <Footer />
   </>
  )
}

export default Blog
