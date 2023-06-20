'use client'
// import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { CartItem } from '@/lib/type'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useAuth } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'
import { deleteItem } from '@/store/slice'
import { toast } from 'react-hot-toast'
import Loader from '@/components/Loader'

const CartList = ({
  data,
}: // deleteProduct,
{
  data: CartItem[]
  // deleteProduct?: any
}) => {
  const { isSignedIn, userId } = useAuth()
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const selector = useAppSelector((state) => {
    return state.storeSlice
  })
  // console.log(selector)

  const deleteProduct = async (val: CartItem) => {
    setLoading(true)
    let resp = await fetch(
      `/api/cart?user_id=${userId}&&product_id=${val.product_id}`,
      {
        method: 'DELETE',
      },
    )
    let resJson = await resp.json()
    toast(resJson.message)
    dispatch(deleteItem(resJson.remainingItem))
    setLoading(false)
  }

  return (
    <>
      <div className="lg:w-[65%] w-full ">
        {!selector.loading ? (
          data.length > 0 ? (
            data?.map((val) => {
              if (loading) {
                return <Loader key={val.id} />
              }
              if (userId === val.user_id) {
                return (
                  <div
                    key={val.product_id}
                    className="flex justify-between items-start my-4 p-4  rounded-lg bg-blue-100/20"
                  >
                    <div className="flex items-start sm:flex-row flex-col gap-y-4 gap-x-4">
                      <div>
                        <Image
                          src={val.product_image}
                          alt="abc"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl">
                          {val.product_name}
                        </h3>
                        <h3 className="text-md font-bold text-gray-500">
                          {val.product_category}
                        </h3>
                        <p className="font-bold mt-2">${val.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                      <button
                        className="hover:bg-black hover:text-white p-2 rounded-md"
                        onClick={() => deleteProduct(val)}
                      >
                        <Trash2 className="" />
                      </button>
                      <h1 className="text-sm mt-3">
                        Quantity : {val.quantity}
                      </h1>
                    </div>
                  </div>
                )
              }
            })
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-xl">Your cart is empty!</h2>
              <Link
                href={'/'}
                className="py-3 px-5 rounded-lg bg-black text-white flex w-fit mt-4"
              >
                Start Shopping
              </Link>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
}

export default CartList
