import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="max-w-[1300px] m-auto p-10">{children}</main>
}

export default Layout
