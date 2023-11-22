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
          <SliderSection title="Seturi" category="Set" />
          <SliderSection title="Sofa" category="Sofa" />
          <SliderSection title="Scaune" category="Scaun" />
          <SliderSection title="Dulap" category="Carcasă" />
        </div>
      </section>
    </>
  )
}

export default Works
