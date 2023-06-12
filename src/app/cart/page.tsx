'use client'
import Layout from '@/components/Layout'
import { useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity/lib/client'
import CartList from './CartList'
import PriceCard from './priceCard'
import { CartItem } from '@/lib/type'

const page = () => {
  const { userId } = useAuth()
  let [cartItems, setCartItems] = useState<CartItem[]>([])
  let [loading, setLoading] = useState(true)
  const userProducts = async () => {
    let resp = await fetch('/api/cart', {
      method: 'GET',
      // body: JSON.stringify({
      //   user_id: userId,
      // }),
    })
    let { res }: { res: CartItem[] } = await resp.json()
    // console.log(resJson)
    setCartItems(res)
    setLoading(false)
  }

  useEffect(() => {
    if (userId) {
      userProducts()
    }
  }, [userId])

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <Layout>
      <div className="text-3xl font-bold">Shopping Cart</div>
      <div className="flex items-start gap-x-4 justify-between mt-8">
        <CartList data={cartItems} />
        <PriceCard data={cartItems} />
      </div>
    </Layout>
  )
}

export default page
