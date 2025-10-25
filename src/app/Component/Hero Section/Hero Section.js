

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";



function HeroSection() {
  return (
    <div className='flex flex-col max-[1000px]:mt-[150px] max-[550px]:justify-items-center-safe'>
  <div className='w-full h-[650px] mt-13 flex justify-around pt-[13%] gap-[px] bg-[#E6E6E6] max-[610px]:flex-col max-[510px]:p-[15px] max-[510px]:h-[460px] max-[510px]:w-full'>
        <div className='w-[500px] flex flex-col max-[510px]:w-[390px] max-[510px]:gap-[10px] max-[510px]:mt-[70px]'>
            <div>
            <span className='text-[20px] font-bold text-[#F53E32] underline max-[510px]:text-[16px]'> 100%</span>
            <span className='text-[#212529] text-[20px] font-bold max-[510px]:text-[16px]' > Organic Vegetables</span>

            </div>
            <p className='text-[#000000] font-bold text-[55px] max-[700px]:text-[45px] max-[510px]:text-[20px]'>The best way to stuff your wallet.</p>
            <p className='text-[#7A7A7A] font-medium text-[15px] max-[510px]:text-[7px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
            <div className='w-[450px] h-[64px] rounded-[50px] bg-[#FFFFFF] flex justify-between items-center mt-[45px] max-[510px]:w-[300px] max-[510px]:h-[49px] max-[510px]:mt-[13px]'>
               
 <MdOutlineEmail className='ml-[20px] w-[20px] h-[30px]' />
                <input   type='text' placeholder='Your emaill address' className='w-[232px]  outline-none h-[20px]' />
                <button className='w-[157px] h-[64px] rounded-[50px] text-[#FFFFFF] bg-[#3BB77E] max-[510px]:w-[130px] max-[510px]:h-[49px]'>Subscribe</button>
            </div>

        </div>
        <div className=''>
            <div className='flex   gap-[17px] max-[1060px]:flex-col  max-[610px]:flex-row max-[510px]:relative bottom-5'>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300 max-[510px]:w-[130px] max-[510px]:h-[35px] max-[510px]:text-[11px]'> <VscChromeClose className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 max-[510px]:w-[11px] max-[510px]:h-[11px]'  /> Shopping</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300 max-[510px]:w-[120px] max-[510px]:h-[35px] max-[510px]:text-[13px]'> <VscChromeClose className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 max-[510px]:w-[11px] max-[510px]:h-[11px]'  /> Recips</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300 max-[510px]:w-[120px] max-[510px]:h-[35px] max-[510px]:text-[13px]'><VscChromeClose  className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 max-[510px]:w-[11px] max-[510px]:h-[11px] ' /> News</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300 max-[510px]:w-[120px] max-[510px]:h-[35px] max-[510px]:text-[13px]'><VscChromeClose  className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 max-[510px]:w-[11px] max-[510px]:h-[11px] ' /> Food</Link>
            </div>
            <Image src="/1a.png" width={480} height={450} alt='1a' className='absolute bottom-[35px] left-260 max-[1300px]:hidden'></Image>
        </div>
    
    
    </div>
        <div className="w-full flex justify-center items-center gap-6 flex-wrap mt-20 px-4">
        {[
          {
            img: "/Ever.svg",
            text: "Everyday Fresh & Clean with Our Products",
          },
          {
            img: "/Make.svg",
            text: "Make your Breakfast Healthy and Easy",
          },
          {
            img: "/bann.svg",
            text: "Make your Breakfast Healthy and Easy",
          },
        ].map((banner, i) => (
          <Link
            key={i}
            href="#"
            className="relative bg-cover bg-center rounded-[10px] p-10 w-[350px] h-[250px] flex flex-col justify-center"
            style={{ backgroundImage: `url(${banner.img})` }}
          >
            <p className="font-bold text-[22px] text-[#253D4E] leading-snug">
              {banner.text}
            </p>
            <button className="w-[120px] h-[35px] bg-[#F53E32] text-white text-[12px] font-bold rounded mt-5 hover:bg-[#d8342b] transition">
              Shop Now
            </button>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default HeroSection