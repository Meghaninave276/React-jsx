import React, { useEffect } from 'react'
import "./Chatpage.css";
import { useLocation } from 'react-router-dom';
import { sendmessage } from "../../slices/chatslice";
import { useDispatch, useSelector } from "react-redux"
import { getuser } from '../../slices/userslice'

export default function Chatpage() {

  const dispatch = useDispatch();
  const { currentuser } = useSelector(state => state.user)
  const location = useLocation();
  const receiver = location.state;

  useEffect(() => {
    dispatch(getuser());
  }, []);

  const handlesendmsg = () => {
    dispatch(sendmessage({
      sender: currentuser.email,
      receiver: receiver.email
    }));
  }

  return (
    <div>
      <div className='chat-box'>
        <div className="chat-view">
          <h3>{receiver.email}</h3>
        </div>
        <div>
          <input type="text" className='input'/>
          <button className='button' onClick={handlesendmsg}>send</button>
        </div>
      </div>
    </div>
  )
}
