"use client"
import React from 'react'
import { products } from "../products"
import {bestSells} from "../products"
import Image from 'next/image';
import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

function ProductsList() {
  
  
const handelCart = (product) => {
  const color = ["red"]
  const weight = ["30kg Pack"]
  const quantity = 1

  const item = {
    ...product,
    id: product.id,
    title:product.title,
    image:product.image,
    color:color,
    weight:weight,
    quantity:quantity
  }
  
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
  existingCart.push(item)

  const existingIndex = existingCart.findIndex(
    (data) =>
    data.id === item.id &&
    data.color === item.color&&
    data.weight === item.weight
  )
    if(existingCart !== -1){
      existingCart[existingIndex].quantity += Number(item.quantity) 

    }else{existingCart.push(item)}

  localStorage.setItem("cart", JSON.stringify(existingCart))
  alert("تمت الاضافه")

  if(existingCart !== -1){
    
  }
}

  return (
    <div className='pl-[50px] max-[600px]:relative bottom-12'>
      <div className='flex justify-between w-[97%] max-[900px]:flex-col '>
        <h1 className='font-bold text-[32px] text-[#253D4E] '>Popular Products</h1>
        <div  className='flex flex-wrap  gap-[20px] font-medium'>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">All</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">Milks & Dairies</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">Coffes & Teas</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">Pet Foods</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">HoMeatsme</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">Vegetables</Link>
        <Link href="/" className="hover:text-[#F53E32] transition duration-300">Fruits</Link>

        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-[24px] w-full '>
        {products.map((data) => (
          <Link href={`/${data.id}`}
            key={data.id} 
            className='w-[268px] h-[405px] bg-white rounded-[15px] border border-gray-200 shadow-sm p-3 flex flex-col justify-between relative transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-xl   '
          >
            {/* Badge */}
            {data.tag && (
              <span 
                className={`
                  absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-md text-white
                  ${data.tag === "Hot" ? "bg-red-500" : ""}
                  ${data.tag === "Sale" ? "bg-blue-500" : ""}
                  ${data.tag === "New" ? "bg-green-500" : ""}
                `}
              >
                {data.tag}
              </span>
            )}

            {/* Product Image */}
            <div className="flex justify-center items-center h-[200px]">
              <Image 
                src={data.image} 
                alt={data.title} 
                width={180} 
                height={180} 
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 px-2">
              <p className="text-sm text-gray-400">{data.category}</p>
              <p className="font-medium text-gray-700">{data.title}</p>
              <p className="text-yellow-500 text-sm">⭐ {data.rating}</p>
              <p className="text-xs text-gray-400">By {data.brand}</p>
            </div>

            {/* Price + Button */}
            <div className="flex justify-between items-center mt-3 px-2">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-green-600">${data.price}</span>
                {data.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">${data.oldPrice}</span>
                )}
              </div>
              <button
              onClick={(e) => {
                e.preventDefault(""),
                handelCart(data)
              }
                
              }
              className="w-[84px] h-[36px] bg-red-500 text-white text-sm font-medium px-4 py-2 flex gap-1 rounded-md hover:bg-red-600 transition">
               <LuShoppingCart className='mt-[2px]' /> Add
              </button>
            </div>
          </Link>
        ))}
      </div>
      <br></br>
      <br></br>
      <div className='flex justify-between  w-[97%] max-[900px]:flex-wrap'>
        <h1 className='font-bold text-[32px] text-[#253D4E] '>Daily Best Sells</h1>
        <div className='flex gap-5'>
          <Link href="#" className="hover:text-[#F53E32] transition duration-300">Featured</Link> 
          <Link href="#" className="hover:text-[#F53E32] transition duration-300">Popular</Link> 
          <Link href="#" className="hover:text-[#F53E32] transition duration-300">New added</Link> 

        </div>
      </div>
        <div className='flex gap-4 max-[900px]:flex-wrap justify-center'>
          <div className='w-[508px] h-[350px] mt-[40px] rounded-[15px] bg-amber-100 max-[900px]:'>
          <Image src="/banner11.svg" width={508} height={580} alt='rt'></Image>
          </div>
          <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}    
        spaceBetween={0}     
        className="mySwiper   mt-6 max-[900px]:mt-[120px] "
        breakpoints={{
          1200: {slidesPerView:4},
          800: {slidesPerView:3},
          550: {slidesPerView:2},
          300: {slidesPerView:1},
        }}
      >
        {bestSells.map((data) => (
          <SwiperSlide key={data.id}>
            <Link
              href={`/${data.id}`}
              className="w-[268px] h-[405px] bg-white rounded-[15px] border border-gray-200 shadow-sm p-3 flex flex-col justify-between relative "
            >
              {/* Badge */}
              {data.tag && (
                <span
                  className={`
                    absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-md text-white
                    ${data.tag === "Save 33%" ? "bg-[#3BB77E]" : ""}
                    ${data.tag === "Sale" ? "bg-blue-500" : ""}
                    ${data.tag === "Save 15%" ? "bg-[#F74B81]" : ""}
                    ${data.tag === "Best sale" ? "bg-[#F59758]" : ""}
                    ${data.tag === "Save 15%" ? "bg-[#F59758]" : ""}
                  `}
                >
                  {data.tag}
                </span>
              )}

              {/* Product Image */}
              <div className="flex justify-center items-center h-[200px]">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 px-2">
                <p className="text-sm text-gray-400">{data.category}</p>
                <p className="font-medium text-gray-700">{data.title}</p>
                <p className="text-yellow-500 text-sm">⭐ {data.rating}</p>
                <p className="text-xs text-gray-400">By {data.brand}</p>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-3 px-2">
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-green-600">${data.price}</span>
                  {data.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">${data.oldPrice}</span>
                  )}
                </div>
                <button 
                onClick={(e) => {
                  e.preventDefault(''),
                  handelCart(data)
                }}
                className="w-[84px] h-[36px] bg-red-500 text-white text-sm font-medium px-4 py-2 flex gap-1 rounded-md hover:bg-red-600 transition">
                  <LuShoppingCart className="mt-[2px]" /> Add
                </button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  )
}

export default ProductsList
