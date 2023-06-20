'use client'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Toaster } from 'react-hot-toast'

import React from 'react'
// import { ClerkProvider } from '@clerk/nextjs'
// import { Provider } from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ClerkProvider>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />

        {children}
      </Provider>
    // </ClerkProvider>
  )
}

export default Providers
