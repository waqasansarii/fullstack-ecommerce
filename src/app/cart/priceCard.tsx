'use client'
import { CartItem } from '@/lib/type'
import React from 'react'

const PriceCard = ({ data }: { data: CartItem[] }) => {
  let countQty = data.reduce((acc: number, val: CartItem) => {
    // console.log(acc,val)
    let qty = acc + val.quantity
    return qty
  }, 0)

  let countPrice = data.reduce((acc: number, val: CartItem) => {
    // console.log(acc,val)
    let totalPrice = acc + val.quantity * val.price
    return totalPrice
  }, 0)

  return (
    <div className="lg:w-[30%] w-full p-5 rounded-md bg-blue-100/50">
      <h2 className="text-2xl font-bold">Order Summary</h2>
      <div className="flex justify-between items-center py-2">
        <h5 className="text-md font-bold">Quantity</h5>
        <p>{countQty} Products</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <h5 className="text-md font-bold">Total</h5>
        <p>${countPrice}</p>
      </div>
      <button className="bg-black py-2 px-5 rounded-lg w-full mt-3 text-white">
        Process to checkout
      </button>
    </div>
  )
}

export default PriceCard
