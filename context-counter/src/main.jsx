import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counterprovider from './Context/Counterprovider.jsx'

createRoot(document.getElementById('root')).render(
  
   
<Counterprovider>
  <App/>
</Counterprovider>
)
