import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer lg:h-[335px] bg-gray-900 w-screen md:h-[280px] h-auto'>
        <div className="uper flex  h-[90%] my-5 lg:md:my-0 ">
        <div className="left flex w-[50%] border-r-[1px]  border-gray-400  items-start lg:pl-8 md:pl-5 lg:md:gap-11 gap-3 my-auto ">
            <div className="innerleft flex flex-col lg:gap-4 md:gap-2 pl-3">
                <h1 className='lg:text-[22px] font-semibold md:text-[19px] text-[15px]'>Come Visit</h1>
                <small className='lg:w-[300px] md:text-[12px] md:w-[200px] lg:text-[15px] text-[8px] w-[100px]'>34/52-M-33/B-4 Anurag nagar, Balkeshwar Rd, Kamla Nagar<br/> Agra <br/> Uttar Pradesh 282005</small>
            </div>
            <div className="innerright w-[120px] lg:md:w-[200px]">
                <h1 className='lg:text-[22px] md:text-[19px] text-[13px] font-semibold'>Contact Us</h1>
                <small id="sec"><a href={`tel:+91 5623581325`} className='md:text-[12px] lg:text-[15px] text-[8px]'>+91 5623581325</a></small>
            </div>
        </div>
        <div className="right flex  lg:md:w-[50%] w-full items-start lg:md:pl-8 pl-4 lg:md:gap-12 gap-3 my-auto">
            <div className="inerleft flex flex-col lg:md:gap-4 gap-2 w-[50%]">
            <h1 className='lg:text-[22px] font-semibold md:text-[19px] text-[15px]'>Quick Links</h1>
            <span className='flex flex-col lg:gap-1  md:gap-0 lg:md:text-[15px] text-[10px]' >
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/aboutUs'>About Us</Link>
            <Link href='/recipe'>Recipe</Link>
            <Link href='/contactUs'>Contact Us</Link>
            <Link href='/'>Shop Now</Link>
            </span>
            </div>
            <div className="inerright">
            <h1 className='lg:md:text-[22px] font-semibold text-[13px]'>Follow Us</h1>
            <ul className='flex lg:md:gap-7 gap-2 lg:md:mt-5 mt-2 lg:md:flex-row flex-col'>
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
            </div>

        </div>
        </div>
        <div className="lower h-[10%] flex justify-center items-center my-4 lg:md:my-0">
            <small>	&#169; Ashish Masala 2022 All rights reserved. </small>
        </div>
    </div>
  )
}

export default Footer