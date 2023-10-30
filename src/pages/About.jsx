import React from 'react'

function About() {
  return (
    <div className="max-w-5xl m-auto flex flex-col gap-5">
      <h1 className="text-center underline decoration-primary underline-offset-8 decoration-2 text-xl">Mobilă la comandă în Chișinău, Moldova</h1>
      <p>
        Facem mobilă calitativă la comanda din MDF sau PAL melaminat.
        <br /> Vă propunem la dispoziție un asortiment larg de mobilă efectuată la comandă:
        <br /> Mobilă living la comanda, dulapuri-cupe, mobilă pentru bucătarie ,dulapuri cu uși glisante, mobila hol, dresinguri, sufragerii, mobila
        pentru cafenele etc.
      </p>
      <h4 className="underline decoration-primary underline-offset-8 decoration-2">Măsurări exacte</h4>
      <p>
        Vă recomandăm să evitați măsurarea sine stătătoare a încăperii pentru evitarea prezentării datelor eronate. Specialiștii Art House dispun de
        echipamentele moderne pentru măsurarea exactă a dimensiunilor spațiului dvs.ceea ce asigură o instalare ideală a produsului finit.
      </p>
      <h4 className="underline decoration-primary underline-offset-8 decoration-2">Calcularea costurilor </h4>
      <p>
        Prețul mobilierului depinde în totalitate de materialele și furnitură aleasă. Lucrăm cu companii renumite din Europa, totodată suntem
        flexibili în stabilirea prețului. Știm să ne încadrăm în bugetul clientului, păstrând un nivel de calitate înalt.
      </p>
      <h4 className="underline decoration-primary underline-offset-8 decoration-2">Contactându-ne, veți obține absolut gratuit:</h4>
      <div className="flex gap-5 items-center justify-start">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h5>Consiliere</h5>
      </div>
      <div className="flex gap-5 items-center justify-start">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h5>Proiect de design</h5>
      </div>
      <div className="flex gap-5 items-center justify-start">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h5>Livrare</h5>
      </div>
      <div className="flex gap-5 items-center justify-start">
        <div className="w-2 h-2 rounded-full bg-primary "></div>
        <h5>Montare</h5>
      </div>
    </div>
  )
}

export default About
