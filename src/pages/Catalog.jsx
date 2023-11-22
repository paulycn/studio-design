import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrderNow from '../components/OrderNow'

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0)
    axios.get('http://localhost:1337/api/works', { params: { populate: ['categories', 'images', 'cover'] } }).then(({ data }) => setWorks(data.data))
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [works, setWorks] = useState([])

  const handleCategoryClick = (type) => {
    setSelectedCategory(type)
  }

  const filterFunction = function (work) {
    return work.attributes.categories.data.some((category) => category.id === selectedCategory)
  }

  const filteredData = !selectedCategory ? works : works.filter(filterFunction)

  const categories = []
  for (const work of works) {
    for (const category of work.attributes.categories.data) {
      categories.push({ id: category.id, name: category.attributes.name })
    }
  }

  const uniqCategories = [...new Map(categories.map((category) => [category.name, category])).values()]

  return (
    <>
      <section className="mx-auto py-5 max-w-6xl flex justify-center flex-col items-center gap-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex-wrap lg:flex justify-center gap-4 md:gap-5">
          <li
            className={`cursor-pointer py-2 px flex justify-center rounded w-32 text-xs md:text-sm ${
              !selectedCategory ? 'bg-primary text-white' : 'border border-gray-600 text-gray-600'
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            Toate lucrările
          </li>
          {uniqCategories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer py-2 px flex justify-center rounded w-32 text-xs md:text-sm ${
                selectedCategory === category.id ? 'bg-primary text-white' : 'border border-gray-600 text-gray-600'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-start">
          {filteredData.map(({ id, attributes }) => (
            <div className="flex items-center justify-start" key={id}>
              <div className="flex flex-col items-center gap-3 min-w-full relative">
                <div className="absolute top-2 right-2 rounded bg-gray-700 text-white text-xs py-1 px-2">
                  {attributes.categories.data[0].attributes.name}
                </div>
                {attributes.cover && attributes.cover.data && attributes.cover.data.attributes.formats.small && (
                  <img
                    className="md:max-h-44 min-w-full rounded-sm object-cover max-h-36"
                    src={'http://localhost:1337' + attributes.cover.data.attributes.formats.small.url}
                    alt={attributes.name}
                  />
                )}
                <Link
                  to={`/catalog/${id}`}
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
