import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Features/>
     <Stats/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
