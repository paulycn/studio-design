import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrderNow from '../components/OrderNow'

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const token = import.meta.env.VITE_SB_ACCESS_TOKEN
    axios
      .get('https://api.storyblok.com/v2/cdn/stories', {
        params: {
          content_type: 'works',
          per_page: 100,
          token
        }
      })
      .then(({ data }) => {
        setWorks(data.stories)
      })
    axios
      .get('https://api.storyblok.com/v2/cdn/stories', {
        params: {
          content_type: 'category',
          per_page: 100,
          token
        }
      })
      .then(({ data }) => {
        setCategories(data.stories)
      })
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [works, setWorks] = useState([])
  const [categories, setCategories] = useState([])

  const handleCategoryClick = (type) => {
    setSelectedCategory(type)
  }

  const filterFunction = function (work) {
    return work.content.categories.includes(selectedCategory)
  }

  const getCategoryName = (categoryIds) => {
    return categories.find((category) => {
      return categoryIds.includes(category.uuid)
    })?.content.name
  }

  const filteredData = !selectedCategory ? works : works.filter(filterFunction)

  return (
    <>
      <section className="mx-auto py-5 max-w-6xl flex justify-center flex-col items-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex-wrap lg:flex justify-center gap-4 md:gap-5">
          <button
            className={`cursor-pointer py-2 px flex justify-center rounded w-32 text-xs md:text-sm ${
              !selectedCategory ? 'bg-primary text-white' : 'border border-gray-600 text-gray-600'
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            Toate lucrările
          </button>
          {categories.map((category) => (
            <button
              key={category.uuid}
              className={`cursor-pointer py-2 px flex justify-center rounded w-32 text-xs md:text-sm ${
                selectedCategory === category.uuid ? 'bg-primary text-white' : 'border border-gray-600 text-gray-600'
              }`}
              onClick={() => handleCategoryClick(category.uuid)}
            >
              {category.content.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-start">
          {filteredData.map(({ slug, content }) => (
            <div className="flex items-center justify-start" key={slug}>
              <div className="flex flex-col items-center gap-3 min-w-full relative">
                <div className="absolute top-2 right-2 rounded bg-gray-700 text-white text-xs py-1 px-2">{getCategoryName(content.categories)}</div>
                {content.cover && (
                  <Link to={`/catalog/${slug}`}>
                    <img className="md:max-h-44 min-w-full rounded-sm object-cover max-h-36" src={content.cover.filename} alt={content.name} />
                  </Link>
                )}
                <Link
                  to={`/catalog/${slug}`}
                  className="text-xs sm:text-sm rounded py-1 px-6 bg-header-col text-white hover:no-underline hover:bg-primary"
                >
                  Detalii
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <OrderNow />
    </>
  )
}

export default Catalog
