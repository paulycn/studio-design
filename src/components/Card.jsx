/* eslint-disable camelcase */
import React from 'react'
import Fade from 'react-reveal/Fade'

// eslint-disable-next-line react/prop-types
function Card({ card_title, card_paragraph, card_image }) {
  return (
    <>
      <div className="md:w-1/3 shadow-sm shadow-primary text-center flex flex-col items-center bg-white rounded py-4 md:py-10 px-5 justify-evenly hover:shadow-md hover:shadow-primary">
        <h3 className="text-lg md:text-2xl mb-3">{card_title}</h3>
        <p className="text-sm md:text-base text-center">{card_paragraph}</p>
        <Fade left>
          <img className="w-24 sm:w-28" src={card_image} alt="logo" />
        </Fade>
      </div>
    </>
  )
}

export default Card
