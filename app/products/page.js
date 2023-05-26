import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@components/Footer";

const page = () => {
  return (
    <div className="flex justify-center flex-col items-center w-screen overflow-x-hidden">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 mx-auto gap-6 mt-[170px] mb-10 ">
        <div className="flex justify-center">
          <Link href='products/kitchenMasale' className="flex justify-center"
          >
            <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
                <Image
                  src="/assets/products.jpg"
                  height={370}
                  width={370}
                  alt="Kitchen Masala"
                  className="rounded-xl hover:scale-150 hover:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.9)] transition-all duration-[3s] ease-out"
                />
                <small className="text-[39px] font-semibold absolute top-[40%] "><h1 >Kitchen Masala</h1></small>
            </div>
            </Link>
            {/* <div className="rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] object-contain hover:bg-black hover:bg-opacity-30 hover:text-red-500 absolute top-0 flex justify-center items-end transition-all duration-150">
              <h1 className="text-[39px] font-semibold">Kitchen Masala</h1>
            </div> */}
        </div>
        <div className="flex justify-center">
        <Link href='products/snacksandkachri' className="flex justify-center"
          >
          <div className="shadow-3xl  rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/snacks.jpg"
              height={370}
              width={370}
              alt="Snaks and kachri masale"
              className="rounded-xl hover:scale-150  transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >Snacks And Kachri Masale</h1></small>
          </div>
        </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/namkeen' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/namkeen.webp"
              height={370}
              width={370}
              alt="Namkeen masale"
              className="rounded-xl hover:scale-150 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >Namkeen</h1></small>
          </div>
        </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/polamasala' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%]  h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/pola.jpg"
              height={370}
              width={370}
              alt="Poha Masala"
              className="rounded-xl hover:scale-150 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >Pola Masala</h1></small>
          </div>
          </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/krsticksmasale' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/kr.jpg"
              height={370}
              width={370}
              alt="Kr stick  Masala"
              className="scale-150 rounded-xl hover:scale-175 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >KR Sticks Masale</h1></small>
          </div>
          </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/chipsmasale' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/chips.jpg"
              height={370}
              width={370}
              alt="Chips Masala"
              className="rounded-xl hover:scale-150 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >Chips Masale</h1></small>
          </div>
          </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/dehydratedmasale' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/dehydrated.jpg"
              height={370}
              width={370}
              alt="popcorn Masala"
              className="rounded-xl scale-125 hover:scale-150 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-4"><h1 >Dehydrated Masale</h1></small>
          </div>
          </Link>
        </div>
        <div className="flex justify-center">
        <Link href='products/popcornmasale' className="flex justify-center"
          >
          <div className="shadow-3xl rounded-xl overflow-hidden lg:md:h-[277px] lg:md:w-[370px] w-[90%] h-[200px] flex justify-center flex-col items-center relative">
            <Image
              src="/assets/popcorn.jpg"
              height={370}
              width={370}
              alt="popcorn Masala"
              className="rounded-xl hover:scale-150 transition-all duration-[3s] ease-out"
            />
            <small className="text-[39px] font-semibold absolute top-[40%] p-1 "><h1 >Popcorn Masale</h1></small>
          </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
