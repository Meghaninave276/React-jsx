import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import News from './components/News/News'
import Footer from './Components/Footer/Footer'



function App() {
 

  return (
    <>
    
    <Navbar/>
    <Hero/>
    <News/>
    <Footer/>
    </>
  )
}

export default App
