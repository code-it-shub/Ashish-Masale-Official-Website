import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";



export default function Index() {
    return (
        <div className="container w-screen">
            <div className="flex items-center justify-center w-full h-full py-3 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={60} isIntrinsicHeight={true} totalSlides={9} visibleSlides={4} step={1} infinite={true} isPlaying={true} interval={3000} touchEnabled={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="hidden absolute z-30 left-0 ml-8   cursor-pointer " id="prev">
                        <Image
                            src='/assets/icons/left.svg'
                            width={40}
                            height={40}
                            alt="left"
                            className="bg-red"
                        />

                        </ButtonBack>
                        <div className="w-[98%] h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-9 md:gap-6 gap-10 items-center justify-start transition ease-out duration-700  ">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/e.jpg" alt="black chair and white table" className="object-cover object-center w-full " /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/q.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/w.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/r.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/t.jpg" alt="black chair and white table" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/y.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/u.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/i.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto transition-all duration-200 hover:scale-105 hover:opacity-70">
                                            <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/o.jpg" alt="black chair and white table" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="hidden absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <Image
                            src='/assets/icons/right.svg'
                            width={40}
                            height={40}
                            alt="left"
                            className="bg-red"
                        />
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={60} isIntrinsicHeight={true} totalSlides={9} visibleSlides={3} step={1} infinite={true} isPlaying={true} interval={3000} >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/e.jpg" alt="black chair and white table" className="object-cover object-center w-full " /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/q.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/w.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/r.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/t.jpg" alt="black chair and white table" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/y.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/u.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/i.jpg" alt="sitting area" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <a href="https://www.instagram.com/ashish._.masale/"><img src="/assets/instagram/o.jpg" alt="black chair and white table" className="object-cover object-center w-full rounded-lg" /></a>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={9} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className=" h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/q.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/w.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/e.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/r.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/t.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/y.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/u.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/i.jpg" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="rounded-lg flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/assets/instagram/o.jpg" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 " id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
