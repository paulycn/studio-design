import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FsLightbox from 'fslightbox-react'
import { BsArrowLeft } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

function CatalogItems() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [lightboxController, setLightboxController] = useState({
    toggler: false
  })

  const [selectedWork, setSelectedWork] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`http://localhost:1337/api/works/${id}`, { params: { populate: ['categories', 'images', 'cover'] } })
      .then(({ data }) => setSelectedWork(data.data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  if (!selectedWork) {
    return <div>Work not found</div>
  }

  // const categoriesName = selectedWork.attributes.categories.data.map((c) => c.attributes.name).join(', ')
  const name = selectedWork.attributes.name
  const description = selectedWork.attributes.description
  const images = selectedWork.attributes.images.data.map((i) => 'http://localhost:1337' + i.attributes.formats.small.url)

  return (
    <div className="max-w-5xl m-auto py-3 sm:py-5 flex flex-col gap-4 sm:gap-5 ">
      <div>
        <a className="text-sm sm:text-base cursor-pointer flex items-center gap-2 hover:no-underline max-w-fit" onClick={() => navigate(-1)}>
          <BsArrowLeft /> Go back
        </a>
        <h3 className="text-center underline decoration-primary underline-offset-4 sm:underline-offset-8">{name}</h3>
        <span></span>
      </div>
      <div>
        <p className="text-xs md:text-base">
          Materiale: <span className=" text-bg-p text-sm">{description}</span>
        </p>
        <p className="text-xs md:text-base">
          Dimensiuni:<span className=" text-bg-p text-sm"> 350cm x 220cm (adaptiv) </span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 items-center justify-start">
        {images.map((image, index) => (
          <img
            className="rounded md:max-h-44 max-h-28 min-w-full"
            key={index}
            src={image}
            alt="img"
            onClick={() => {
              setLightboxController({
                toggler: !lightboxController.toggler,
                slide: index + 1
              })
            }}
          />
        ))}
      </div>
      <FsLightbox toggler={lightboxController.toggler} sources={images} slide={lightboxController.slide}></FsLightbox>
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
