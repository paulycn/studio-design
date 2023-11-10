import React from 'react'

function Hero() {
  return (
    <div
      className="mx-auto max-w-7xl flex flex-col gap-5 flex-start
    sm:flex sm:flex-row 
    sm:justify-center 
    sm:items-center 
    md:gap-10"
    >
      <div
        className="flex justify-center flex-col gap-4 flex-start
      sm:gap-8 
      md:flex
      md:gap-12"
      >
        <h1
          className="font-medium leading-tight text-black-p text-2xl 
        sm:text-2xl 
        md:text-5xl  
        md:leading-tight"
        >
          Studio Design <br />
          Mobilă la comandă
        </h1>
        <p
          className="text-black-p text-sm
        md:text-lg"
        >
          Doriți să creați propriul model de mobilier?
          <br />
          Cu Studio Design, serviciul de proiectare design se oferă <br />
          absolut GRATIS.
        </p>
        <div>
          <button className="text-base lg:text-lg" onClick={() => (window.location.href = 'tel:+37379908683')}>
            Comandă acum
          </button>
        </div>
      </div>
      <div>
        <img className="max-h-[550px]" src="/src/assets/img/sofa.png" alt="sofa" />
      </div>
    </div>
  )
}

export default Hero
