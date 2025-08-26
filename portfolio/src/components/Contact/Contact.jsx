import React, { useRef, useState } from 'react';
import "./Contact.css"


export default function Contact() {
  const [con, setCon]=useState({
    name:"",
    email:"",
    phone:""
  });

  //  const name = useRef("");
  //  const email = useRef("");
  //  const phone = useRef("");
  //  const handlesubmit=()=>{
  //   alert(name.current.valueOf);
  //   alert(email.current.valueOf);
  //   alert(phone.current.valueOf);


  //  }

  
  const handleinput=(e)=>{
    const key=e.target.name;
    const value=e.target.value;

    const temp={...con};
    temp[key]=value;
    setCon(temp);
  }
  const handlesubmit=()=>{
   alert(con);
  }
  return (
    <div>
        <section className='con-sec'>
            <div className="contact">
                <h1>Contact Us</h1>
                <label htmlFor="">Name</label>
                <input type="text"value={con.name} onChange={handleinput} name='name'  />
                <label htmlFor="">Email</label>
                <input type="email" value={con.email}onChange={handleinput} name='email' />
                <label htmlFor="">Phone No.</label>
                <input type="tel" value={con.phone}onChange={handleinput}name='phone' />
                <button onClick={handlesubmit}>Submit</button>

            </div>


            <div className="info">
              <p className='n'>{con.name}</p>
              <p className='e'>{con.email}</p>
              <p className='p'>{con.phone}</p>
              <p></p>
            </div>

        </section>
    </div>
  )
}
