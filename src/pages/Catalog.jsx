import React, { useState } from 'react'
import products from '../data/products.json'

function Catalog() {
  const [selectedType, setSelectedType] = useState('')
  const [showAllProducts, setShowAllProducts] = useState(true)

  const handleTypeClick = (type) => {
    setSelectedType(type)
    setShowAllProducts(false)
  }

  const filteredData = showAllProducts ? products : products.filter((product) => product.type === selectedType)

  return (
    <section className="mx-auto pb-10 max-w-6xl flex justify-center flex-col items-center gap-10">
      <ul className="flex gap-10">
        <li className="cursor-pointer py-2 px-2 flex justify-center text-white rounded w-25 bg-primary" onClick={() => setShowAllProducts(true)}>
          Toate lucrările
        </li>
        <li className="cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('set')}>
          Set
        </li>
        <li className="cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('sofa')}>
          Sofa
        </li>
        <li className="cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('table')}>
          Masă
        </li>
        <li className="cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('chair')}>
          Scaun
        </li>
        <li className="cursor-pointer py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('case')}>
          Carcasă
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-4 justify-start">
        {filteredData.map((product) => (
          <div className="flex items-center justify-start" key={product.id}>
            <img className="max-h-44 rounded-sm object-cover" src={product.images[0]} alt={product.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog
