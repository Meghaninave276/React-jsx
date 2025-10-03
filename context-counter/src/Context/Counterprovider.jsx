import React, { useState } from 'react'
import { createContext } from 'react'
export const Countercontext=createContext();
export default function Counterprovider({children}) {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([{title:"the white tiger", iscomplete:false}]);

    let add=()=>{
      setCount(count+1);
    }
    let sub=()=>{
      setCount(count-1)
    }

    let mul=()=>{
      setCount(count*2);
    }
    let div=()=>{
      setCount(count/2);
    }

    let createtodo=(title)=>{
      setTodos((prev)=>[...prev,{title:title,iscomplete:false}])

    }
    let removetodo=(title)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.title!==title))
    }
    let updatetodo=(oldtitle,newtitle)=>{


      setTodos((prev)=>prev.map((todo)=>(
        todo.title===oldtitle?{...todo,title:newtitle}:todo
      )));


    }

  return (
  <Countercontext.Provider value={{count,add,sub,mul,div,createtodo,todos,removetodo,updatetodo}}>
    {children}
  </Countercontext.Provider>
  )
}
