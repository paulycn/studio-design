import React from 'react'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <section className="bg-bg-color pt-5">
        <Hero />
        <Works />
      </section>
      <section className="py-24 lg:bg-white">
        <div className="mx-auto max-w-5xl bg-bg-color px-14 pt-10 pb-16 rounded">
          <h2 className="mb-10 font-normal text-text-p text-3xl text-center underline decoration-primary underline-offset-8 decoration-2">
            De ce sa ne alegi pe noi?
          </h2>
          <div className="flex justify-center gap-10 flex-col md:flex-row">
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
      <section className="bg-bg-color py-32 relative">
        <img className="absolute left-2/3 bottom-20" src="./public/img/armchair.png" alt="chair" />
        <div className="w-1/2 mx-auto gap-5 shadow-sm shadow-primary text-center flex flex-col items-center bg-white rounded py-14 px-5 justify-evenly">
          <h2 className="text-5xl text-primary">Comandă acum!</h2>
          <p className="text-base">Consultă un designer gratuit</p>
          <button
            className="flex justify-center items-center gap-2 bg-primary border border-primary text-white"
            onClick={() => (window.location.href = 'tel:+37379908683')}
          >
            <img src="./img/call.png" alt="call" />
            079 908683
          </button>
        </div>
      </section>
    </>
  )
}
