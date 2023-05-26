"use client";
import React from "react";
// import prodData from '@components/data.json'
import { useRouter, usePathname } from "next/navigation";
import Footer from "@components/Footer";
import Image from "next/image";

const page = () => {
  var data =
    '{"kitchenMasale": [{"name": "Anardana","imageUrl": "/assets/products/anardana.png"},{"name": "Biryani","imageUrl": "/assets/products/biryani.png"},{"name": "chana","imageUrl": "/assets/products/channa.png"},{"name": "chowmein","imageUrl": "/assets/products/chowmein.png"},{"name": "chat","imageUrl": "/assets/products/chat.png"},{"name": "Daalka masala","imageUrl": "/assets/products/dalkamasala.png"},{"name": "Degi mirchhh","imageUrl": "/assets/products/degimirchhh.png"},{"name": "Garam masala","imageUrl": "/assets/products/garammasala.png"},{"name": "Golgappe","imageUrl": "/assets/products/golgappe.png"},{"name": "Jaljeera","imageUrl": "/assets/products/jaljeera.png"},{"name": "Kalimirch","imageUrl": "/assets/products/kalimirch.png"},{"name": "Kashmirilal mirch","imageUrl": "/assets/products/kashmirilalmirch.png"},{"name": "Kitchen king","imageUrl": "/assets/products/kitchenking.png"},{"name": "Pasta","imageUrl": "/assets/products/pasta.png"},{"name": "Pavbhaji","imageUrl": "/assets/products/pavbhaji.png"},{"name": "Pilimirch","imageUrl": "/assets/products/pilimirch.png"},{"name": "Raita","imageUrl": "/assets/products/raita.png"},{"name": "Safed Mirch","imageUrl": "/assets/products/safedmirch.png"},{"name": "Sambhar","imageUrl": "/assets/products/sambhar.png"},{"name": "Sauf","imageUrl": "/assets/products/sauf.png"},{"name": "Shahipaneer","imageUrl": "/assets/products/shahipaneer.png"},{"name": "Sont","imageUrl": "/assets/products/sonth.png"}],"snacksandkachri": [{"name": "Noodles","imageUrl": "url"},{"name": "Thai chili(Peri Peri)","imageUrl": "url"},{"name": "Punjabi tadka","imageUrl": "url"},{"name": "Tomato Fry","imageUrl": "url"},{"name": "Lehsun Fry","imageUrl": "url"},{"name": "Franky Pasta tadka","imageUrl": "url"},{"name": "Penny Pasta","imageUrl": "url"},{"name": "Chilly Pasta","imageUrl": "url"},{"name": "Aam Achari","imageUrl": "url"},{"name": "Nimbu Achari","imageUrl": "url"},{"name": "Sweet Onion","imageUrl": "url"},{"name": "Sweet Garlic","imageUrl": "url"},{"name": "Spicy Onion","imageUrl": "url"},{"name": "Mad Angles","imageUrl": "url"},{"name": "Pasta Kabab","imageUrl": "url"},{"name": "M.G 2 Masala ","imageUrl": "url"},{"name": "Magic Masala","imageUrl": "url"},{"name": "Cocktail Masala","imageUrl": "url"},{"name": "Chili Chowmein","imageUrl": "url"},{"name": "Jeera Papad","imageUrl": "url"},{"name": "Nimbu Daal","imageUrl": "url"}],"polamasala": [{"name": "MM Masala","imageUrl": "url"},{"name": "MM Red Pola","imageUrl": "url"},{"name": "MM Masala","imageUrl": "url"},{"name": "Chatpata Pola","imageUrl": "url"},{"name": "Sweet Pola","imageUrl": "url"},{"name": "Magic Pola","imageUrl": "url"},{"name": "PT Pola","imageUrl": "url"}],"krsticksmasale": [{"name": "Magic 2 KR Sticks","imageUrl": "url"},{"name": "TDMD KR Sticks","imageUrl": "url"},{"name": "Tomato KR Sticks","imageUrl": "url"},{"name": "Munch KR Sticks","imageUrl": "url"},{"name": "KKH KR Sticks","imageUrl": "url"},{"name": "Magic-P KR Sticks","imageUrl": "url"}],"chipsmasale": [{"name": "Tangy Tomato","imageUrl": "url"},{"name": "Chilli Masala","imageUrl": "url"},{"name": "Masala Magic","imageUrl": "url"},{"name": "Creamy Onion","imageUrl": "url"},{"name": "Salty Butter","imageUrl": "url"},{"name": "Podina","imageUrl": "url"}],"dehydratedmasale": [{"name": "Garlic Powder","imageUrl": "url"},{"name": "Onion Powder","imageUrl": "url"},{"name": "Tomato Powder","imageUrl": "url"},{"name": "Potato Flakes","imageUrl": "url"}],"popcornmasale": [{"name": "Tangy Tomato","imageUrl": "url"},{"name": "Chilli Tomato","imageUrl": "url"},{"name": "Masala Magic","imageUrl": "url"},{"name": "Butter Popcorn","imageUrl": "url"},{"name": "Podina","imageUrl": "url"},{"name": "Chinese (MGP)","imageUrl": "url"}],"namkeen": [{"name": "Navratan Red Mixture","imageUrl": "url"},{"name": "Navratan Mixture","imageUrl": "url"},{"name": "Heeng Mixture","imageUrl": "url"},{"name": "Gadbad Mixture","imageUrl": "url"},{"name": "Aloo Bhujia","imageUrl": "url"},{"name": "Mixture Masala","imageUrl": "url"},{"name": "Matar Masala","imageUrl": "url"},{"name": "Heeng Chatni","imageUrl": "url"},{"name": "Heeng Jeera","imageUrl": "url"},{"name": "Punjabi Tadka Magic","imageUrl": "url"},{"name": "Red Tasty","imageUrl": "url"},{"name": "Yellow Tasty","imageUrl": "url"},{"name": "Chana Dal","imageUrl": "url"},{"name": "Chaat Masala","imageUrl": "url"},{"name": "Jeera Papad","imageUrl": "url"},{"name": "Kashmiri Mirch","imageUrl": "url"},{"name": "Kashmiri Mirch","imageUrl": "url"},{"name": "Garlic Bhelpuric","imageUrl": "url"},{"name": "Special Bhelpuri","imageUrl": "url"}]}';
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const set = JSON.parse(data)[path];
  return (
    <div className="flex justify-center flex-col items-center w-screen overflow-hidden">
      <div className="w-screen lg:h-[600px] md:h-[300px] h-[100px]">
        <Image
        src="/assets/posters/kitchenposter.png"
        height={1200}
        width={1980}
        className="object-contain "
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto lg:md:gap-6 gap-1 lg:mt-[20vh] md:mt-[40vh] mt-[100px] mb-10 ">
        {set.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <div className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover mx-auto"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </a>
                <div className="lg:md:mt-4 mt-2 px-5 pb-5 flex justify-center flex-col items-center gap-[14px]">
                  <a href="#">
                    <h5 className="lg:md:text-xl text-[15px] font-semibold tracking-tight text-slate-900">
                      {item.name}
                    </h5>
                  </a>
                  <a
                    href="https://www.amazon.in/stores/AshishMasale/page/7A2F16E6-83C5-41D1-B53C-FC34592C55D6?ref_=ast_bln"
                    className="flex shadow-lg items-center justify-center rounded-md bg-slate-900 lg:md:px-5 px-2 lg:md:py-2.5 py-1 text-center lg:md:text-sm text-[12px] font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default page;
