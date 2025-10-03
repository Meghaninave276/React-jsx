import React, { useState } from 'react'
import { Countercontext } from '../../Context/Counterprovider'
import { useContext } from 'react'

export default function Todos() {
  const {todos,createtodo,removetodo,updatetodo} =   useContext(Countercontext);
  const [store,setStore]=useState("");
  const handleadd=()=>{
    createtodo(store);
    setStore("");

  }



  return (
    <div>
      <div>
        <input type="text" value={store} onChange={((e)=>setStore(e.target.value))} />
        <button onClick={handleadd}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.title}
          <button onClick={()=>removetodo(todo.title)}>remove</button>
          <button onClick={()=>updatetodo(todo.title,prompt("enter new title"))}>Update</button>
        </div>
        
      ))}
     
    </div>
  )
}
