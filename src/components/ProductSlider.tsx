'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from 'swiper'
// import Image from 'next/image'
import Card from './Card'
import { Products } from '@/lib/type'

export default function ProductSlider({ data }: { data: Products[] }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        {data?.map((val: Products) => (
          <SwiperSlide key={val._id}>
            <Card data={val} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
