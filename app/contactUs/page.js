import Footer from "@components/Footer";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen ">
      <div className="flex h-[50vh] mt-[15vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.858874507922!2d78.02770377513826!3d27.223580276463327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747a07db41d135%3A0xeb36aaa027c26bd9!2sAshish%20Masale%20(Singhal%20Grah%20Udhyog%20Pvt.%20Ltd.%20)!5e0!3m2!1sen!2sin!4v1685033472207!5m2!1sen!2sin"
          style={{ border: "0",width: '100vw', height: '600px' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="form lg:md:w-[80%] w-[94%] lg:md:flex flex lg:md:flex-row flex-col shadow-3xl text-black my-10 ">
        <div className="left lg:md:w-[40%] w-full bg-[#262626] text-[white] flex justify-center lg:md:p-[40px] p-[20px]">
          <div className="lg:md:w-[80%] w-[92%]">
            <section className="lg:md:mb-[50px] mb-[25px] mt-3">
              <h1 className="lg:md:text-[37px] text-[25px] font-bold">Contact Us</h1>
            </section>
            <section>
              <small className="lg:md:py-3 py-2">
                <h2 className="lg:md:text-[20px] text-[17px] font-semibold">Ashish Masala</h2>
              </small>
              <small>
                <p className="lg:md:text-[14px] lg:md:py-3 py-1">
                  34/52-M-33/B-4 Anurag nagar, Balkeshwar Rd, Kamla Nagar, Agra,
                  Uttar Pradesh 282005
                </p>
              </small>
            </section>
            <section className="my-8">
              <small className="flex flex-col">
                <small id="sec">
                  <a href={`tel:+91 5623581325`} className="md:text-[17px]">
                    +91 5623581325
                  </a>
                </small>
                <a href="info@ashishmasale.com" className="md:text-[15px]">
                  info@ashishmasale.com
                </a>
              </small>
            </section>
            <section>
              <h1 className="text-[20px] font-bold mt-10">Follow Us</h1>
              <ul className='flex lg:md:gap-7 gap-2 lg:md:mt-5 mt-4'>
                <li>
                    <a href="https://www.facebook.com/ashishmasaleagra"><Image src="/assets/social/fb.png" height={40} width={40} alt='social media ' className='lg:md:w-[40px] lg:md:h-[40px] w-[25px] h-[25px]'/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ashish._.masale/?hl=en"><Image src="/assets/social/insta.png" height={40} width={40} alt='social media' className='lg:md:w-[40px] lg:md:h-[40px] w-[25px] h-[25px]'/></a>
                </li>
                <li>
                    <a href="#"><Image src="/assets/social/youtube.png" height={40} width={40} alt='social media' className='lg:md:w-[40px] lg:md:h-[40px] w-[25px] h-[25px]'/></a>
                </li>
            </ul>
            </section>
          </div>
        </div>
        <div className="right lg:md:w-[60%] w-full flex justify-center lg:md:p-[40px] p-[20px] bg-white ">
          <div className=" lg:md:w-[90%] w-full">
            <div>
              <h1 className="font-semibold lg:md:text-[40px] text-[28px]">
                Have a query or concern?
              </h1>
              <p className="lg:md:text-[17px] text-[14px]">
                Kindly fill and submit the form below.
              </p>
            </div>
            <form method="POST">
              <div className="Name flex flex-wrap mt-6 lg:md:mb-6 mb-2">
                <input
                  className="shadow appearance-nonee block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="full-name"
                  type="text"
                  name="full-name"
                  placeholder="Full Name*"
                  required
                />
              </div>
              <div className="flex flex-wrap -mx-3 lg:md:mb-6 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    class="shadow appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="City*"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="shadow appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="State*"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 lg:md:mb-6 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="City*"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <select
                    data-te-select-init
                    className="w-full h-[60%] text-gray-700"
                    required
                  >
                    <option value="1">-----</option>
                    <option value="2">Customer query</option>
                    <option value="3">Trade inquiry</option>
                    <option value="4">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 lg:mb-6 md:mb-0 mb-2">
                  <input
                    className="shadow appearance-nonee block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="shadow appearance-nonee block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone-number"
                    type="number"
                    name="phone-number"
                    placeholder="Phone Number*"
                    required
                  />
                </div>
              </div>
              <div className="">
                <input
                  className="shadow appearance-nonee block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  type="text"
                  name="message"
                  placeholder="Your Message*"
                  required
                />
              </div>
              <div className="w-full flex justify-center lg:md:my-6 my-3">
                <button
                  type="submit"
                  class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase bg-[#262626] leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
