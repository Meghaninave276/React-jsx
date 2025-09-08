import React from 'react';
import "./Watch.css";

export default function Watch({ watchs }) {
  return (
    <div className='main'>
      <section className='watch-sec' id='watch'>
          <h2>Watches</h2>
        <div className="grid">
        
          {watchs.map((w, index) => {
            const { image,title, description,price} = w;
            return (
              <div key={index}>
                <img src={image} alt="watch" />
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>{"$"+price}</h5>
                <button className='Add to cart'>Add to cart</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
