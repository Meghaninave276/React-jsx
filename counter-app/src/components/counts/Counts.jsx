
import React, { useState } from 'react'

export default function Counts() {
    const [count,setcount]=useState(1);
    const add=()=>{
        let temp=count;
        temp++;
        setcount(temp);
    }
     const sub=()=>{
        let temp=count;
        temp--;
        setcount(temp);
    }
     const mul=()=>{
        let temp=count;
        temp*=2;
        setcount(temp);
    }
     const div=()=>{
        let temp=count;
        temp/=2;
        setcount(temp);
    }
  return (
    <div>
        <h1>1</h1>
        <div>
            <button onClick={add}>add</button>
            <button onClick={sub}>add</button>
            <button onClick={mul}>add</button>
            <button onClick={div}>add</button>
        </div>

    </div>
  )
}
