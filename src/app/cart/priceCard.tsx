'use client'
import { CartItem } from '@/lib/type'
import { loadStripe } from '@stripe/stripe-js'
import React, { useState } from 'react'

const PriceCard = ({ data }: { data: CartItem[] }) => {
  const [loading, setLoading] = useState(false)
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

  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  const stripePromise = loadStripe(publishableKey)

  const createCheckOutSession = async () => {
    setLoading(true)
    const stripe = await stripePromise

    const checkoutSession = await fetch('/api/create-stripe-session', {
      method: 'POST',
      // item : data,
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        item: data,
      }),
    })

    console.log('Result------------- in prod page==========', checkoutSession)

    const sessionID = await checkoutSession.json()
    const deletingProducts = await fetch('/api/cart',{
      method:'DELETE'
    })

    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID,
    })
    console.log(result)
    if (result?.error) {
      alert(result.error.message)
    }
    setLoading(false)
  }

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
      <button
        disabled={loading}
        onClick={createCheckOutSession}
        className="bg-black py-2 px-5 rounded-lg w-full mt-3 text-white"
      >
        {loading ? 'Processing' : 'Process to checkout'}
      </button>
    </div>
  )
}

export default PriceCard
