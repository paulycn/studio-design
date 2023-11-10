import React from 'react'
import Hero from '../components/Hero'
import Works from '../components/Works'
import Card from '../components/Card'
import Fade from 'react-reveal/Fade'

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
      <section className="bg-bg-color py-10 md:py-32 relative">
        <img className="hidden md:absolute md:inline-block left-2/3 bottom-20" src="img/armchair.png" alt="chair" />
        <div className="mx-auto md:w-3/4 shadow-sm shadow-primary text-center flex flex-col gap-5 items-center bg-white rounded py-4 md:py-10 px-5 justify-evenly">
          <h2 className="text-2xl md:text-5xl text-primary">Comandă acum!</h2>
          <p className="text-base">Consultă un designer gratuit</p>
          <Fade left>
            <button
              className="flex justify-center items-center gap-2 bg-primary border border-primary text-white"
              onClick={() => (window.location.href = 'tel:+37379908683')}
            >
              <img src="./img/call.png" alt="call" />
              079 908683
            </button>
          </Fade>
        </div>
      </section>
    </>
  )
}
