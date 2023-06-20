// 'use client'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import DetailSlider from './DetailSlider'
import { client } from '../../../../sanity/lib/client'
import { Products } from '@/lib/type'
import DetailItem from './detailItem'
// import { useGetProducts } from '@/components/Navbar'
import { useAuth } from '@clerk/nextjs'
import { urlForImage } from '../../../../sanity/lib/image'
import { toast } from 'react-hot-toast'
import { useAppDispatch } from '@/store/hooks'
import { addItem } from '@/store/slice'

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

const ProductDetail = async({ params: { item } }: { params: { item: string } }) => {
  // let [product, setProduct] = useState<Products[]>([])
  const product:Products =await getSingleProduct(item)
  // const { userId, isSignedIn } = useAuth()
  // const dispatch = useAppDispatch()
  // let [loading, setLoading] = useState(false)
  // const [qty, setQty] = useState(1)
  // let { items, products } = useGetProducts()
  // useEffect(() => {
  //   const getSingleProduct = async (id: string) => {
  //     let data = await client.fetch(`*[_type=="product" && _id=="${id}"] {
  //      image,
  //      price ,
  //      _id,
  //      title,
  //      description,
  //      productCategory -> {
  //        _id,
  //        category
  //      },
  //      subCategory->{
  //        suitcategory,
  //        _id
  //      }
  //     }`)
  //     setProduct(data)
  //     return data
  //   }
  //   getSingleProduct(item)
  // }, [item])

  // console.log(userId)

  // const handleAddToCart = async (data: Products, qty: number) => {
  //   let isItemExist =''
  //   // = items.filter(
  //   //   (item) => item.product_id === data._id && item.user_id && userId,
  //   // )
  //   // console.log(data,qty)
  //   // console.log(isItemExist)
  //   if (isSignedIn) {
  //     setLoading(true)
  //     if (isItemExist.length > 0) {
  //       let res = await fetch('/api/cart', {
  //         method: 'PUT',
  //         body: JSON.stringify({
  //           product_id: data._id,
  //           // quantity: isItemExist[0].quantity + qty,
  //           user_id: userId,
  //         }),
  //       })
  //       let resJson = await res.json()
  //       // console.log(resJson)
  //       setLoading(false)
  //       dispatch(addItem(resJson.allProducts))
  //       // products()
  //       toast.success('Item updated in your cart successfully!')
  //     } else {
  //       let res = await fetch('/api/cart', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           product_id: data._id,
  //           quantity: qty,
  //           user_id: userId,
  //           product_category: data?.subCategory?.suitcategory,
  //           product_image: urlForImage(data.image[0]).url(),
  //           product_name: data.title,
  //           price: data?.price,
  //         }),
  //       })
  //       let resJson = await res.json()
  //       setLoading(false)
  //       dispatch(addItem(resJson.allProducts))
  //       toast.success('Item added in your cart successfully!')
  //     }
  //   } else {
  //     toast.error('Please login!')
  //   }
  // }

  return (
    <Layout >
      <div className="flex md:flex-row flex-col md:mb-0 mb-[4rem]">
        {/* {product.length === 0 ? (
          <div className='w-full p-[10rem] font-bold sm:text-5xl text-xl text-center'>loading...</div>
        ) : ( */}
          <>
            <DetailSlider product={product.image} />
            <DetailItem
              // handleAddToCart={handleAddToCart}
              // loading={loading}
              data={product}
            />
          </>
        {/* )} */}
      </div>

      <Footer />
    </Layout>
  )
}

export default ProductDetail
