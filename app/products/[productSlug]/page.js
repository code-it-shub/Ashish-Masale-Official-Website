'use client';

import { usePathname } from "next/navigation";
import Footer from "@components/Footer";
import Image from "next/image";
import dynamic from "next/dynamic"; 

const page = () => {
  var data =
    '{"kitchenMasale": [{"name": "Anardana","imageUrl": "/assets/products/anardana.png"},{"name": "Biryani","imageUrl": "/assets/products/biryani.png"},{"name": "chana","imageUrl": "/assets/products/channa.png"},{"name": "chowmein","imageUrl": "/assets/products/chowmein.png"},{"name": "chat","imageUrl": "/assets/products/chat.png"},{"name": "Daalka masala","imageUrl": "/assets/products/dalkamasala.png"},{"name": "Degi mirchhh","imageUrl": "/assets/products/degimirchhh.png"},{"name": "Garam masala","imageUrl": "/assets/products/garammasala.png"},{"name": "Golgappe","imageUrl": "/assets/products/golgappe.png"},{"name": "Jaljeera","imageUrl": "/assets/products/jaljeera.png"},{"name": "Kalimirch","imageUrl": "/assets/products/kalimirch.png"},{"name": "Kashmirilal mirch","imageUrl": "/assets/products/kashmirilalmirch.png"},{"name": "Kitchen king","imageUrl": "/assets/products/kitchenking.png"},{"name": "Pasta","imageUrl": "/assets/products/pasta.png"},{"name": "Pavbhaji","imageUrl": "/assets/products/pavbhaji.png"},{"name": "Pilimirch","imageUrl": "/assets/products/pilimirch.png"},{"name": "Raita","imageUrl": "/assets/products/raita.png"},{"name": "Safed Mirch","imageUrl": "/assets/products/safedmirch.png"},{"name": "Sambhar","imageUrl": "/assets/products/sambhar.png"},{"name": "Sauf","imageUrl": "/assets/products/sauf.png"},{"name": "Shahipaneer","imageUrl": "/assets/products/shahipaneer.png"},{"name": "Sont","imageUrl": "/assets/products/sonth.png"}],"snacksandkachri": [{"name": "Noodles","imageUrl": ""},{"name": "Thai chili(Peri Peri)","imageUrl": ""},{"name": "Punjabi tadka","imageUrl": ""},{"name": "Tomato Fry","imageUrl": ""},{"name": "Lehsun Fry","imageUrl": ""},{"name": "Franky Pasta tadka","imageUrl": ""},{"name": "Penny Pasta","imageUrl": ""},{"name": "Chilly Pasta","imageUrl": ""},{"name": "Aam Achari","imageUrl": ""},{"name": "Nimbu Achari","imageUrl": ""},{"name": "Sweet Onion","imageUrl": ""},{"name": "Sweet Garlic","imageUrl": ""},{"name": "Spicy Onion","imageUrl": ""},{"name": "Mad Angles","imageUrl": ""},{"name": "Pasta Kabab","imageUrl": ""},{"name": "M.G 2 Masala ","imageUrl": ""},{"name": "Magic Masala","imageUrl": ""},{"name": "Cocktail Masala","imageUrl": ""},{"name": "Chili Chowmein","imageUrl": ""},{"name": "Jeera Papad","imageUrl": ""},{"name": "Nimbu Daal","imageUrl": ""}],"polamasala": [{"name": "MM Masala","imageUrl": ""},{"name": "MM Red Pola","imageUrl": ""},{"name": "MM Masala","imageUrl": ""},{"name": "Chatpata Pola","imageUrl": ""},{"name": "Sweet Pola","imageUrl": ""},{"name": "Magic Pola","imageUrl": ""},{"name": "PT Pola","imageUrl": ""}],"krsticksmasale": [{"name": "Magic 2 KR Sticks","imageUrl": ""},{"name": "TDMD KR Sticks","imageUrl": ""},{"name": "Tomato KR Sticks","imageUrl": ""},{"name": "Munch KR Sticks","imageUrl": ""},{"name": "KKH KR Sticks","imageUrl": ""},{"name": "Magic-P KR Sticks","imageUrl": ""}],"chipsmasale": [{"name": "Tangy Tomato","imageUrl": ""},{"name": "Chilli Masala","imageUrl": ""},{"name": "Masala Magic","imageUrl": ""},{"name": "Creamy Onion","imageUrl": ""},{"name": "Salty Butter","imageUrl": ""},{"name": "Podina","imageUrl": ""}],"dehydratedmasale": [{"name": "Garlic Powder","imageUrl": ""},{"name": "Onion Powder","imageUrl": ""},{"name": "Tomato Powder","imageUrl": ""},{"name": "Potato Flakes","imageUrl": ""}],"popcornmasale": [{"name": "Tangy Tomato","imageUrl": ""},{"name": "Chilli Tomato","imageUrl": ""},{"name": "Masala Magic","imageUrl": ""},{"name": "Butter Popcorn","imageUrl": ""},{"name": "Podina","imageUrl": ""},{"name": "Chinese (MGP)","imageUrl": ""}],"namkeen": [{"name": "Navratan Red Mixture","imageUrl": ""},{"name": "Navratan Mixture","imageUrl": ""},{"name": "Heeng Mixture","imageUrl": ""},{"name": "Gadbad Mixture","imageUrl": ""},{"name": "Aloo Bhujia","imageUrl": ""},{"name": "Mixture Masala","imageUrl": ""},{"name": "Matar Masala","imageUrl": ""},{"name": "Heeng Chatni","imageUrl": ""},{"name": "Heeng Jeera","imageUrl": ""},{"name": "Punjabi Tadka Magic","imageUrl": ""},{"name": "Red Tasty","imageUrl": ""},{"name": "Yellow Tasty","imageUrl": ""},{"name": "Chana Dal","imageUrl": ""},{"name": "Chaat Masala","imageUrl": ""},{"name": "Jeera Papad","imageUrl": ""},{"name": "Kashmiri Mirch","imageUrl": ""},{"name": "Kashmiri Mirch","imageUrl": ""},{"name": "Garlic Bhelpuric","imageUrl": ""},{"name": "Special Bhelpuri","imageUrl": ""}]}';
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
        alt="kitchen"
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
                  <Image
                    width={200}
                    height={200}
                    className="object-cover mx-auto w-auto"
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
                      className="mr-2 h-4 w-4 lg:md:h-6 lg:md:w-6"
                      fill="none"
                      viewBox="0 0 20 20"
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

// export default page;
export default dynamic (() => Promise.resolve(page), {ssr: false})