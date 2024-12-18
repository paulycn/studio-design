import 'swiper/css/bundle'
import React, { useEffect, useState } from 'react'
import 'swiper/css'
import axios from 'axios'
import SliderSection from './SliderSection'
import { Link } from 'react-router-dom'

function Works() {
  useEffect(() => {
    const token = import.meta.env.VITE_SB_ACCESS_TOKEN
    axios
      .get('https://api.storyblok.com/v2/cdn/stories', {
        params: {
          content_type: 'works',
          resolve_relations: 'works.categories',
          per_page: 48,
          token
        }
      })
      .then(({ data }) => {
        setWorks(data.stories)
        setCategories(data.rels.filter((r) => r.content.component === 'category'))
      })
  }, [])

  const [works, setWorks] = useState([])
  const [categories, setCategories] = useState([])

  return (
    <>
      <section>
        <div className="mx-auto py-10 md:py-20 max-w-7xl">
          <Link
            to="/catalog"
            className="transition-all duration-300 ease-in-out hover:scale-105 font-normal text-text-p text-xl sm:text-3xl text-center block underline decoration-primary sm:underline-offset-8  underline-offset-4 decoration-2 hover:underline-offset-8 sm:hover:decoration-2 sm:hover:underline-offset-8"
          >
            Comenzile realizate
          </Link>
          {categories.map((category) => {
            const categoryWorks = works
              .filter((work) => work.content.categories.includes(category.uuid))
              .sort((a, b) => new Date(a.published_at) - new Date(b.published_at))

            return <SliderSection key={category.uuid} works={categoryWorks} category={category.content.name}></SliderSection>
          })}
        </div>
      </section>
    </>
  )
}

export default Works
