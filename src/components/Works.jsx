import React from 'react'
import products from '../data/products.json'

function Works() {
  return (
    <section className="mx-auto max-w-5xl py-20">
      <h2 className="font-medium text-text-p text-3xl text-center underline decoration-primary underline-offset-8 decoration-2">
        Comenzile realizate
      </h2>
      <div className="flex gap-5 items-center justify-start">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <h3>Top Vânzări</h3>
      </div>
      <div>
        {products.map((product) => (
          <img key={product.id} src={product.images[0]} alt={product.name} />
        ))}
      </div>
    </section>
  )
}

export default Works
