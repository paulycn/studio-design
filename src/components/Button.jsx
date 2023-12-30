import React from 'react'

export default function Button() {
  return (
    <a
      href="tel:+37379908683"
      className="rounded-md  border-transparent bg-primary-500 px-5 py-2 text-base font-medium hover:no-underline hover:border-primary-600 transition duration-250 ease-in-out
     flex justify-center items-center gap-2 bg-primary border border-primary text-white"
    >
      <img src="./img/call.png" alt="call" />
      079 908683
    </a>
  )
}
