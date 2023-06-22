import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const Fail = () => {
  return (
   <Layout>
      <div className='h-min-full flex items-center flex-col m-auto w-full'>
        <h2 className='text-5xl font-bold mt-10'>Failed</h2>
        <Link href={'/'} className='flex py-3 px-6 rounded-md text-white bg-black mt-5'>Back to home</Link>
      </div>
   </Layout>
  )
}

export default Fail