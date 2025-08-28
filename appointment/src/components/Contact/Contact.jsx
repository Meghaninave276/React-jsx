import React, { useState } from 'react'
import "./Contact.css";

export default function Contact() {
  const date=new Date();
  const [formdata,setFormdata]=useState({
    name:"",
    age:"",
    gender:"Male",
    date:`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
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

    }
    else
    {
      alert("all fields are required!");

    }
    
  }
  return (
    <div>
        <section className='contacts'>
            <h1>Appointment Form</h1>
           
            <form action="" className='forms' onSubmit={handlesubmit}>
                <div className='names'>
                    <label htmlFor="">Name</label>
                <input type="text" name='name'onChange={handleinput} placeholder='enter Patient Name'/>
   
                </div>

                  <div className='ages'>
                    <label htmlFor="">Age</label>
                <input type="number" name='age'onChange={handleinput} placeholder='Enter Patient Age'/>
   
                </div>
                 
   
            <div className='mf'>
  <label className="gender-label">Gender</label>
  <div className="gender-options">
    <label>
      <input type="radio" name="gender" onChange={handleinput}value="male" /> Male
    </label>
    <label>
      <input type="radio" name="gender"onChange={handleinput} value="female" /> Female
    </label>
  </div>
</div>
                <div className="dates">
                       <label htmlFor="">Date</label>
                <input type="Date" name='date' onChange={handleinput}
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
                <input type="tel" name='phone'onChange={handleinput} placeholder='Enter Phone no.'/>
                </div>
                <button type='submit'>Book Appointment</button>
            </form>
        </section>
    </div>
  )
}
