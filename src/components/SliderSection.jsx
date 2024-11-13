import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { PropTypes } from 'prop-types'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SliderSection({ category, works }) {
  const [swiper, setSwiper] = useState(null)

  return (
    <section>
      <div className="flex gap-2 md:gap-3 items-center justify-start ml-5 sm:ml-16 mb-1 mt-3 md:mt-6">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <Link to="/catalog">{category}</Link>
        <div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className="flex md:gap-5 gap-2 items-center">
        <button className="bg-bg-color hover:border-primary p-1" onClick={() => swiper && swiper.slidePrev()}>
          <SlArrowLeft />
        </button>
        <Swiper
          className="min-w-0"
          spaceBetween={50}
          loopadditionalslides={1}
          slidesPerView={4}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
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
          {works.map(({ slug, content }) => (
            <SwiperSlide key={slug}>
              {content.cover && (
                <Link to={`/catalog/${slug}`}>
                  <img className="md:h-44 md:min-w-full rounded-sm object-cover max-h-40 h-36" src={content.cover.filename} alt={content.name} />
                </Link>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="bg-bg-color hover:border-primary p-1" onClick={() => swiper && swiper.slideNext()}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  )
}

SliderSection.propTypes = {
  category: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired
}

export default SliderSection
