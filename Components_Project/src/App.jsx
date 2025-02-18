import React from 'react'
import "../index.css"
import Navbar from './Components/Navbar'
import Product from './Components/Product'

export default function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Product/>
    </main>
    </>
  )
}
