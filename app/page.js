"use client";

import "@app/home.scss";
import Recipe from "@components/Recipe";
import Slider from "@components/Slider.jsx";
import Reel from "@components/Reel";
import { Parallax } from "react-parallax";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "@components/Footer";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bideo bg w-screen flex justify-center flex-col items-center overflow-hidden">
      <div className="video overflow-hidden">
        <video
          src="/assets/video/ashish-header.mp4"
          autoPlay
          loop
          muted
          className="bg-video w-screen "
        />
      </div>
      <Recipe />
      <Reel />
      <div className="roadmap w-screen lg:md:pl-11 lg:py-11 md:py-9 py-6 flex flex-col md:mb-1 lg:md:items-start items-center">
        <small className="lg:text-[38px] md:text-[34px] font-semibold text-white mb-11 text-[27px]">
          Farm to Farm process
        </small>
        <img
          src="/assets/images/roadmap.svg"
          className="image1 lg:my-[50px] md:my-[1px] w-[1230px] "
          data-aos="fade-up"
        />
        <div className="mob lg:md:hidden mb-10">
          <div className="w-screen flex flex-col justify-center items-center">
            <section className="flex flex-col items-center">
              <Image src="/assets/images/1.svg" width={128} height={128} data-aos="fade-up " alt="image"/>
              <small className="flex flex-col items-center text-center mt-[15px] " data-aos="fade-up">
                <h1 className="font-semibold text-[24px]" >Sourcing</h1>
                <small className="w-[332px] text-[14px] mt-[6px]">
                  <p>
                    Only the most genuine, expensive, and fresh variety of
                    spices are sourced ethically for Ashish Masale
                  </p>
                </small>
              </small>
            </section>
          </div>
          <div className="arrow flex justify-center my-6" data-aos="fade-up">
            <Image src="/assets/images/Arrow.svg" height={60} width={30} alt="image"/>
          </div>
          <div className="w-screen flex flex-col justify-center items-center">
            <section className="flex flex-col items-center">
              <Image src="/assets/images/2.svg" width={128} height={128} data-aos="fade-up" alt="image"/>
              <small className="flex flex-col items-center text-center mt-[15px] "data-aos="fade-up">
                <h1 className="font-semibold text-[24px]">Sorting</h1>
                <small className="w-[332px] text-[14px] mt-[6px]">
                  <p>
                    To Guarantee complete purity in every product, extraneous
                    elements are carefully separated using high-tech machinery
                  </p>
                </small>
              </small>
            </section>
          </div>
          <div className="arrow flex justify-center my-6" data-aos="fade-up" >
            <Image src="/assets/images/Arrow.svg" height={60} width={30} alt="im"/>
          </div>
          <div className="w-screen flex flex-col justify-center items-center">
            <section className="flex flex-col items-center">
              <Image src="/assets/images/3.svg" width={128} height={128} data-aos="fade-up" alt="image"/>
              <small className="flex flex-col items-center text-center mt-[15px] "data-aos="fade-up">
                <h1 className="font-semibold text-[24px]">Grinding</h1>
                <small className="w-[332px] text-[14px] mt-[6px]">
                  <p>
                    Low temperature milling is used to grind spices in order to
                    preserve the volatile oils that are already present and the
                    spices's orginial profile
                  </p>
                </small>
              </small>
            </section>
          </div>
          <div className="arrow flex justify-center my-6" data-aos="fade-up">
            <Image src="/assets/images/Arrow.svg" height={60} width={30} alt="ima"/>
          </div>
          <div className="w-screen flex flex-col justify-center items-center">
            <section className="flex flex-col items-center">
              <Image src="/assets/images/4.svg" width={128} height={128} data-aos="fade-up" alt="im"/>
              <small className="flex flex-col items-center text-center mt-[15px] " data-aos="fade-up">
                <h1 className="font-semibold text-[24px]">Roasting</h1>
                <small className="w-[332px] text-[14px] mt-[6px]">
                  <p>
                    The flavour and aroma of the spices are elevated by the
                    roasting process (Where applicable).
                  </p>
                </small>
              </small>
            </section>
          </div>
          <div className="arrow flex justify-center my-6" data-aos="fade-up">
            <Image src="/assets/images/Arrow.svg" height={60} width={30} alt="im"/>
          </div>
          <div className="w-screen flex flex-col justify-center items-center">
            <section className="flex flex-col items-center">
              <Image src="/assets/images/5.svg" width={128} height={128} data-aos="fade-up" alt="ima" />
              <small className="flex flex-col items-center text-center mt-[15px] " data-aos="fade-up">
                <h1 className="font-semibold text-[24px]">Packaging</h1>
                <small className="w-[332px] text-[14px] mt-[6px]">
                  <p>
                    Ashish Masale Zipper Packs are packed by highly advanced
                    automated pick-fill-seal machine. To stop oxidation and
                    moisture buildup inside the packs, high barrier packaging
                    material is used.
                  </p>
                </small>
              </small>
            </section>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:flex hidden">
        <Parallax
          strength={600}
          bgImage="assets/instagram/paralax.jpg"
          className=" w-screen lg:object-contain md:object-fill "
        >
          <div className="InstaPost h-screen flex flex-col items-center justify-center">
            <div className="heading flex justify-center w-screen items-start  mt-1 mb-5">
              <div className="left w-[50%] pl-10 flex flex-col justify-center items-start">
                <small className="title text-gray-700 text-[40px]  font-semibold ">
                  Follow the Flavors
                </small>
                <small className="w-[350px]">
                  <p className=" text-gray-700 text-[15px] ">
                    Explore our Instagram Journey of Tantalizing Indian Cuisine
                  </p>
                </small>
              </div>
              <div className="right w-[50%] flex justify-end pr-10 items-center pt-7 ">
                <a
                  href="https://www.instagram.com/ashish._.masale/"
                  className="flex gap-4"
                  target="_blank"
                >
                  <small className=" text-gray-700 text-[25px]  font-bold ">
                    @ashish._.masale
                  </small>
                  <button className="bg-[#0095F6] rounded-md text-white font-semibold p-2 transition-all duration-200 hover:scale-105">
                    Follow
                  </button>
                </a>
              </div>
            </div>
            <Slider />
          </div>
        </Parallax>
      </div>
      {/* for tablet */}
      <div className="lg:hidden md:flex hidden">
        <Parallax strength={600} bgImage="assets/instagram/paralax.jpg">
          <div className="InstaPost flex flex-col items-center justify-center">
            <div className="heading flex justify-center w-screen items-start  mt-5 mb-2">
              <div className="left w-[50%] pl-14 flex flex-col justify-center items-start">
                <small className="title text-gray-700 text-[32px] font-semibold mt-2">
                  Follow the Flavors
                </small>
                <small className="w-[350px]">
                  <p className=" text-gray-700 text-[13px]">
                    Explore our Instagram Journey of Tantalizing Indian Cuisine
                  </p>
                </small>
              </div>
              <div className="right w-[50%] flex justify-end pr-14 items-center pt-9">
                <a
                  href="https://www.instagram.com/ashish._.masale/"
                  className="flex gap-4"
                  target="_blank"
                >
                  <small className=" text-gray-700 text-[18px] font-bold ">
                    @ashish._.masale
                  </small>
                  <button className="bg-[#0095F6] rounded-md text-white font-semibold p-2 transition-all duration-200 hover:scale-105">
                    Follow
                  </button>
                </a>
              </div>
            </div>
            <Slider />
          </div>
        </Parallax>
      </div>
      {/* For mobile  */}
      <div className="mobpara lg:md:hidden flex">
        <Parallax strength={600} bgImage="assets/instagram/paralax.jpg">
          <div className="InstaPost flex flex-col items-center justify-center">
            <div className="heading flex justify-center w-screen items-start  mt-5 mb-4">
              <div className="left w-screen flex flex-col justify-center items-center">
                <small className="title text-gray-700 text-[27px] font-bold mt-2">
                  Follow the Flavors:
                </small>
                <small className="w-[260px] mt-0">
                  <p className=" text-gray-700 text-[16px] text-center font-semibold">
                    Explore our Instagram Journey of Tantalizing Indian Cuisine
                  </p>
                </small>
              </div>
            </div>
            <Slider />
            <div className="right w-screen flex justify-center items-center py-9">
                <a
                  href="https://www.instagram.com/ashish._.masale/"
                  className="flex flex-col gap-4"
                  target="_blank"
                >
                  <small className=" text-gray-700 text-[25px] font-bold flex items-center">
                    @ashish._.masale
                  </small>
                  <button className="bg-[#0095F6] rounded-md text-white font-semibold p-2 transition-all duration-200 hover:scale-105">
                    Follow
                  </button>
                </a>
              </div>
          </div>
        </Parallax>
      </div>
      <Footer />
    </div>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})