"use client";
import "@components/nav.scss";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Reel = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const items = [
    "assets/reelvideo/1.mp4",
    "assets/reelvideo/2.mp4",
    "assets/reelvideo/3.mp4",
    "assets/reelvideo/4.mp4",
    "assets/reelvideo/5.mp4",
  ];
  const slides = [
    {
      url: 'assets/reelvideo/1.mp4',
    },
    {
      url: 'assets/reelvideo/2.mp4',  
    },
    {
      url: 'assets/reelvideo/3.mp4',    
    },
    {
      url: 'assets/reelvideo/4.mp4',    
    },
    {
      url: 'assets/reelvideo/5.mp4',    
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="reel lg:h-[954px] w-screen flex md:bg-contain md:h-[700px] h-[988px]">
      <div className="left lg:w-[50%] md:w-[60%] lg:md:h-[90%] h-[40%] flex flex-col justify-center items-end text-gray-800 ">
        <small
          className="lg:text-[48px] font-bold lg:w-[75%] md:w-[75%] leading-12 md:text-[32px] mb-4 w-auto text-[24px] lg:md:text-left text-center lg:pt-0 pt-[170px] md:pt-[460px]"
          data-aos="fade-up"
        >
          Spice Up Your Curlinary Adventures:
        </small>
        <small className="lg:w-[75%] lg:text-[32px] md:text-[20px] md:w-[75%] w-auto text-[16px]" data-aos="fade-up">
          <p>Delicious Recipes with Ashish Masala</p>
        </small>
      </div>
      <div className="right lg:w-[50%] md:w-[40%] flex justify-center items-center w-screen ">
        <div className="content1 lg:w-[341px] md:w-[240px] w-[261px] bg-white rounded-xl shadow-2xl transition-all duration-150 hover:scale-105  h-[500px] lg:md:h-auto flex" data-aos="fade-left">
          <div className="max-w-[1400px]  w-full m-auto lg:py-7 px-4 md:py-2 relative group flex flex-col ">
            <div className="w-full h-full bg-center bg-cover duration-500 ">
              <a href="https://www.instagram.com/ashish._.masale/reels/" target="_blank" ><video src={`${slides[currentIndex].url}`} className="w-[100%] lg:md:h-[500px] h-[450px]" autoPlay loop muted></video></a>
            </div>
            {/* Left Arrow */}
            <div className="block absolute lg:md:top-[94%] top-[100%] -translate-x-0 translate-y-[-50%] left-7 lg:text-[20px] md:text-[14px] rounded-full p-1 text-gray-700 cursor-pointer mt">
              {/* <BsChevronCompactLeft onClick={prevSlide} size={25} /> */}
              <button onClick={prevSlide} >Prev</button>
            </div>
            {/* Right Arrow */}
            <div className="block absolute lg:md:top-[94%] top-[100%]  -translate-x-0 translate-y-[-50%] right-7 lg:text-[20px] md:text-[14px] rounded-full p-1 text-gray-700 cursor-pointer">
              {/* <BsChevronCompactRight onClick={nextSlide} size={25} /> */}
              <button onClick={nextSlide}>Next</button>
            </div>
            <div className="space lg:h-[40px] md:h-[0px] h-[0px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reel;
