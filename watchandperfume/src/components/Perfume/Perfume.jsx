import React from 'react';
import "./Perfume.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Perfume({ perfs }) {
  return (
    <div>
      <section className='per-sec' id='perfume'>
        <h2 className='text-center'>Perfumes</h2>
        <div className="grid">
          {perfs.map((p, index) => {
            const { image, title, description, price } = p;
            return (
              <div key={index}>
                <img src={image} alt="perfume" />
                <h3>{title}</h3>
                <p>{description}</p>
                <h5>{"$" + price}</h5>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
