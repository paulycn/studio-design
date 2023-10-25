import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import products from '../data/products.json'
import 'swiper/css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { PropTypes } from 'prop-types'
import React from 'react'

function SliderSection({ type, title }) {
  let swiper
  const setSwiper = (value) => {
    swiper = value
  }
  const filteredData = products.filter((product) => product.type === type)

  return (
    <section>
      <div className="flex gap-5 items-center justify-start ml-10 mb-1 mt-6">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h3>{title}</h3>
        <div>
          <HiOutlineArrowNarrowRight />
        </div>
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
          {filteredData.map((product) => (
            <SwiperSlide className="flex items-center justify-center" key={product.id}>
              <img className="max-h-44 rounded-sm object-cover" src={product.images[0]} alt={product.name} />
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

SliderSection.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SliderSection
