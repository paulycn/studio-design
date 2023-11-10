import 'swiper/css/bundle'
import React from 'react'
import 'swiper/css'
import SliderSection from './SliderSection'
import { Link } from 'react-router-dom'

function Works() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl py-10 md:py-20">
          <Link
            to="/catalog"
            className="font-normal text-text-p text-xl sm:text-3xl text-center block underline decoration-primary sm:underline-offset-8  underline-offset-4 decoration-2 hover:underline-offset-8 sm:hover:decoration-2 sm:hover:underline-offset-8"
          >
            Comenzile realizate
          </Link>
          <SliderSection title="Top vânzări" type="set" />
          <SliderSection title="Sofa" type="sofa" />
          <SliderSection title="Scaune" type="chair" />
          <SliderSection title="Dulap" type="case" />
        </div>
      </section>
    </>
  )
}

export default Works
