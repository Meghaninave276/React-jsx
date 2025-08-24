import React, { useRef } from 'react';
import "./Contact.css"


export default function Contact() {
   const name = useRef("");
   const email = useRef("");
   const phone = useRef("");
   const handlesubmit=()=>{
    alert(name.current.valueOf);
    alert(email.current.valueOf);
    alert(phone.current.valueOf);


   }
  return (
    <div>
        <section className='con-sec'>
            <div className="contact">
                <h1>Contact Us</h1>
                <label htmlFor="">Name</label>
                <input type="text"  ref={name}/>
                <label htmlFor="">Email</label>
                <input type="email" ref={email} />
                <label htmlFor="">Phone No.</label>
                <input type="tel"  ref={phone}/>
                <button onClick={handlesubmit}>Submit</button>

            </div>

        </section>
    </div>
  )
}
