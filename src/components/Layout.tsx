import React from 'react'
import Navbar from './Navbar'

const Layout = ({
  children,
  cartNo,
}: {
  children: React.ReactNode
  cartNo?: number | undefined
}) => {
  return (
    <main className="max-w-[1300px] m-auto sm:px-10  px-5">
      <Navbar itemNum={cartNo} />
      {children}
    </main>
  )
}

export default Layout
