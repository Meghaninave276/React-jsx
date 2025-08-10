import {useState} from 'react';
import "./Alarm.css";

export default function () {
    const [alarm,setalarm]=useState([{time:"7:00AM"}]);
    const [time,setTime]=useState("");
    const [index,setIndex]=useState(0);
    const Add=()=>{
        const newAdd={
            time:time,
        }
        setalarm([...alarm,newAdd]);
        setTime("");
    }

    function deletet(index)
    {
        let temp=[...alarm];
        temp.splice(index,1);
        setalarm(temp);
    }
    const updatet = (index) => {
        setIndex(index);
        setTime(alarm[index].time);
    };
  return (
    
    <div className='input-row'>
        <h2>Alarm Clock</h2>
    <div className='dt'>
        <input type="time" placeholder='enter time' value={time} className='input-time' onChange={(e)=>setTime(e.target.value)}  />
    <button onClick={Add} className='addb'>Add</button>
    </div>
   {alarm.map((a, index) => (
   
            // <h1 key={index}>{a.time}</h1>
          
            <div className='t'>
                   
                            <h1>{a.time}</h1>
                            <div className="button-group">
                            <button className='d' onClick={() => deletet(index)}>Delete</button>
                            <button className='u' onClick={() => updatet(index)}>Update</button>
                        </div>
                        </div>

            ))}

    </div>
  )
}
