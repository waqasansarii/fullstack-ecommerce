import Navbar from '@/components/Navbar'
import ProductSlider from '@/components/ProductSlider'
import Image from 'next/image'
// import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import { client } from '../../sanity/lib/client'

const getProductData = async ()=>{
   let data = await client.fetch(`*[_type=="product"] {
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

export default async function Home() {

  let productResp = await getProductData()

  return (
    <Layout>
      {/* <Navbar /> */}
      {/* hero section  */}
      <div className="flex items-center justify-center gap-x-10">
        <div className="lg:w-1/2 w-full">
          <div className="py-2 px-6 bg-blue-100 rounded-md w-fit">
            <p className="font-bold text-blue-600">Sale 70%</p>
          </div>
          <h1 className="mt-5 sm:text-6xl text-3xl font-bold">
            An Industrial Take on Streetwear
          </h1>
          <p className="mt-8 sm:w-[60%] ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <button className="flex items-center gap-x-2 bg-black py-3 px-10 rounded-md mt-12 text-white">
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
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <p>Start Shopping</p>
          </button>
          <div className="mt-6 flex items-center gap-x-5">
            <Image src={'/Featured1.webp'} width={100} height={50} alt="logo" />
            <Image src={'/Featured2.webp'} width={100} height={50} alt="logo" />
            <Image src={'/Featured3.webp'} width={100} height={50} alt="logo" />
            <Image src={'/Featured4.webp'} width={100} height={50} alt="logo" />
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <div className="w-[500px] h-[500px] rounded-full bg-pink-200">
            <Image
              src={'/hero-image.webp'}
              width={500}
              height={500}
              alt="hero"
              className="w-[700px] h-[550px] -top-8 relative"
            />
          </div>
        </div>
      </div>
      {/* promotions  */}
      <div className="mt-20">
        <p className="text-center text-blue-600 font-bold text-sm uppercase">
          Promotions
        </p>
        <h2 className="sm:text-4xl text-2xl font-bold mt-3 text-center">
          Our Promotions Events
        </h2>
        <div className="flex gap-x-5 mt-10 justify-center flex-col lg:flex-row">
          <div className="lg:w-[50%] w-full">
            <div className="flex items-center bg-gray-300 pt-2 px-5 w-full">
              <div>
                <h2 className="sm:text-3xl text-xl font-bold">GET UP TO 60%</h2>
                <p className="text-lg mt-2">For the summer season</p>
              </div>
              <Image src={'/event1.webp'} width={250} height={70} alt="event" />
            </div>
            <div className="bg-zinc-800 w-full mt-4 pt-10 pb-3 px-3 text-center text-white">
              <h2 className="sm:text-3xl text-xl font-bold">GET UP TO 60%</h2>
              <p className="text-lg mt-2">For the summer season</p>
              <button className="bg-zinc-600  mt-4 rounded-lg py-3  sm:px-10 px-5 sm:tracking-[.3em] font-bold">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className="flex lg:w-[50%] w-full sm:flex-row flex-col mt-3 gap-y-5 lg:mt-0 gap-x-3">
            <div className=" bg-orange-100 pt-4 px-6 lg:w-[300px] sm:w-1/2">
              <h2 className="text-md ">Flex Sweatshirt</h2>
              <div className=" flex gap-x-2 text-lg">
                <del>$100.00</del>
                <p className=" font-bold">$75.00</p>
              </div>
              <Image
                src={'/event2.webp'}
                className="mt-3"
                width={3500}
                height={350}
                alt="event"
              />
            </div>
            <div className=" bg-gray-300 pt-4 px-6 lg:w-[300px] sm:w-1/2">
              <h2 className="text-md ">Flex Sweatshirt</h2>
              <div className=" flex gap-x-2 text-lg">
                <del>$100.00</del>
                <p className=" font-bold">$75.00</p>
              </div>
              <Image
                src={'/event3.webp'}
                className="mt-3 w-full"
                width={320}
                height={350}
                alt="event"
              />
            </div>
          </div>
        </div>
      </div>
      {/* products  */}
      <div className="mt-10">
        <p className="text-center text-blue-600 font-bold text-sm uppercase">
          Promotions
        </p>
        <h2 className="sm:text-4xl text-2xl font-bold mt-3 text-center">
          Check What We Have
        </h2>
        <div className="mt-5">
          <ProductSlider data={productResp} />
        </div>
      </div>
      {/* service  */}
      <div className="mt-[10rem]">
        <div className="xl:max-w-[500px] xl:ml-auto">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
        <div className="flex mt-10 gap-x-4 xl:flex-row flex-col">
          <div className="grid xl:w-1/2 w-full grid-cols-2 gap-x-6 relative">
            <div className="absolute sm:text-[6.6rem] sm:text-7xl text-4xl leading-[110px] opacity-[0.07] text-[#212121] z-[1] font-bold">
              Different from others
            </div>
            <div className="sm:w-[70%] w-full relative z-[2]">
              <h3 className="text-xl font-bold">
                Using Good Quality Materials
              </h3>
              <p className="mt-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="sm:w-[70%] w-full relative z-[2]">
              <h3 className="text-xl font-bold">100% Handmade Products</h3>
              <p className="mt-6">
                {' '}
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="sm:w-[70%] w-full relative z-[2]">
              <h3 className="text-xl font-bold">Modern Fashion Design</h3>
              <p className="mt-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="sm:w-[70%] w-full relative z-[2]">
              <h3 className="text-xl font-bold">Discount for Bulk Orders</h3>
              <p className="mt-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="xl:w-1/2 w-full mt-10 xl:mt-0 flex xl:items-inherit items-center md:flex-row flex-col gap-x-10 gap-y-5">
            <div className="w-[300px] bg-gray-100">
              <Image src={'/event2.webp'}  width={300} height={200} alt="logo" />
            </div>
            <div className="xl:w-1/2 md:w-[60%] w-full">
              <p className="leading-10 text-lg">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="text-white font-bold bg-black rounded-lg py-3 px-10 mt-3">
                See All Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* news letter  */}
      <div className="my-[10rem] sm:w-[500px] w-full m-auto">
        <div className="relative ">
          <div className="absolute md:text-[7.5rem] sm:text-8xl text-5xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-[.07] z-1 font-bold -left-[4rem]">
            Newsletter
          </div>
          <h2 className="text-center sm:text-4xl text-2xl font-bold">
            Subscribe Our Newsletter
          </h2>
          <p className="my-10 text-center">
            Get the latest information and promo offers directly
          </p>

          <div className="flex w-full max-w-lg items-center m-auto sm:flex-row flex-col gap-y-4 justify-center space-x-2 relative z-2">
            <Input type="email" placeholder="Email" />
            <button className="text-white min-w-[180px] font-bold bg-black rounded-lg py-3 px-10 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
