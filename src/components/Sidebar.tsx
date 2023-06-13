'use client'

import { useState } from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import Image from 'next/image'

const SHEET_SIZES = ['sm', 'default', 'lg', 'xl', 'full', 'content'] as const

type SheetSize = typeof SHEET_SIZES[number]

export function Sidebar() {
  const [size, setSize] = useState<SheetSize>('default')
  return (
    <div className="flex lg:hidden flex-col space-y-8 ">
      <Sheet>
        <SheetTrigger asChild>
          <button>
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
              className="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent position="left" size={size}>
          <SheetHeader>
            <Image src={'/Logo.webp'} alt="logo" height={50} width={100} />
          </SheetHeader>
          <div className="flex w-full flex-col gap-y-7 items-center justify-center mt-6">
            <SheetClose asChild>
              <Link href={'/Male'} className="flex w-full text-center">
                Male
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/Female'} className="flex w-full text-center">
                Female
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/Kids'} className="flex w-full text-center">
                Kids
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={'/all-products'} className="flex w-full text-center">
                All Products
              </Link>
            </SheetClose>
          </div>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
