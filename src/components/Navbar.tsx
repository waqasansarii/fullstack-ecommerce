'use client'
import React, { useEffect, useState } from 'react'
// import logo from '/Logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Sidebar } from './Sidebar'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from '@clerk/nextjs'
import { getCartItems } from '@/store/slice'
import { useAppSelector, useAppDispatch } from '@/store/hooks'

const Navbar = () => {
  const [Items , setItems] = useState(0)
  const { userId, isSignedIn } = useAuth()
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state=>{
    return state.storeSlice
  })

  useEffect(() => {
    dispatch(getCartItems())
  }, [])


  useEffect(() => {
    if (isSignedIn) {
      let filterUserProduct = selector.cartItems?.filter(
        (item) => item.user_id === userId,
      )
      console.log(filterUserProduct)
      setItems(filterUserProduct?.length)
    } else {
      setItems(0)
    }
  }, [userId, selector.cartItems])

  return (
    <>
      <div className="max-w-[1300px] m-auto flex items-center justify-between lg:max-w-[1300px] w-full lg:p-10 sm:p-7  p-7  m-auto ">
        <div className="w-50% flex items-center gap-x-10">
          <Link href={'/'}>
            <Image src={'/Logo.webp'} width={120} height={50} alt="logo" />
          </Link>
          <div className="lg:flex hidden gap-x-8">
            <Link href={'/Male'}>Male</Link>
            <Link href={'/Female'}>Female</Link>
            <Link href={'/Kids'}>Kids</Link>
            <Link href={'/all-products'}>All Products</Link>
          </div>
        </div>
        <div className="w-[40%] flex items-center lg:justify-between gap-x-4 justify-end">
          <div className="relative w-[70%] lg:flex hidden">
            <Input
              type="text"
              placeholder="Search products"
              className="w-[100%]"
            />
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
              className="lucide lucide-search absolute right-2 top-2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            </svg>
          </div>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton mode="modal" />
          </SignedOut>
          {/* <SignInButton /> */}
          <Link href={'/cart'} className="bg-black p-3 rounded-lg">
            <div className="relative">
              <p className="absolute -top-4 -right-1 text-white">{Items}</p>
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
                className="lucide lucide-shopping-cart text-white"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </div>
          </Link>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Navbar
