import {useState} from 'react'

export default function 
() {
    const [booklist,setBooklist]=useState([{id:1,title:"abc",author:xyz}

    ]);
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const Addbook=()=>{
        const newbook={
            title:title,
            author:author,


        }
        setBooklist([...booklist,newbook])
    }


  return (
    <div>
        <input type="text" placeholder='enter book title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='enter book AUTHOR' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <button onClick={Addbook}>Addbook</button>
        {
            booklist.map((book,i)=>{
                <p>{book.title}-{book.author}</p>

            })
        }
        

    </div>
  )
}
