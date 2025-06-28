import { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Images from '../../../components/contants/Images';


interface SlideData {
  image: string;
  title: string;
  content: string;
  buttonText: string;
}

const slidesData: SlideData[] = [
  {
    image: Images.HeroSectionHomeImgOne,
    title: "Professional Accounting Solutions for Growing Businesses",
    content: "Streamline your finances, focus on what matters most, and let us handle the numbers.",
    buttonText: "Get Started Today"
  },
  {
    image: Images.HeroSectionHomeImgTwo,
    title: "Accurate Bookkeeping for Financial Clarity",
    content: "Keep your financial records up to date with our expert bookkeeping services.",
    buttonText: "Hire Now"
  },
  {
    image: Images.HeroSectionHomeImgThree,
    title: "Your Trusted Partner for All Accounting Needs",
    content: "Expert accounting, personalized service, and the latest tools to keep you ahead.",
    buttonText: "Contact Us"
  },
  // Add more slides as needed
];

const HeroSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, 
    speed: 500, 
    fade: true,
    cssEase: 'ease-in-out',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440, // iPad Pro
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // iPad Air
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // iPad Mini
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#F0F0F0] opacity-100 w-full mx-auto py-16 lg:py-32 mt-4'>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
         <section key={index} className='flex flex-col-reverse md:flex-row items-center justify-center mt-2 px-4 md:px-8 lg:px-10'>
         <div className='relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
           <div className="text-center md:text-left lg:max-w-[600px]">
             <h1 className="font-poppins text-[#E1B04A] font-semibold text-xl md:text-3xl lg:text-5xl leading-snug md:leading-tight lg:leading-normal">
               {slide.title}
             </h1>
             <p className='text-[#646A73] tracking-wide mt-4 lg:mt-6 w-full md:w-4/5 font-inter font-light'>
               {slide.content}
             </p>
             <div className='mt-4'>
               <Link to="/register">
                 <button className="font-sans text-white bg-[#004AAC] hover:bg-[#2AA100] py-3 px-6 rounded-md">
                   {slide.buttonText}
                 </button>
               </Link>
             </div>
           </div>
           <div className='w-full lg:w-auto'>
             <img src={slide.image} alt={`slide-${index}`} className='rounded-lg object-cover w-full lg:w-[700px]' />
           </div>
         </div>
       </section>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;