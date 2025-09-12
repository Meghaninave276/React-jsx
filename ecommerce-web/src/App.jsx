
import './App.css'
import About from './Components/About/About'
import Carousel from './Components/Carousel/Carousel'
import Home from './Components/Home/Home'
import Registration from './Components/Registration/Registration'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
   <Routes>
    <Route path='/' element={<Registration/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>

   
   </Routes>
    </>
  )
}

export default App
