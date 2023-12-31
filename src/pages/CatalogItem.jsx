import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import FsLightbox from 'fslightbox-react'
import { BsArrowLeft } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
import ButtonPrimary from '../components/ButtonPrimary'

function CatalogItems() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [lightboxController, setLightboxController] = useState({
    toggler: false
  })

  const [selectedWork, setSelectedWork] = useState(null)

  useEffect(() => {
    const token = import.meta.env.VITE_SB_ACCESS_TOKEN
    window.scrollTo(0, 0)
    axios
      .get('https://api.storyblok.com/v2/cdn/stories/works/' + slug, {
        params: {
          resolve_relations: 'works.categories',
          token
        }
      })
      .then(({ data }) => {
        setSelectedWork(data.story)
      })
  }, [])

  const getImages = () => selectedWork.content.images.map((i) => i.filename)

  return (
    selectedWork && (
      <div className="max-w-5xl m-auto py-3 sm:py-5 flex flex-col gap-4 sm:gap-5 ">
        <div>
          <a className="text-sm sm:text-base cursor-pointer flex items-center gap-2 hover:no-underline max-w-fit" onClick={() => navigate(-1)}>
            <BsArrowLeft /> Go back
          </a>
          <h3 className="text-center underline decoration-primary underline-offset-4 sm:underline-offset-8">{selectedWork.name}</h3>
          <span></span>
        </div>
        <div>
          <p className="text-xs md:text-base">
            Materiale: <span className=" text-bg-p text-sm">{selectedWork.content.description}</span>
          </p>
          <p className="text-xs md:text-base">
            Dimensiuni:<span className=" text-bg-p text-sm"> 350cm x 220cm (adaptiv) </span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 items-center justify-start">
          {getImages().map((image, index) => (
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
        <FsLightbox toggler={lightboxController.toggler} type="image" sources={getImages()} slide={lightboxController.slide}></FsLightbox>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:justify-end items-center pb-2 md:pb-0 p-0 md:p-5 rounded">
          <span className="text-sm sm:text-base">Doriți un design asemănător? </span>
          <Fade left delay={1000}>
            <ButtonPrimary></ButtonPrimary>
          </Fade>
        </div>
      </div>
    )
  )
}
export default CatalogItems
