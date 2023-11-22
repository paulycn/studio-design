import React from 'react'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Card from '../components/Card'
import OrderNow from '../components/OrderNow'

export default function Home() {
  return (
    <>
      <section className="bg-bg-color pt-5">
        <Hero />
        <Works />
      </section>
      <section className=" lg:bg-white">
        <div className="mx-auto max-w-8xl bg-bg-color sm:px-14 sm:pt-10 sm:pb-16 rounded">
          <h2 className="mb-5 sm:mb-10 font-normal text-text-p sm:text-2xl text-xl md:text-3xl text-center underline decoration-primary underline-offset-8 decoration-2">
            De ce sa ne alegi pe noi?
          </h2>
          <div className="flex justify-center gap-4 sm:gap-10 flex-col md:flex-row">
            <Card
              card_title="Lucrul manual"
              card_paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi modi accusantium!"
              card_image="./img/suggestion.png"
            />
            <Card
              card_title="Experiență"
              card_paragraph="Activam pe piața locală timp de 7 ani, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, corrupti."
              card_image="./img/basketball.png"
            />
            <Card
              card_title="Livrare"
              card_paragraph="Ziua și ora livrării se stabilește împreună cu dvs., încât să puteți planifica și alte activități din timp. Veți fi scutit de orice
                              grijă legată de transportarea și ridicarea mobilei la etaj."
              card_image="./img/livrare.png"
            />
          </div>
        </div>
      </section>
      <OrderNow />
    </>
  )
}
