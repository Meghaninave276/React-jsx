import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addtodo } from '../../Slices/Todoslice'

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
        </div>
    </div>
  )
}
