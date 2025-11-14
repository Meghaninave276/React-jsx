import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SignIns from './Components/SignIns/SignIns'
import Signups from './Components/Signups/Signups'
import Userhomepage from './Components/Userhomepage/Userhomepage'
import { Routes,Route } from 'react-router-dom'
import Chatpage from './Components/Chatpage/Chatpage'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<SignIns/>}/>
      <Route path="/signup" element={<Signups/>}/>
      <Route path="/home" element={<Userhomepage/>}/>
      <Route path="/chat" element={<Chatpage/>}/>
    </Routes>
    {/* <Userhomepage/> */}
    {/* <SignIns/> */}
    {/* <Signups/> */}
   
    </>
  )
}

export default App
