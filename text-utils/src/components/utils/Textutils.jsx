import {use, useState} from 'react';
import "./Textutils.css";

export default function Textutils() {
    const [text,setText]=useState("");
    const [char,setChar]=useState(0);
    const [words,setWords]=useState(0);
    const [upper,setupper]=useState("");
    const [lower,setlower]=useState("");
    const [read,setRead]=useState(0);
    const [vowels,setVowels]=useState(0);

    



    const handletext=(e)=>setText(e.target.value);
    const handlechar=()=>{
        setChar(text.length);

    }
    const handlewords=()=>{
        const word=text.split(" ");
        setWords(word.length);
    }
    const handleupper=()=>{
        setupper(text.toUpperCase());

    }
    const handlelower=()=>{
        setlower(text.toLowerCase());

    }
    const handlereadtime=()=>{
        const word=text.split(" ");
        setRead(word.length*0.25+"minutes");
    }
    const handlevowels=()=>{
        const vowelCount = text.toLowerCase().match(/[aeiou]/g)?.length || 0;
    setVowels(vowelCount);
    }
   

  return (
    <div className='textutils-container'>
    <h2>Text-utils</h2>
        <div >
            <input type="text"  placeholder='enter text' value={text} onChange={handletext}/>

        </div>
        
        <div className='p'>
            <p>{text}</p>

        </div>
     
        <div className='buttons'>
            <button className='char' onClick={handlechar}>char</button>
            <button className='word' onClick={handlewords}>words</button>
            <button className='upper' onClick={handleupper}>upper</button>
            <button className='lower' onClick={handlelower}>lower</button>
            <button className='time' onClick={handlereadtime}>time</button>
            <button className='vowels' onClick={handlevowels}>vowels</button>
        </div>
       
        <div className='w'>
            <h3>Total char length:{char}</h3>
            <h3>Total words length:{words}</h3>
            <h3>Uppercase:{upper}</h3>
            <h3>Lowercase:{lower}</h3>
            <h3>Time to Read:{read}</h3>
            <h3>Total vowels:{vowels}</h3>

        </div>
    </div>
  )
}
