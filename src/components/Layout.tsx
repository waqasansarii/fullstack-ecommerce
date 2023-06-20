import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1300px] m-auto sm:px-10  px-5">{children}</main>
  )
}

export default Layout
