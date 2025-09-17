import { useEffect, useState } from "react";

export default function Cart({ cartlist, setCartlist}) {
  const [total,setTotal]=useState(0);
  const tprice=()=>{
    let sum=0;
    cartlist.map((c)=>{
      sum=sum+c.price;

    });
    setTotal(sum);
}
useEffect(() => {
  tprice();
}, [cartlist]);

  const removepfromcart=(index)=>{
    const arr=[...cartlist];
    arr.splice(index,1);
    setCartlist(arr);


  }
  return (
    <div>
      <h1 className="text-center">Cart Page</h1>
      <div className="total">
         <h2 className="text-center">Total:Rs.{total}</h2>
      </div>
      
      <div className="pro-box">
        {cartlist.map((c, index) => (
          <div className="p" key={index}>
            <img src={c.image} alt="" />
            <h3>{c.title}</h3>
            <p>{c.category}</p>
            <h4>{c.price}</h4>
            <button className="btn btn-danger" onClick={()=>removepfromcart(index)}>Remove</button>
          </div>
        ))}
       
      </div>
    </div>
  )
}
