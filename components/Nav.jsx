"use client";
import Link from "next/link";
import "@components/nav.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".navbar");
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    const q = document.getElementById("dropdowni");
    const p = document.getElementById("butnMenu");
    q.classList.toggle("openMenu");
  };

  return (
    <nav
      className={`navbar lg:py-5 py-1 lg:h-[130px] h-[80px] ${
        scroll
          ? "navColored py-0 lg:h-[60px] transition-all shadow-2xl md:h-[50px] h-[42px] md:fixed sm:fixed top-0"
          : ""
      } w-screen  flex fixed top-0 transition-all duration-300 z-50 `}
    >
      <div className="left w-[30%] flex items-center justify-center">
        <Image
          src="/assets/logo/logo.png"
          height={170}
          width={170}
          alt="Ashish Masale logo"
          className={`logo ${
            scroll
              ? "lg:shrinkLogo lg:w-[130px] md:w-[100px] w-[130px]  lg:md:mt-6 mt-3 "
              : ""
          } transition-all duration-300 md:w-[160px] `}
        />
      </div>
      <div className="right w-[70%] lg:flex items-center pr-[10vw] justify-end hidden md:hidden">
        <ul className="flex gap-6 justify-end items-center">
          <li>
            <Link href="/" className="home hover:border-b-2 ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="products hover:border-b-2 ">
              Products
            </Link>
          </li>
          <li>
            <Link href="/aboutUs" className="aboutUs hover:border-b-2 ">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="https://recipeashishmasale.in/"
              className="recipe hover:border-b-2 "
            >
              Recipe
            </Link>
          </li>
          <li>
            <Link href="/contactUs" className="contactUs hover:border-b-2 ">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="https://www.amazon.in/stores/AshishMasale/page/7A2F16E6-83C5-41D1-B53C-FC34592C55D6?ref_=ast_bln"
              className="shopNow hover:border-b-2 "
            >
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
      <div className="active flex lg:hidden w-[70%] justify-end pr-8">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={handleClick}
          className={`${
            scroll ? "text-gray-800" : ""
          } inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg `}
          aria-controls="navbar-default"
          aria-expanded="false"
          id="butnMenu"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="closeMenu bg-white h-screen w-screen lg:hidden absolute top-0 transition-all flex flex-col"
        id="dropdowni"
      >
        <div className="w-screen p-5 flex justify-end">
          <button onClick={handleClick}>
            <Image
              src="/assets/icons/crossgif.gif"
              height={40}
              width={40}
              alt="gif"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-3 justify-center w-full items-center text-black text-[25px] font-bold mt-8">
          <li>
            <Link href="/" className="home hover:border-b-2 " onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="products hover:border-b-2 " onClick={handleClick}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/aboutUs" className="aboutUs hover:border-b-2 " onClick={handleClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="https://recipeashishmasale.in/"
              className="recipe hover:border-b-2 "
            >
              Recipe
            </Link>
          </li>
          <li>
            <Link href="/contactUs" className="contactUs hover:border-b-2 " onClick={handleClick}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="https://www.amazon.in/stores/AshishMasale/page/7A2F16E6-83C5-41D1-B53C-FC34592C55D6?ref_=ast_bln"
              className="shopNow hover:border-b-2 "
              onClick={handleClick}
            >
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
