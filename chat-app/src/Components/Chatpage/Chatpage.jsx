import React from 'react'
import "./Chatpage.css";
import { useLocation } from 'react-router-dom';

export default function Chatpage() {
  const location=useLocation();
  const receivet=location.state;
  return (
    <div>
        <div className='chat-box'>
           <div className="chat-view">
            <h3>{receivet.email}</h3>

           </div>
    <div>
      <input type="text" className='input'/>
      <button className='button'>send</button>
    </div>
        </div>
    </div>
  )
}
