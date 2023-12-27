import React from 'react'
import Fade from 'react-reveal/Fade'

function About() {
  return (
    <div className="max-w-5xl m-auto flex flex-col gap-3 py-5 sm:py-1 sm:gap-10">
      <h1 className="text-center underline decoration-primary underline-offset-8 decoration-2 md:text-xl text-lg">
        Mobilă la comandă în Chișinău, Moldova
      </h1>
      <p className="text-sm md:text-base">
        Facem mobilă calitativă la comanda din MDF sau PAL melaminat.
        <br /> Vă propunem la dispoziție un asortiment larg de mobilă efectuată la comandă:
        <br /> Mobilă living la comanda, dulapuri-cupe, mobilă pentru bucătarie ,dulapuri cu uși glisante, mobila hol, dresinguri, sufragerii, mobila
        pentru cafenele etc.
      </p>
      <div className="py-16">
        <h4
          className="underline pb-10 decoration-primary underline-offset-8 decoration-2 text-center md:text-xl text-lg 
      "
        >
          Contactându-ne, veți obține
        </h4>
        <div className="grid md:grid-cols-4 gap-5 items-center">
          <div className="flex flex-row sm:flex-col justify-center items-center gap-3">
            <Fade left>
              <img className="mb-3" src="./img/pasul-1.svg" alt="img" />
            </Fade>
            <span className="text-sm md:text-base">Preluarea dimensiunilor de către designer și consultația gratuită.</span>
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center gap-3">
            <Fade left delay={1000}>
              <img className="mb-3" src="./img/pasul-2.svg" alt="img" />
            </Fade>
            <span className="text-sm md:text-base">Elaborarea schiței de amplasare și design-ul proiectului.</span>
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center gap-3">
            <Fade left delay={1500}>
              <img className="mb-3" src="./img/pasul-3.svg" alt="img" />
            </Fade>
            <span className="text-sm md:text-base">Elaborarea proiectului tehnic și specificația detaliată de catre tehnologul companiei.</span>
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center gap-3">
            <Fade left delay={2000}>
              <img className="mb-3" src="./img/pasul-4.svg" alt="img" />
            </Fade>
            <span className="text-sm md:text-base">Confecționarea, asamblarea și instalarea mobilierului conform proiectului aprobat.</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  sm:flex-row gap-5 sm:gap-8 ">
        <div className="flex flex-col  sm:flex-row  gap-5 sm:gap-36 sm:justify-center sm:items-center">
          <Fade>
            <div className="sm:w-1/2">
              <h4 className="underline decoration-primary underline-offset-8 decoration-2 md:text-xl text-lg">Măsurări exacte</h4>
              <p className="mt-3 text-sm md:text-base">
                Vă recomandăm să evitați măsurarea sine stătătoare a încăperii pentru evitarea prezentării datelor eronate. Specialiștii Art House
                dispun de echipamentele moderne pentru măsurarea exactă a dimensiunilor spațiului dvs.ceea ce asigură o instalare ideală a produsului
                finit.
              </p>
            </div>
          </Fade>
          <Fade right>
            <img src="./img/measure1.svg" alt="" className="w-1/5 hidden sm:block" />
          </Fade>
        </div>
        <div className="flex flex-row sm:flex-row gap-5 sm:gap-36 sm:justify-center sm:items-center">
          <Fade left delay={500}>
            <img src="./img/budget.svg" alt="" className="w-1/5 hidden sm:block" />
          </Fade>
          <div className="sm:w-1/2">
            <h4 className="underline decoration-primary underline-offset-8 decoration-2 md:text-xl text-lg">Calcularea costurilor </h4>
            <p className="mt-3 text-sm md:text-base">
              Prețul mobilierului depinde în totalitate de materialele și furnitură aleasă. Lucrăm cu companii renumite din Europa, totodată suntem
              flexibili în stabilirea prețului. Știm să ne încadrăm în bugetul clientului, păstrând un nivel de calitate înalt.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 sm:justify-end items-center p-0 md:p-5 rounded">
        <span className="text-sm sm:text-base">Consultă un designer gratuit! </span>
        <Fade left delay={1200}>
          <button
            className="flex justify-center items-center gap-2 bg-primary border border-primary text-white"
            onClick={() => (window.location.href = 'tel:+37379908683')}
          >
            <img src="./img/call.png" alt="call" />
            079 908683
          </button>
        </Fade>
      </div>
    </div>
  )
}

export default About
