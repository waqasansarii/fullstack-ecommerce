'use client'
import { CartItem } from '@/lib/type'
import React from 'react'

const PriceCard = ({data}:{data:CartItem[]}) => {
  return (
    <div className='w-[30%] p-5 rounded-md bg-blue-100/50'>
        <h2 className='text-2xl font-bold'>Order Summary</h2>
        <div className='flex justify-between items-center py-2'>
            <h5 className='text-md font-bold'>Quantity</h5>
            <p>3 Products</p>
        </div>
        <div className='flex justify-between items-center py-2'>
            <h5 className='text-md font-bold'>Total</h5>
            <p>$1000</p>
        </div>
        <button className='bg-black py-2 px-5 rounded-lg w-full mt-3 text-white'>Process to checkout</button>
    </div>
  )
}

export default PriceCard