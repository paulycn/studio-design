import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import products from '../data/products.json'
import 'swiper/css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function SliderSection({ type, title }) {
  let swiper
  const setSwiper = (value) => {
    swiper = value
  }
  const filteredData = products.filter((product) => product.type === type)

  return (
    <section>
      <div className="flex gap-2 md:gap-3 items-center justify-start ml-5 sm:ml-16 mb-1 mt-3 md:mt-6">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <Link to="/catalog">{title}</Link>
        <div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className="flex md:gap-5 gap-2 items-center">
        <button className=" bg-bg-color hover:border-primary p-1" onClick={() => swiper.slidePrev()}>
          <SlArrowLeft />
        </button>
        <Swiper
          className="text-center"
          spaceBetween={50}
          loopadditionalslides={1}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiper(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
        >
          {filteredData.map((product) => (
            <SwiperSlide className="flex items-center justify-center" key={product.id}>
              <img className="h-24 sm:h-44 rounded-sm object-cover" src={product.images[0]} alt={product.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className=" bg-bg-color hover:border-primary p-1" onClick={() => swiper.slideNext()}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  )
}

SliderSection.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SliderSection
