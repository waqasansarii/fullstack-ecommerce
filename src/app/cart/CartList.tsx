'use client'
// import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Trash2 } from 'lucide-react'
import { CartItem } from '@/lib/type'

const CartList = ({ data }:{data:CartItem[]}) => {
    // console.log(data)
  return (
    <div className="w-[65%] p-4 rounded-lg bg-blue-100/20">
      {data?.length > 0 &&
        data?.map((val) => (
          <div
            key={val.product_id}
            className="flex justify-between items-start"
          >
            <div className="flex items-start gap-x-4">
              <div>
                <Image
                  src={val.product_image}
                  alt="abc"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl">{val.product_name}</h3>
                <h3 className="text-md font-bold text-gray-500">
                  {val.product_category}
                </h3>
                <p className="font-bold mt-2">${val.price}</p>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <button className="hover:bg-black hover:text-white p-2 rounded-md">
                <Trash2 className="" />
              </button>
              <h1 className="text-sm mt-3">Quantity : {val.quantity}</h1>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CartList
