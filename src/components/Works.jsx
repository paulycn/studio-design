import 'swiper/css/bundle'
import React from 'react'
import 'swiper/css'
import SliderSection from './SliderSection'

function Works() {
  return (
    <div className="mx-auto max-w-6xl py-20">
      <h2 className="font-normal text-text-p text-3xl text-center underline decoration-primary underline-offset-8 decoration-2">
        Comenzile realizate
      </h2>
      <SliderSection title="Top vânzări" type="set" />
      <SliderSection title="Sofa" type="sofa" />
      <SliderSection title="Scaune" type="chair" />
      <SliderSection title="Dulap" type="case" />
    </div>
  )
}

export default Works
