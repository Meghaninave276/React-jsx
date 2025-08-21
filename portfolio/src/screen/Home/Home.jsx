import React, { useEffect, useState } from 'react'
import About from '../../components/About/About';
import axios from "axios";

export default function Home() {
useEffect(()=>{ fetchprofile().then((data)=>setProfile(data));},[]);
   
  

  const fetchprofile=async()=>{
    const res= await axios.get("https://api.github.com/users/meghaninave276");
    return res.data;

  }
  const [profile,setProfile]=useState({});
  return (
    <div>
        
    </div>
  )
}
