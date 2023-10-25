import React, { useState } from 'react'
import products from '../data/products.json'

function Catalog() {
  const [selectedType, setSelectedType] = useState('')

  const filteredData = products.filter((product) => product.type === selectedType)

  const handleTypeClick = (type) => {
    setSelectedType(type)
  }

  return (
    <section className="mx-auto pb-10 max-w-6xl flex justify-center flex-col items-center gap-10">
      <ul className="flex gap-10">
        <li className="py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('set')}>
          Set
        </li>
        <li className="py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('sofa')}>
          Sofa
        </li>
        <li className="py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('table')}>
          Masă
        </li>
        <li className="py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('chair')}>
          Scaun
        </li>
        <li className="py-2 px-9 flex justify-center text-white rounded w-24 bg-primary" onClick={() => handleTypeClick('case')}>
          Carcasă
        </li>
      </ul>
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredData.map((product) => (
          <div className="flex items-center justify-center" key={product.id}>
            <img className="max-h-44 rounded-sm object-cover" src={product.images[0]} alt={product.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalog
