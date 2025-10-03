import React from 'react'
import { useContext } from 'react'
import "./Counter.css";
import { Countercontext } from '../../Context/Counterprovider'

export default function Counter() {
 const {count,add,sub,mul,div} =  useContext(Countercontext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}>sub</button>
      <button onClick={mul}>mul</button>
      <button onClick={div}>div</button>
    </div>
  )
}
