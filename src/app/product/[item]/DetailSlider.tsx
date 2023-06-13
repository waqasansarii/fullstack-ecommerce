'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { urlForImage } from '../../../../sanity/lib/image'
import { Image } from 'sanity'

const DetailSlider = ({ product }: { product: Image[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div className="flex md:w-[60%]  w-full gap-x-4">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[130px] detailSlider"
        direction={'vertical'}
        breakpoints={{
          290:{
          //  direction:'horizontal'
           slidesPerView:3

          },
          600:{
            slidesPerView:4
            // direction:'vertical'
          }
        }}
      >
        {product.map((val: Image,i) => (
          <SwiperSlide key={i}>
            <img src={urlForImage(val).url()} />
            {/* <Image /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {product.map((val,i) => (
          <SwiperSlide key={i}>
            <img src={urlForImage(val).url()} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DetailSlider
