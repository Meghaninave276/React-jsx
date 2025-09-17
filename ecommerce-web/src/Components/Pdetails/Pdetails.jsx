import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Pdetails() {
  const { state: p } = useLocation(); 

  if (!p) {
    return <h2>No product selected</h2>; 
  }

  return (
    <div className="pro-box">
      <div className="p">
        <img src={p.image} alt={p.title} />
        <h3>{p.title}</h3>
        <p>{p.category}</p>
        <p>{p.description}</p>
        <h4>{p.price}</h4>
      </div>
    </div>
  )
}
