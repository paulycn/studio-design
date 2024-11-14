import React, { useRef, useState } from 'react'
import sofa from '@/assets/img/sofa.png'
import sofa2 from '@/assets/img/sofa2.png'
import sofa3 from '@/assets/img/sofa3.png'

import ButtonPrimary from './ButtonPrimary'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules'

function Hero() {
  return (
    <div>
      <div className="mx-auto flex flex-col gap-5 flex-start sm:flex sm:flex-row sm:justify-center sm:items-center md:gap-10">
        <div className="flex justify-center flex-col gap-4 flex-start sm:gap-8 md:flex md:gap-12">
          <h1 className="font-medium leading-tight text-black-p text-2xl sm:text-2xl md:text-5xl md:leading-tight">
            Loft Design <br />
            Mobilă la comandă
          </h1>
          <p className="text-black-p text-sm md:text-lg">
            Doriți să creați propriul model de mobilier?
            <br />
            Cu Loft Design, serviciul de proiectare design
            <br className="hidden md:block" /> se oferă absolut GRATIS.
          </p>
          <div>
            <ButtonPrimary />
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <div className="w-full max-w-sm md:max-w-3xl mx-auto">
            <Swiper
              autoHeight
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="w-[full] h-60 md:h-[500px] object-contain" src={sofa3} alt="sofa" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[full] h-60 md:h-[500px] object-contain" src={sofa2} alt="sofa" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
