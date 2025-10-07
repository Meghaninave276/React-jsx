import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addtodo, removetodo } from '../../Slices/Todoslice'
import "./Todo.css";

export default function Todo() {
 const dispatch = useDispatch();

    const {todos,message}=useSelector((state)=>state.todos);
  return (
    <div>
        <div>
            {
                todos.map((todo,index)=>(
                    <div key={index} className='todo-list'>
                        <p>{todo}</p>
                        

                    </div>



                ))
            }
            
            <h1>{message}</h1>
            
            <button onClick={()=>{
                dispatch(addtodo("task-1"))
            }}>Add </button>
            <button onClick={()=>{
                dispatch(removetodo());
            }}>remove</button>
            <button></button>
        </div>
    </div>
  )
}
