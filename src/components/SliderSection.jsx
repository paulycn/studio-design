import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import 'swiper/css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { PropTypes } from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SliderSection({ category, title }) {
  const [works, setWorks] = useState([])
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/api/works', {
          params: { populate: ['categories', 'images', 'cover'] }
        })
        setWorks(data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const filteredData = works.filter((work) => work.attributes.categories.data[0].attributes.name === category)

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
        <button className=" bg-bg-color hover:border-primary p-1" onClick={() => swiper && swiper.slidePrev()}>
          <SlArrowLeft />
        </button>
        <Swiper
          className="text-center"
          spaceBetween={50}
          loopadditionalslides={1}
          slidesPerView={4}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
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
          {filteredData.map(({ id, attributes }) => (
            <SwiperSlide className="flex items-center justify-center" key={id}>
              {attributes.cover && attributes.cover.data && attributes.cover.data.attributes.formats.small && (
                <img
                  className="md:h-44 md:min-w-full rounded-sm object-cover max-h-40 h-36"
                  src={'http://localhost:1337' + attributes.cover.data.attributes.formats.small.url}
                  alt={attributes.name}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <button className=" bg-bg-color hover:border-primary p-1" onClick={() => swiper && swiper.slideNext()}>
          <SlArrowRight />
        </button>
      </div>
    </section>
  )
}

SliderSection.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default SliderSection
