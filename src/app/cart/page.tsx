'use client'
import Layout from '@/components/Layout'
import { useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CartList from './CartList'
import PriceCard from './priceCard'
import { CartItem } from '@/lib/type'
// import { toast } from 'react-hot-toast'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
// import { deleteItem } from '@/store/slice'

const Cart = () => {
  const { userId, isSignedIn, isLoaded } = useAuth()
  const selector = useAppSelector((state) => {
    return state.storeSlice
  })
  let [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    if (isSignedIn) {
      let filterUserProduct = selector.cartItems?.filter(
        (item) => item.user_id === userId,
      )
      setCartItems(filterUserProduct)
    } else {
      setCartItems([])
    }
  }, [userId, selector.cartItems])

  if (!isLoaded) {
    return <div>loading...</div>
  }
  // console.log(isSignedIn)

  return (
    <Layout>
      <div className="text-3xl font-bold">Shopping Cart</div>
      {isLoaded ? (
        isSignedIn ? (
          <div className="flex items-start gap-x-4 lg:flex-row flex-col gap-y-5 justify-between mt-8">
            <CartList data={cartItems} />
            <PriceCard data={cartItems} />
          </div>
        ) : (
          <div>
            <h1 className="text-4xl text-center mt-[5rem]">Please Login</h1>
          </div>
        )
      ) : (
        <div>
          <h2></h2>
        </div>
      )}
    </Layout>
  )
}

export default Cart
