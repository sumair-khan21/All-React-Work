import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import { Route, Routes } from "react-router-dom";
import CardComp from './Components/CardComp'
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails'
import Footer from './Components/Footer'

// this is the main page of my E-Commerce web
function App() {
  return (
    <>
<Navbar/>
<Hero/>
{/* // this is the main page of my E-Commerce web */}
<h1 className="text-3xl font-bold leading-none text-center mt-0 pt-0 text-amber-900">View Products</h1>
<Routes>
  {/* // this is the main page of my E-Commerce web */}
        <Route index element={<Home />} />
        {/* // this is the main page of my E-Commerce web */}
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
