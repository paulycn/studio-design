import React, { useState, useEffect } from 'react'
import products from '../data/products.json'
import { Link } from 'react-router-dom'

function Catalog() {
  const [selectedType, setSelectedType] = useState('')
  const [showAllProducts, setShowAllProducts] = useState(true)

  const handleTypeClick = (type) => {
    setSelectedType(type)
    setShowAllProducts(false)
  }

  const filteredData = showAllProducts ? products : products.filter((product) => product.type === selectedType)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="mx-auto py-5 max-w-6xl flex justify-center flex-col items-center gap-10">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex-wrap lg:flex justify-center gap-5 md:gap-10">
        <li
          className={`cursor-pointer py-2 px-2 flex justify-center text-white rounded w-25 text-xs md:text-base ${
            selectedType === '' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => {
            setSelectedType('')
            setShowAllProducts(true)
          }}
        >
          Toate lucrările
        </li>
        <li
          className={`cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 text-xs md:text-base ${
            selectedType === 'set' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => handleTypeClick('set')}
        >
          Set
        </li>
        <li
          className={`cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 text-xs md:text-base ${
            selectedType === 'sofa' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => handleTypeClick('sofa')}
        >
          Sofa
        </li>
        <li
          className={`cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 text-xs md:text-base ${
            selectedType === 'table' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => handleTypeClick('table')}
        >
          Masă
        </li>
        <li
          className={`cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 text-xs md:text-base ${
            selectedType === 'chair' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => handleTypeClick('chair')}
        >
          Scaun
        </li>
        <li
          className={`cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 text-sm md:text-base ${
            selectedType === 'case' ? 'bg-active' : 'bg-primary'
          }`}
          onClick={() => handleTypeClick('case')}
        >
          Carcasă
        </li>
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-start">
        {filteredData.map((product) => (
          <div className="flex items-center justify-start" key={product.id}>
            <div className="flex flex-col items-center gap-3">
              <img className="md:max-h-44 rounded-sm object-cover max-h-36" src={product.images[0]} alt={product.name} />
              <Link
                to={`/catalog/${product.id}`}
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
