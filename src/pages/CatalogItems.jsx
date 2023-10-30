import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'

function CatalogItems() {
  const { id } = useParams()
  const product = products.find((t) => t.id === id)

  return (
    <div className="max-w-5xl m-auto py-5 flex flex-col gap-5">
      <h3 className="text-center underline decoration-primary underline-offset-8 decoration-2">{product.name}</h3>
      <p>Materiale: {product.description}</p>
      <div className="grid grid-cols-4 gap-8 justify-start">
        {product.images.map((image, index) => (
          <img className="rounded max-h-44" key={index} src={image} alt="img" />
        ))}
      </div>
      <div className="flex flex-col gap-5 justify-center items-center border border-primary p-10 m-auto rounded">
        <h4>Doriți un design asemănător? </h4>
        <button>Comandă acum!</button>
      </div>
    </div>
  )
}
export default CatalogItems
