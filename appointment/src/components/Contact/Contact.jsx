import React, { useState } from 'react'
import "./Contact.css";

export default function Contact() {
  const date=new Date();
  const [formdata,setFormdata]=useState({
    name:"",
    age:"",
    gender:"male",
    date:`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
    cu:"accident",
    docs:"Dr. Ram nene",
    phone:""


  });
  
  const [formlist,setFormlist]=useState([]);

  const handleinput=(e)=>{
    const {name,value}=e.target;
    const newdata={...formdata,
      [name]:value.trim()

    };
    setFormdata(newdata);
    

  }
  const handlesubmit=(e)=>{
   e.preventDefault();
    console.log(formdata);
    if(formdata.name!="" && formdata.age!="" && formdata.phone!="")
    {
      console.log(formdata);
      let arr=[...formlist];
    arr.push(formdata);
    setFormlist(arr);
    

    }
    else
    {
      alert("all fields are required!");

    }
    
  }
  return (
    <div className='main'>
        <div className='contacts'>
            <h1>Appointment Form</h1>
           
            <form action="" className='forms' onSubmit={handlesubmit}>
                <div className='names'>
                    <label htmlFor="">Name</label>
                <input type="text" value={formdata.name} name='name'onChange={handleinput} placeholder='enter Patient Name'/>
   
                </div>

                  <div className='ages'>
                    <label htmlFor="">Age</label>
                <input type="number" value={formdata.age} name='age'onChange={handleinput} placeholder='Enter Patient Age'/>
   
                </div>
                 
   
            <div className='mf'>
  <label className="gender-label">Gender</label>
  <div className="gender-options">
    <label>male </label>
      <input
  type="radio"
  name="gender"
  value="male"
  checked={formdata.gender === "male"}
  onChange={handleinput}
/>
   
    <label>female</label>
 <input
  type="radio"
  name="gender"
  value="female"
  checked={formdata.gender === "female"}
  onChange={handleinput}
/>
    
  </div>
</div>
                <div className="dates">
                       <label htmlFor="">Date</label>
                <input type="date" value={formdata.date} name='date' onChange={handleinput}
                 placeholder='Enter Patient Age'/>
                </div>
                <div className="cp">
                    <label htmlFor="">Current Problem</label>
                    <select name="cu"onChange={handleinput} id="">
                        <option value="accident">accident</option>
                        <option value="Work injury">Work injury</option>
                        <option value="Mental Health">Mental Health</option>
                        <option value="Other">Other</option>

                    </select>
                </div>
                 <div className="doc">
                    <label htmlFor="">doctor</label>
                    <select name="docs"onChange={handleinput} id="">
                        <option value="Dr.Ram Nene">Dr.Ram Nene</option>
                        <option value="Dr.Rohit Viradiya">Dr.Rohit Viradiya</option>
                        <option value="Dr.Jay Patel">Dr.Jay Patel</option>
                        <option value="Dr. Kartik Aryan">Dr. Kartik Aryan</option>

                    </select>
                </div>
                  <div className="p">
                       <label htmlFor="">Phone</label>
                <input type="tel" value={formdata.phone} name='phone'onChange={handleinput} placeholder='Enter Phone no.'/>
                </div>
                <button type='submit'>Book Appointment</button>
            </form>


        
        </div>
        <div className="details">
          {
            formlist.map((f,index)=>(
              <div key={index}>
                <h1>Name:{f.name}</h1>
                <h2>Age:{f.age}</h2>
                <h3>Gender:{f.gender}</h3>
                <h4>Date:{f.date}</h4>
                <h5>Cuurrent problem:{f.cu}</h5>
                <h6>Doctor:{f.docs}</h6>
                <p>Phone no:{f.phone}</p>

              </div>
            ))

          }
        </div>
      
    </div>
  )
}
