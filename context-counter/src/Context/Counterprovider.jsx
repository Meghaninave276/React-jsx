import React, { useState } from 'react'
import { createContext } from 'react'
export const Countercontext=createContext();
export default function Counterprovider({children}) {
    const [count,setCount]=useState(0);

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

  return (
  <Countercontext.Provider value={{count,add,sub,mul,div}}>
    {children}
  </Countercontext.Provider>
  )
}
