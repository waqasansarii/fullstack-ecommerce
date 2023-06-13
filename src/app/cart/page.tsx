'use client'
import Layout from '@/components/Layout'
import { useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import CartList from './CartList'
import PriceCard from './priceCard'
import { CartItem } from '@/lib/type'
import { useGetProducts } from '@/components/Navbar'
import { Skeleton } from '@/components/ui/skeleton'
import {toast} from 'react-hot-toast'

const page = () => {
  const { userId, isSignedIn } = useAuth()
  let { items, products } = useGetProducts()
  let [cartItems, setCartItems] = useState<CartItem[]>([])
  let [loading, setLoading] = useState(true)

  const userProducts = async () => {
    let resp = await fetch(`/api/cart?user_id=${userId}`, {
      method: 'GET',
    })
    let { res }: { res: CartItem[] } = await resp.json()
    setCartItems(res)
    setLoading(false)
  }

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
    setCartItems(resJson.remainingItem)
    setLoading(false)

    products()
  }

  // console.log(items)

  useEffect(() => {
    if (userId) {
      userProducts()
    }
  }, [userId])

  // if (loading) {
  //   return <div>loading...</div>
  // }
  return (
    <Layout>
      <div className="text-3xl font-bold">Shopping Cart</div>
      <div className="flex items-start gap-x-4 lg:flex-row flex-col gap-y-5 justify-between mt-8">
        {loading ? (
          // <Skeleton className="w-[65%] h-[120px] rounded-lg" />
          <div className="lg:w-[65%] w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center space-x-4 w-[100%] bg-blue-100/10 p-4 my-3"
              >
                <Skeleton className="h-[120px] w-[120px] rounded-md" />
                <div className="space-y-2 w-[calc(100% - 150px)]">
                  <Skeleton className="h-[50px] w-[300px]" />
                  <Skeleton className="h-[30px] w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CartList data={cartItems} deleteProduct={deleteProduct} />
        )}
        <PriceCard data={cartItems} />
      </div>
    </Layout>
  )
}

export default page
