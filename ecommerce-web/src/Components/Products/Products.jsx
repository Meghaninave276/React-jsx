import React from 'react'

import "./Products.css";
import { useNavigate } from 'react-router-dom';

export default function Products({Data,setCartlist}) {
    const navigate= useNavigate();

  return (
    <div className='pro bg-black '>
        <h1 className='text-center text-white'>Products</h1>
      <div className="pro-box">
        {
            Data.map((p,index)=>(
                <div className="p" key={index}>
                    <img src={p.image} alt="" />
                    <h3>{p.title}</h3>
                   <p>{p.category}</p>
                   <h4>{p.price}</h4>
                   <button onClick={()=>{
                    
                    navigate('/pdetails',{state:p})
                   }}>View More</button>
                  <button className='ms-3' onClick={()=>{
                 setCartlist(prev => [...prev, p]);  
                        navigate("/cart");
                        }}>Add to cart</button>

                </div>


            ))
        }
      </div>

    </div>
  )
}
