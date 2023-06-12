import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import React from 'react'
import DetailSlider from './DetailSlider'
import { client } from '../../../../sanity/lib/client'
import { Products } from '@/lib/type'
import DetailItem from './detailItem'

const getSingleProduct = async (id:string)=>{
  let data = await client.fetch(`*[_type=="product" && _id=="${id}"][0] {
   image,
   price ,
   _id,
   title,
   description,
   productCategory -> {
     _id,
     category
   },
   subCategory->{
     suitcategory,
     _id
   }
  }`)
  return data
}

const ProductDetail =async ({params:{item}}:{params:{item:string}}) => {
  let data:Products = await getSingleProduct(item)
  return (
    <Layout>
      <div className="flex">
        <DetailSlider product={data.image} />
        <DetailItem data={data} />
        {/* <div className="w-[40%] p-4">
          <h2 className="text-3xl font-bold">{data?.title}</h2>
          <p className="font-bold text-gray-400">{data?.subCategory?.suitcategory}</p>
          <h4 className="mt-12 font-bold">SELECT SIZE</h4>
          <div className="flex gap-x-5 mt-4">
            <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
              XS
            </button>
            <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
              S
            </button>
            <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
              M
            </button>
            <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
              L
            </button>
            <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full bg-gray-100 ">
              XL
            </button>
          </div>
          <div className="flex items-center gap-x-3 mt-10">
            <h3 className="font-bold text-xl">Quantity:</h3>
            <div className="flex items-center gap-x-4">
              <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full border-2  ">
                -
              </button>
              <p>1</p>
              <button className="w-[40px] flex justify-center items-center h-[40px] rounded-full border-2 ">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-12">
            <button className="flex items-center gap-x-2 bg-black py-3 px-6 rounded-md text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <p>Start Shopping</p>
            </button>
            <h2 className="text-xl font-bold ">${data?.price}</h2>
          </div>
        </div> */}
      </div>

      <Footer />
    </Layout>
  )
}

export default ProductDetail
