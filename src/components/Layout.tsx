import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="max-w-[1300px] m-auto sm:p-10 px-5">
    {/* <Navbar /> */}
    {children}
    </main>
}

export default Layout
