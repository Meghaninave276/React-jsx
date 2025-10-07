import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addbook,removebook,updatebook} from '../slices/bookslice'

export default function Book() {
    const dispatch=useDispatch();
    const {books,totals}=useSelector((state)=>state.books);
    const [stores,setStores]=useState("");
    const handleadd=()=>{
      dispatch(addbook(stores))
        setStores("");

    }
    
   
 
  return (
    <div>
        <h1>total:{totals}</h1>
        <input type="text" value={stores}  onChange={((e)=>setStores(e.target.value))}/>
        <button className='btn btn-primary' onClick={handleadd}>Add</button>
        {
            books.map((book,index)=>(
              <div>
                  <h3>{book}</h3>
                  <button onClick={() => dispatch(removebook(index))}>remove</button>
                  <button  onClick={()=>{
                    const newname = prompt("Enter new book name:", books[index]);
                    if(newname)
                    {
                         dispatch(updatebook({ index, value: newname }));
                    }
                  }}>update</button>
              </div>

               


            ))
             

        }
       
    </div>
  )
}
