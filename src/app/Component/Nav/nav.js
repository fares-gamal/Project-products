"use client"
import { products, bestSells } from '../ProductCard/products';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiPhone, FiHeart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

function Nav() {
const [sersh,setSersh] = useState("")
const [show,setShow] = useState()

const allProducts = [...products, ...bestSells]
const sortedProducts = [...allProducts].sort((a,b) => a.title.localeCompare(b.title))
const binarySearch = ((arr, target) => {
  let low = 0
  let high = arr.length - 1
  while(low <= high) {
    const mid = Math.floor((low + high) /2)
    const midTitle = arr[mid].title.toLowerCase()
  const targetLower = target.toLowerCase()
    if (midTitle === targetLower) {
      return [arr[mid]]
      
    }else if(midTitle > targetLower){
      high = mid - 1
    }else{low = mid + 1}
  }
  return[]
})
const filteredProducts = (() => {
  if(!sersh)return[]
  const exact = binarySearch(sortedProducts , sersh)
  if(exact.length > 0) return exact
  return sortedProducts.filter((p) => p.title.toLowerCase().includes(sersh.toLowerCase())) 
})()



  return (
    <div className='fixed top-0 left-0 w-full  z-50 '>
     
      <div className='w-full h-[55px] bg-[#FFFFFF] shadow-2xs border-[#ddd5d5dd] flex justify-around items-center p-[1%] '>
        
            <div className="relative group  hidden max-[750px]:inline-block">
      <div 
      onClick={() => {setShow(!show)}}
      className="bg-white py-2 rounded-md shadow-lg hover:cursor-pointer flex justify-center items-center gap-4 px-4">
        
        <AiOutlineMenu className='text-3xl' />

      </div>
      <div className={`${show ? '' : 'hidden'} absolute left-0 mt-2 w-54 bg-white border border-gray-200  rounded-md shadow-lg `}>
        <ul className="p-4 space-y-1 flex flex-col ">
          <Link href="/" className="hover:text-[#F53E32] transition duration-300">Home</Link>
          <Link href="/" className="hover:text-[#F53E32] transition duration-300"> Category</Link>
          <Link href="/" className="hover:text-[#F53E32] transition duration-300"> Products</Link>
          <Link href="/" className="hover:text-[#F53E32] transition duration-300">Pages</Link>
          <Link href="/" className="hover:text-[#F53E32] transition duration-300">Blog</Link>
          <Link href="/" className="hover:text-[#F53E32] transition duration-300">Elements</Link>
        </ul>
      </div>
    </div>


        <div>
          <ol className='flex gap-[45px] font-medium max-[750px]:hidden'>
            <li>
              <Link href="/" className="hover:text-[#F53E32] transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#F53E32] transition duration-300">Category</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#F53E32] transition duration-300">Products</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F53E32] transition duration-300">Pages</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F53E32] transition duration-300">Blog</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F53E32] transition duration-300">Elements</Link>
            </li>
          </ol>
        </div>

        <div className='flex items-center gap-[5px] cursor-pointer hover:text-[#F53E32] transition duration-300'>
          <FiPhone className="hover:text-[#F53E32] transition duration-300 " />
          <Link href="tel:+201061058689" className='ml-[4px] hover:text-[#F53E32] transition duration-300'>
            Call me on the Phone
          </Link>
        </div>
      </div>

     
      <div className='w-full h-[86px] bg-[#FFFFFF] shadow-2xl flex justify-evenly items-center  max-[850px]:flex-wrap max-[1000px]:h-[132px] max-[550px]:h-[200px] '>
        <div>
          <Image src='/FoodTrove.svg' alt="Food Trove Logo " width={163} height={87} className='max-[700px]:w-[130px] h-[66px]' />
        </div>

       
        <div className='w-[600px] h-[45px] border-2 border-green-600 flex justify-between items-center mt-[20px] rounded-[8px] overflow-hidden  max-[700px]:h-[40px]  max-[1000px]:w-[400px]  max-[500px]:w-[350px] '>
          <input
            type='text'
            placeholder='Search For items...'
            className='w-[408px] h-[20px] outline-none px-3  max-[1000px]:w-[300px] max-[500px]:w-[140px] '
            value={sersh}
            onChange={(e) => setSersh(e.target.value)}
            
          />
          <div className='flex h-[43px]'>
            <select className='border border-green-600 h-[43px] px-2 outline-none max-[700px]:h-[40px]'>
              <option>All Categories</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Snacks</option>
            </select>
            <span className='bg-[#F53E32] hover:bg-[#d62c20] transition duration-300 rounded-r-[2px] flex justify-center items-center w-[45px] h-[43px] cursor-pointer  max-[700px]:h-[40px]'>
              <CiSearch className='w-[20px] h-[20px] text-[#FFFFFF]' />
            </span>
            {sersh && (
              <div  className="absolute bg-white shadow-lg rounded-md mt-2 w-[600px] max-[1000px]:w-[400px] max-[500px]:w-[350px] max-h-[300px] overflow-y-auto z-50">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                   <Link
          key={product.id}
          href={`${product.id}`}
          onClick={() => setSersh('')}
          className="flex items-center gap-3 p-2 hover:bg-gray-100 transition duration-200"
        >
          <Image src={product.image} alt={product.title} width={50} height={50} />
          <span>{product.title}</span>
        </Link>
            ))
              ) : ( 
                 <p className="p-2 text-gray-500">No products found</p>

             )}
              </div>
            )}
          </div>
        </div>

        
        <div className='flex gap-[20px] max-[500px]:mt-3'>
          <Link href="/Account" className='flex gap-2 items-center cursor-pointer hover:text-[#F53E32] transition duration-300'>
            <FaRegUser className='w-[21px] h-[21px]' />
            <span>Account</span>
          </Link>

          <Link href="/Wishlist" className='flex gap-2 items-center cursor-pointer hover:text-[#F53E32] transition duration-300'>
            <FiHeart className='w-[21px] h-[21px]' />
            <span>Wishlist</span>
          </Link>

          <Link href="/cart" className='flex gap-2 items-center cursor-pointer hover:text-[#F53E32] transition duration-300'>
            <LuShoppingCart className='w-[21px] h-[21px]' />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;









// const sortedProducts = [...allProducts].sort((a,b) => a.title.localeCompare(b.title   )) 

// const binarySearch = (product , target) => {
//   let low = 0
//   let high = product.length - 1
//   while (low <= high) {
//     const mid =  Math.floor((low + high) / 2)
//     const midTitle = product[mid].title.toLowerCase()
//     const targetLower = target.toLowerCase()
//     if (midTitle === targetLower) {
//       return [product[mid]] 
//     }else if(midTitle > targetLower){
//       high = mid - 1
//     }else {low = mid + 1 }
//   }
//   return[]
// }
// const filteredProducts = (() => {
//   if (!sersh) return []

//   // 1️⃣ محاولة البحث بالتطابق التام
//   const exact = binarySearch(sortedProducts, sersh)
//   if (exact.length > 0) return exact

//   // 2️⃣ لو مفيش تطابق تام → نبحث جزئياً
//   return sortedProducts.filter((p) =>
//     p.title.toLowerCase().includes(sersh.toLowerCase())
//   )
// })()