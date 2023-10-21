import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import React from 'react'
import products from '../data/products.json'
import 'swiper/css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

function Works() {
  let swiper
  const setSwiper = (value) => {
    swiper = value
  }

  return (
    <section className="mx-auto max-w-6xl py-20">
      <h2 className="font-normal text-text-p text-3xl text-center underline decoration-primary underline-offset-8 decoration-2">
        Comenzile realizate
      </h2>
      <div className="flex gap-5 items-center justify-start ml-10 mb-5">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h3>Top Vânzări</h3>
        <div></div>
      </div>
      <div className="flex gap-5 items-center">
        <a onClick={() => swiper.slidePrev()}>
          <SlArrowLeft />
        </a>
        <Swiper
          className="text-center"
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <img className="max-h-44 rounded-sm" src={product.images[0]} alt={product.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <a onClick={() => swiper.slideNext()}>
          <SlArrowRight />
        </a>
      </div>
    </section>
  )
}

export default Works
