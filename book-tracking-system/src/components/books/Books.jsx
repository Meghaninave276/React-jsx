import {useState} from 'react'

export default function 
() {
    const [booklist,setBooklist]=useState([{title:"abc",author:"xyz"}

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
    <div>
        <input type="text" placeholder='enter book title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='enter book AUTHOR' value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <button onClick={Addbook}>Addbook</button>
        {
            booklist.map((book,i)=>(
                <p>{book.title}-{book.author}
                <button className='de' onClick={()=>deleteb(i)}>Delete</button>
                <button className='up' onClick={()=>updateb(i)}>Update</button>
                </p>

            ))
        }
        

    </div>
  )
}
