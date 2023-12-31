import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from './Button'

function OrderNow() {
  return (
    <section className="bg-bg-color py-10 md:py-32 relative">
      <img className="hidden md:absolute md:inline-block left-2/3 bottom-20" src="img/armchair.png" alt="chair" />
      <div className="mx-auto md:w-3/4 shadow-sm shadow-primary text-center flex flex-col gap-5 items-center bg-white rounded py-4 md:py-10 px-5 justify-evenly">
        <h2 className="text-2xl md:text-5xl text-primary">Comandă acum!</h2>
        <p className="text-base">Consultă un designer gratuit</p>
        <Fade left>
          <Button>079908683</Button>
        </Fade>
      </div>
    </section>
  )
}

export default OrderNow
