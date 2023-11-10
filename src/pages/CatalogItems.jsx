import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.json'
import FsLightbox from 'fslightbox-react'
import { BsArrowLeft } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

function CatalogItems() {
  const { id } = useParams()
  const product = products.find((t) => t.id === id)
  const navigate = useNavigate()
  const [lightboxController, setLightboxController] = useState({
    toggler: false
  })

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    })
  }

  return (
    <div className="max-w-5xl m-auto py-3 sm:py-5 flex flex-col gap-4 sm:gap-5 ">
      <div>
        <a className="text-sm sm:text-base cursor-pointer flex items-center gap-2 hover:no-underline max-w-fit" onClick={() => navigate(-1)}>
          <BsArrowLeft /> Go back
        </a>
        <h3 className="text-center underline decoration-primary underline-offset-4 sm:underline-offset-8">{product.name}</h3>
        <span></span>
      </div>
      <div>
        <p className="text-xs md:text-base">
          Materiale: <span className=" text-bg-p text-sm">{product.description}</span>
        </p>
        <span className="text-xs md:text-base">
          {' '}
          Dimensiuni:<span className=" text-bg-p text-sm"> 350cm x 220cm (adaptiv) </span>
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 items-center justify-start">
        {product.images.map((image, index) => (
          <img
            className="rounded md:max-h-44 max-h-28"
            key={index}
            src={image}
            alt="img"
            onClick={() => {
              openLightboxOnSlide(index + 1)
            }}
          />
        ))}
      </div>
      <FsLightbox toggler={lightboxController.toggler} sources={product.images} slide={lightboxController.slide}></FsLightbox>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 sm:justify-end items-center p-0 md:p-5 rounded">
        <span className="text-sm sm:text-base">Doriți un design asemănător? </span>
        <Fade left delay={1000}>
          <button className="p-1 md:py-2.5 md:px-4 text-sm">Comandă acum!</button>
        </Fade>
      </div>
    </div>
  )
}
export default CatalogItems
