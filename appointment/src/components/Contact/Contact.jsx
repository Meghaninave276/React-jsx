import React from 'react'
import "./Contact.css";

export default function Contact() {
  return (
    <div>
        <section className='contacts'>
            <h1>Appointment Form</h1>
           
            <form action="" className='forms'>
                <div className='names'>
                    <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='enter Patient Name'/>
   
                </div>

                  <div className='ages'>
                    <label htmlFor="">Age</label>
                <input type="number" name='email' placeholder='Enter Patient Age'/>
   
                </div>
                 
   
            <div className='mf'>
  <label className="gender-label">Gender</label>
  <div className="gender-options">
    <label>
      <input type="radio" name="gender" value="male" /> Male
    </label>
    <label>
      <input type="radio" name="gender" value="female" /> Female
    </label>
  </div>
</div>
                <div className="dates">
                       <label htmlFor="">Date</label>
                <input type="Date" name='email' placeholder='Enter Patient Age'/>
                </div>
                <div className="cp">
                    <label htmlFor="">Current Problem</label>
                    <select name="cu" id="">
                        <option value="">accident</option>
                        <option value="">Work injury</option>
                        <option value="">Mental Health</option>
                        <option value="">Other</option>

                    </select>
                </div>
                 <div className="doc">
                    <label htmlFor="">doctor</label>
                    <select name="docs" id="">
                        <option value="">Dr.Ram Nene</option>
                        <option value="">Dr.Rohit Viradiya</option>
                        <option value="">Dr.Jay Patel</option>
                        <option value="">Dr. Kartik Aryan</option>

                    </select>
                </div>
                  <div className="p">
                       <label htmlFor="">Phone</label>
                <input type="tel" name='email' placeholder='Enter Phone no.'/>
                </div>
            </form>
        </section>
    </div>
  )
}
