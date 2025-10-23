

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";



function HeroSection() {
  return (
    <div>
  <div className='w-full h-[650px] mt-13 flex justify-around pt-[13%] gap-[px] bg-[#E6E6E6]'>
        <div className='w-[500px]'>
            <div>
            <span className='text-[20px] font-bold text-[#F53E32] underline'> 100%</span>
            <span className='text-[#212529] text-[20px] font-bold ' > Organic Vegetables</span>

            </div>
            <p className='text-[#000000] font-bold text-[55px]'>The best way to stuff your wallet.</p>
            <p className='text-[#7A7A7A] font-medium text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
            <div className='w-[450] h-[64] rounded-[50px] bg-[#FFFFFF] flex justify-between items-center mt-[45px]'>
               
 <MdOutlineEmail className='ml-[20px] w-[20px] h-[30px]' />
                <input   type='text' placeholder='Your emaill address' className='w-[232px]  outline-none h-[20px]' />
                <button className='w-[157px] h-[64px] rounded-[50px] text-[#FFFFFF] bg-[#3BB77E]'>Subscribe</button>
            </div>

        </div>
        <div className=''>
            <div className='flex gap-[17px]'>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300'> <VscChromeClose className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300'  /> Shopping</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300'> <VscChromeClose className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300'  /> Recips</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300'><VscChromeClose  className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 ' /> News</Link>
                <Link href='#' className='w-[139px] h-[46px] flex justify-center items-center text-center gap-[10px] text-[#3BB77E] bg-[#FFFFFF] font-bold text-[17px]  rounded-[30px] hover:bg-[#253d4eae] transition duration-300'><VscChromeClose  className='w-[16px] h-[16px] text-[#253D4E]  hover:text-[#F53E32] transition duration-300 ' /> Food</Link>
            </div>
            <Image src="/1a.png" width={480} height={450} alt='1a' className='absolute bottom-[35px] left-260'></Image>
        </div>
    
    
    </div>
    <div className='w-full h-[310px] flex justify-center items-center gap-[23px]'>
<Link href="#" className='w-[512px] h-[307px] bg-[url("/Ever.svg")] rounded-[10px] py-[79px] px-[50px] mt-[75px] ml-[50px]  '>
<div className=''>
 <div className='w-[225px] h-[100px]'>
       <p className='font-bold text-[24px] text-[#253D4E]'>Everyday Fresh &
Clean with Our
Products</p>
 </div>
<button className='w-[113px] h-[31px] bg-[#F53E32] font-bold text-[#FFFFFF] text-[12px] rounded-[4px] mt-[24px]'>Shop Now</button></div>

</Link>
<Link href="#" className='w-[512px] h-[307px] bg-[url("/Make.svg")] rounded-[10px] py-[79px] px-[50px] mt-[75px] '>
<div className=''>
 <div className='w-[225px] h-[100px]'>
       <p className='font-bold text-[22px]  text-[#253D4E]'>Make your Breakfast
Healthy and Easy</p>
 </div>
<button className='w-[113px] h-[31px] bg-[#F53E32] text-[#FFFFFF] text-[12px] font-bold rounded-[4px] mt-[24px] '>Shop Now</button></div>

</Link>
<Link href="#" className='w-[512px] h-[307px] bg-[url("/bann.svg")] rounded-[10px] py-[79px] px-[50px] mt-[75px] mr-[50px] '>
<div className=''>
 <div className='w-[225px] h-[100px]'>
       <p className='font-bold text-[22px]  text-[#253D4E]'>Make your Breakfast
Healthy and Easy</p>
 </div>
<button className='w-[113px] h-[31px] bg-[#F53E32] text-[#FFFFFF] text-[12px] font-bold rounded-[4px] mt-[24px] '>Shop Now</button></div>

</Link >
    </div>

    </div>
  )
}

export default HeroSection