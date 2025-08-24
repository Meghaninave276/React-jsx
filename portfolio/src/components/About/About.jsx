import React from 'react';
import "./About.css";

export default function About(props) {
    const {id,name,bio,location,avatar_url}=props.user;
  return (
    <div>
        <section className='about-sec'>
            <div className="about">
              <h1>hey,i am a {name}</h1>
             <h3>Bio:{bio}</h3>
             <h4>Location:{location}</h4>
             <div className="buttons">
              <button ><a href="https://www.linkedin.com/in/megha ninave/">Hire Me</a></button>
              <button>Resume</button>

             </div>
            </div>
            <div className="image">
              <img src={avatar_url} alt="" />
            </div>

        </section>
    </div>
  )
}
