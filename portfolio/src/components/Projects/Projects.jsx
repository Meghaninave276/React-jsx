import React from 'react';
import "./Projects.css";

export default function Projects(props) {
    const repolist=props.project;
  return (
    <div>
        <section className='p-sec'>
            <div className="grid">
            {
                repolist.map((r,index)=>{
                    const {name,html_url, language }=r;
                  return (
                      <div key={index} className="box">
                        <h2>{name}</h2>
                        <div className="btn-row">
                            <button>{language ?? "C."}</button>
                            <button><a href={html_url}>link</a></button>
                        </div>

                    </div>
                  )
                })
            }

            </div>

        </section>
    </div>
  )
}
