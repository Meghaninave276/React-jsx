import React, { useEffect, useState } from 'react'

import axios from "axios";
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';

export default function Home() {
  const [profile,setProfile]=useState({});
  const [project,setProject]=useState([]);
useEffect(()=>{ fetchprofile().then((data)=>setProfile(data));
  projects().then((data)=>setProject(data));
},[]);
   
  

  const fetchprofile=async()=>{
    const res= await axios.get("https://api.github.com/users/meghaninave276");
    return res.data;

  }
  const projects=async()=>{
    const res=await axios.get("https://api.github.com/users/meghaninave276/repos")
    return res.data;

  }

  return (
    <div>
      <About user={profile}/>
      <Projects project={project}/>
        
    </div>
  )
}
