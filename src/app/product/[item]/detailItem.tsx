'use client'
import React, { useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { toast } from 'react-hot-toast'
import { urlForImage } from '../../../../sanity/lib/image'
import { useGetProducts } from '@/components/Navbar'

const DetailItem = ({ data }: any) => {
  let {products} = useGetProducts()
  const { userId, isSignedIn } = useAuth()
  let [loading, setLoading] = useState(false)
  const [qty, setQty] = useState(1)
  console.log(userId)

  const handleAddToCart = async () => {
    if (isSignedIn) {
      setLoading(true)
      let res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({
          product_id: data._id,
          quantity: qty,
          user_id: userId,
          product_category: data?.subCategory?.suitcategory,
          product_image: urlForImage(data.image[0]).url(),
          product_name: data.title,
          price:data?.price
        }),
      })
      let resJson = await res.json()
      setLoading(false)
      products()
      toast.success('Item added in your cart successfully!')
      // console.log(resJson)
    } else {
      toast.error('Please login!')
    }
  }

  return (
    <div className="md:w-[40%] w-full p-4">
      <h2 className="text-3xl font-bold">{data?.title}</h2>
      <p className="font-bold text-gray-400">
        {data?.subCategory?.suitcategory}
      </p>
      <h4 className="mt-12 font-bold">SELECT SIZE</h4>
      <div className="flex gap-x-5 mt-4">
        <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
          XS
        </button>
        <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
          S
        </button>
        <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
          M
        </button>
        <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
          L
        </button>
        <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
          XL
        </button>
      </div>
      <div className="flex items-center gap-x-3 mt-10">
        <h3 className="font-bold text-xl">Quantity:</h3>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => {
              if (qty > 1) {
                setQty(qty - 1)
              }
            }}
            className="w-[40px] flex justify-center items-center h-[40px] rounded-full border-2  "
          >
            -
          </button>
          <p>{qty}</p>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-[40px] flex justify-center items-center h-[40px] rounded-full border-2 "
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-12">
        <button
          className="flex items-center gap-x-2 bg-black py-3 px-6 rounded-md text-white"
          onClick={handleAddToCart}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <p>{loading ? 'adding...' : 'Add to cart'} </p>
        </button>
        <h2 className="text-xl font-bold ">${data?.price}</h2>
      </div>
    </div>
  )
}

export default DetailItem
