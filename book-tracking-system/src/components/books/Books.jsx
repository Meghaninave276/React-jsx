import {useState} from 'react';
import "./Books.css";


export default function 
() {
    const [booklist,setBooklist]=useState([{title:"Rich dad Poor dad",author:"Sharon Lechter"}

    ]);
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [index,setIndex]=useState(0);
    const Addbook=()=>{
        const newbook={
            title:title,
            author:author,


        }
        setBooklist([...booklist,newbook])
         setTitle("");
    setAuthor("");  
    }

   function deleteb(index) {
    let temp = [...booklist];  
    temp.splice(index, 1);     
    setBooklist(temp);     
     
  }
  function updateb(index)
  {
    setIndex(index);
    setTitle(booklist[index].title);
    setAuthor(booklist[index].author);
  }


  return (
    <div className='container'>
        <h2>📘 Ultra Cool Book List</h2>
        <input type="text" placeholder='enter book title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='enter book AUTHOR' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <button onClick={Addbook}>Addbook</button>
        {
            booklist.map((book,i)=>(
                <p key={i}><span>{book.title}-{book.author}</span>
                <span className="actions">
      <button className="de" onClick={() => deleteb(i)}>Delete</button>
      <button className="up" onClick={() => updateb(i)}>Update</button>
    </span>
                </p>

            ))
        }
        

    </div>
  )
}
