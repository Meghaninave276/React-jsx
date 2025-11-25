import React, { useEffect, useState } from "react";
import "./Chatpage.css";
import { useLocation } from "react-router-dom";
import { sendmessage, readmessage, deletemessage } from "../../slices/chatslice";
import { useDispatch, useSelector } from "react-redux";

export default function Chatpage() {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const { chats } = useSelector((state) => state.chats);
  const location = useLocation();
  const [message, setMessage] = useState("");

  const receiver = location.state;

  // Load messages initially + when receiver changes
  useEffect(() => {
    if (!receiver || !currentuser) return;

    dispatch(
      readmessage({
        sender: currentuser.email,
        receiver: receiver.email,
      })
    );
  }, [receiver?.email]);

  // Poll messages every 1 second
  useEffect(() => {
    if (!receiver) return;
    const interval = setInterval(() => {
      dispatch(
        readmessage({
          sender: currentuser.email,
          receiver: receiver.email,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [receiver?.email]);

  const sendMsg = async () => {
    if (!message.trim()) return;

    await dispatch(
      sendmessage({
        message,
        sender: currentuser.email,
        receiver: receiver.email,
      })
    );

    setMessage("");
  };

  const handledeletemessage = (chatid) => {
    dispatch(
      deletemessage({
        sender: currentuser.email,
        receiver: receiver.email,
        chatid,
      })
    );
  };

  return (
   <div className="chat-container">
  <div className="chat-header">
    <div className="chat-user-avatar">
      {receiver.email[0].toUpperCase()}
    </div>
    <div className="chat-user-info">
      <h3>{receiver.email}</h3>
      <span className="status">online</span>
    </div>
  </div>

  <div className="chat-body">
    {chats.map((chat, i) => {
      const side =
        chat.sender === currentuser.email
          ? "message-right"
          : "message-left";

      return (
        <div
          onDoubleClick={() => handledeletemessage(chat.chatid)}
          className={`chat-message ${side}`}
          key={i}
        >
          <div className="bubble">{chat.message}</div>
        </div>
      );
    })}
  </div>

  <div className="chat-input-area">
    <input
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="chat-input"
      placeholder="Type a message"
    />
    <button className="chat-send-btn" onClick={sendMsg}>
      Send
    </button>
  </div>
</div>

  );
}
