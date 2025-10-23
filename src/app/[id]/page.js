 "use client"

 
 import React, { use, useState } from 'react'
import { products,  bestSells } from '../Component/ProductCard/products'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

 function ProductDetails({params}) {
const { id } = use(params)
const productId = parseInt(id)
const product = products.find((p) => p.id === productId) || bestSells.find((b) => b.id === productId)
const [weight,setWeight] = useState("")
const [quantity,setQuantity] = useState(1)
const [color,setColor] = useState("")
const [price, setPrice] = useState(product?.price || 0)
const [type, setType] = useState("")
      const colors = [
  { name: "Blue", value: "blue", hex: "#6C9EFF" },
  { name: "Yellow", value: "yellow", hex: "#DEDE44" },
  { name: "Red", value: "red", hex: "#FB5555" },
  { name: "Green", value: "green", hex: "#64B496" },
]
const types =[
  { name: "Juice & Drinks", value: "Juice & Drinks", hex: "[20]" },
  { name: "Dairy & Milk", value: "Dairy & Milk", hex: "[54]" },
  { name: "Snack & Spice", value: "Snack & Spice", hex: "[64]" },
]
const Weights =[
   { name: "2kg Pack", value: "2kg Pack" },
  { name: "20kg Pack", value: "20kg Pack" },
  { name: "30kg Pack", value: "30kg Pack"},
]

 const handelCart = () => {
  if(!color || !weight || !type ) {
    alert("اختار النوع والوزن والون")
    return
  }
 

    const opjCart = {
      ...product,
      color,
      title:product.title,
      price,
      weight,
      type,
      quantity,
      image: product.image
      // image:bestSells.image
      
    }

  const existingCart = JSON.parse(localStorage.getItem("cart")|| "[]" )

  const existingIndex = existingCart.findIndex(
    (data) => 
      data.id === opjCart.id &&
      data.color === opjCart.color &&
      data.weight === opjCart.weight &&
      data .type === opjCart.type
      
   )

   if(existingIndex !== -1){
  existingCart[existingIndex].quantity += Number(opjCart.quantity)

}else{
  existingCart.push(opjCart)
}
localStorage.setItem("cart", JSON.stringify(existingCart) )
alert("تمت الاضافه")

}
const add = () => {
  if(quantity >= 10){
    setQuantity(0)

  }else{setQuantity(quantity +1)}
}
const back = () =>{
  if(quantity < 1){
    setQuantity(0)
  }else{setQuantity(quantity -1)}
}





if(!product){
  return(
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl text-red-600 font-bold"> Product not found</h1>
    <Link
      href="/"
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      ⬅ Back to Products
    </Link>
  </div>

  )
}
return(
  <div className='mt-[200px]'>
    <div className='flex gap-[50px]'>
      {/* التفصيل الوزن والون والسعر */}

<div className='w-[306px] h-[1000px] bg-[#F7F7F8] p-[27px]  '>
  <h1 className='text-[16px] text-[#2B2B2D] font-bold pb-[10px] '>product Category</h1>
  <hr className=' w-[90%] ml-[5px] text-[#6d5e5e39] pb-[20px]'></hr>
  {types.map((t) => (
    <div key={t.value} className="flex pt-[10px]">
      <input 
      type='radio'
      name='type'
      value={t.value}
      onChange={(e) => setType(e.target.value)}/>
    <label className="ml-2 text-[15px] text-[#7A7A7A]">{t.name}</label>

      <div className='ml-auto text-[15px] text-[#7A7A7A] '>
        <p>{t.hex}</p>
      </div>
    </div>
    
  ))}
  
  <h1 className='text-[16px] text-[#2B2B2D] font-bold pt-[30px] mt-[10px] '>Filter By Price</h1>
  <hr className=' w-[90%] ml-[5px] text-[#6d5e5e39]  pb-[10px]'></hr>
      <div >
            <input  type="range" 
            value={price}
            min={20}
            max={250}
            step="5"
            onChange={(e) => setPrice(e.target.value)}
            className="w-full accent-red-500" />
            <p className="mt-2">
              Price : <span className="text-red-500">${price} – $250</span>
            </p>
            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded">
              Filter
            </button>
          </div>
          
  <h1 className='text-[16px] text-[#2B2B2D] font-bold pt-[20px] '>product Category</h1>
  <hr className=' w-[90%] ml-[5px] text-[#6d5e5e39] mt-[10px]'></hr>
  {colors.map((c) => (
  <div key={c.value} className="flex pt-[10px]">
    <input
      type="radio"
      name="color"
      value={c.value}
      onChange={(e) => setColor(e.target.value)}
    />
    <label className="ml-2 text-[15px] text-[#7A7A7A]">{c.name}</label>
   <div
    className="ml-auto w-[20px] h-[20px] rounded-[5px]"
      style={{ backgroundColor: c.hex }}  >

   </div>
  </div>
))}
<h1 className='text-[16px] text-[#2B2B2D] font-bold pt-[20px] '>Weight</h1>
  <hr className=' w-[90%] ml-[5px] text-[#6d5e5e39] mt-[10px]'></hr>
  {Weights.map((w) => (
    <div key={w.value}  className="flex pt-[10px]">
      <input
      type='radio'
      name='Weight'
      value={w.value}
      onChange={(e) => setWeight(e.target.value)}/>
    <label className="ml-2 text-[15px] text-[#7A7A7A]">{w.name}</label>

    </div>
  ))}
</div>
      {/* الصوره والاسم والكميه وزرار العربه */}
      
        {/* الصور */}
        <div className='w-[430px]'>
          <div className='w-[430px] h-[430px] flex justify-center bg-[#84848423]'>
          <Image 
        src={product.image} 
         alt={product.title} 
        width={450} 
        height={470} 
         className="object-contain border- "
        />
        </div>
        <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4}    
        spaceBetween={0}     
        className="mySwiper mt-6"
      >
          {bestSells.map((d) => (
          <SwiperSlide key={d.id } >
            <Link href={`/${d.id}`} 
            className="w-[98px] h-[95px] bg-white rounded-[15px] border border-gray-200 shadow-sm p-3 flex flex-col justify-between relative">
             <div className="flex justify-center items-center h-[200px]">
          <Image
              src={d.image}
             alt={d.title}
             width={180}
             height={180}
             className="object-contain"
          />
         </div>
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
        
        {/* زرار العربه والاسم وتفاصيل */}
        <div className='w-[435px]'>
          <h1 className='text-[#121213] text-[16px] font-serif'>{product.title}</h1>
          <p className='text-[#7A7A7A] text-[14px] mt-[17px]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
            minus error doloribus saepe natus?</p>
            <hr className='text-[#E9E9E9] mt-[23px]'></hr>
          <div className='flex flex-col gap-[14px] mt-[20px]'>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Brand <span className='ml-[35px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>ESTA BETTERU CO</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Flavour <span className='ml-[25px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>Super Saver Pack</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Diet Type <span className='ml-[12px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>Vegetarian</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Weight <span className='ml-[30px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>200 Grams</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Speciality <span className='ml-[13.5px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>Gluten Free, Sugar Free</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Info <span className='ml-[57px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>Egg Free, Allergen-Free</span></p>
            <p className='flex gap-[10px] text-[#2B2B2D] text-[16px] font-bold '> Items <span className='ml-[47px] text-[#777777] font-serif'>:</span><span className='text-[#777777] font-serif'>1</span></p>
          </div>span
          <div className='flex items-center gap-2 mt-4'>


  <input 
    type='text'
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    className='w-10 h-14 text-center bg-[#FFFFFF] border rounded'
  />

  <div className='flex flex-col gap-1 '>
    <button 
    onClick={add} 
    className='w-[18px] h-[18px] pb-6 bg-[#FFFFFF] border  rounded'
  >+</button>
  
    <button 
    onClick={back} 
    className='w-[18px] h-[5px] pb-6  bg-[#FFFFFF] border   rounded'
  >-</button>
  </div>
</div>


<button onClick={ handelCart} className='w-[120px] h-13 text-amber-50 bg-amber-700'>add</button>
        
        {/* Description ,Information, Review */}
        <div></div>
        
        </div>
      
    </div>
  </div>
)
  
 }
 
 export default ProductDetails



















