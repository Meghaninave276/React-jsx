import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Album from './components/Album/Album'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Album/>
    <Footer/>
     
    </>
  )
}

export default App
