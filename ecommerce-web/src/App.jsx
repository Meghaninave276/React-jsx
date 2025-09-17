
import './App.css'
import About from './Components/About/About'
import Nav from './Components/Nav/Nav'
import Pdetails from './Components/Pdetails/Pdetails'
import Data from './Components/json/data'

import Products from './Components/Products/Products'
import Registration from './Components/Registration/Registration'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'



function App() {
  const [cartlist,setCartlist]=useState([]);
  

  return (
    <>

   <Routes>

    <Route path='/' element={<Registration/>}/>
    <Route path='/nav' element={<Nav/>}/>
    
 
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Products  Data={Data} setCartlist={setCartlist}/>}/>
  <Route path='/pdetails' element={<Pdetails/>}/>
   <Route path='/cart' element={<Cart cartlist={cartlist} setCartlist={setCartlist}/>}/>

   
   </Routes>
    </>
  )
}

export default App
