import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get('http://localhost:1337/api/works', { params: { populate: ['categories', 'images', 'cover', 'publishedAt'] } })
      .then(({ data }) => setWorks(data.data))
  }, [])

  const [selectedType, setSelectedType] = useState(null)
  const [showAllProducts, setShowAllProducts] = useState(true)
  const [works, setWorks] = useState([])

  const handleTypeClick = (type) => {
    setSelectedType(type)
    setShowAllProducts(false)
  }

  const filterFunction = function (work) {
    return work.attributes.categories.data.some((category) => category.attributes.name === selectedType)
  }

  const filteredData = showAllProducts ? works : works.filter(filterFunction)

  const categories = []
  for (const work of works) {
    for (const category of work.attributes.categories.data) {
      categories.push({ id: category.id, name: category.attributes.name })
    }
    console.log(work.length)
  }

  const uniqCategories = [...new Map(categories.map((category) => [category.name, category])).values()]

  return (
    <section className="mx-auto py-5 max-w-6xl flex justify-center flex-col items-center gap-10">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex-wrap lg:flex justify-center gap-5 md:gap-10">
        {uniqCategories.map((category) => (
          <li
            key={category.id}
            className={`cursor-pointer py-2 px flex justify-center text-white rounded w-24 text-sm md:text-base ${
              selectedType === category.name ? 'bg-active' : 'bg-primary'
            }`}
            onClick={() => handleTypeClick(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-start">
        {filteredData.map(({ id, attributes }) => (
          <div className="flex items-center justify-start" key={id}>
            <div className="flex flex-col items-center gap-3">
              <div>{attributes.categories.data[0].attributes.name}</div>
              {attributes.cover &&
                attributes.cover.data &&
                attributes.cover.data.attributes &&
                attributes.cover.data.attributes.formats &&
                attributes.cover.data.attributes.formats.small &&
                attributes.cover.data.attributes.formats.medium &&
                attributes.cover.data.attributes.formats.large && (
                  <img
                    className="md:max-h-44 rounded-sm object-cover max-h-36"
                    src={'http://localhost:1337' + attributes.cover.data.attributes.formats.medium.url}
                    alt={attributes.name}
                  />
                )}
              <Link
                to={`/catalog/${id}`}
                className="text-sm sm:text-base rounded py-0 px-4 bg-header-col text-white hover:no-underline hover:bg-primary"
              >
                Detalii
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog
