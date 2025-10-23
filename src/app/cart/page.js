"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [quantity,setQuantity] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart))
        } catch (error) {
          console.error('خطأ أثناء قراءة بيانات السلة:', error)
          setCartItems([])
        }
      }
    }
  }, [])
  // const add = () => {
  //   if(quantity >= 10){
  //   setQuantity(0)
  // }else{setQuantity(quantity +1)}
  // }
  // const back = () => {
  //   if(quantity <= 1){
  //     setQuantity(0)
  //   }else{quantity(quantity -1)}
  // }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛒 سلة المشتريات</h2>

      {cartItems.length > 0 ? (
        cartItems.map((item ,index) => (
          <div
            key={`${item.id}-${item.color} -${item.weight} -${item.image} -${index}`}
            className="border rounded-lg p-3 mb-3 shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price} EGP</p>
              <p className="text-gray-600">{item.color} </p>
              <p className="text-gray-600">{item.title} </p>
              <Image
  src={item.image}
  alt={item.image}
  width={100}
  height={100}
  className="object-contain"
/>
              <p className="text-gray-600">{item.weight} </p>
              <p className="text-gray-600">{item.type} </p>

              <p className="text-gray-600">{item.quantity} </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">السلة فارغة حالياً 🛍️</p>
      )}
    </div>
  )
}

export default CartPage
