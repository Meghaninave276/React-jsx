import React, { useEffect, useState } from "react";
import "./Chatpage.css";
import { useLocation } from "react-router-dom";
import { sendmessage, readmessage, deletemessage, updatemessage } from "../../slices/chatslice";
import { useDispatch, useSelector } from "react-redux";

export default function Chatpage() {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const { chats } = useSelector((state) => state.chats);
  const location = useLocation();
  const [message, setMessage] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editChatId, setEditChatId] = useState(null);

  const receiver = location.state;

  useEffect(() => {
    if (!receiver || !currentuser) return;
    dispatch(readmessage({ sender: currentuser.email, receiver: receiver.email }));
  }, [receiver?.email]);

  useEffect(() => {
    if (!receiver) return;
    const interval = setInterval(() => {
      dispatch(readmessage({ sender: currentuser.email, receiver: receiver.email }));
    }, 1000);
    return () => clearInterval(interval);
  }, [receiver?.email]);

  const sendMsg = async () => {
    if (!message.trim()) return;

    if (isEditing) {
      await dispatch(
        updatemessage({
          sender: currentuser.email,
          receiver: receiver.email,
          chatid: editChatId,
          newMessage: message,
        })
      );
      setIsEditing(false);
      setEditChatId(null);
    } else {
      await dispatch(
        sendmessage({
          message,
          sender: currentuser.email,
          receiver: receiver.email,
        })
      );
    }

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

  const handleupdatemessage = (chat) => {
    if (chat.sender !== currentuser.email) return;
    setMessage(chat.message);
    setIsEditing(true);
    setEditChatId(chat.chatid);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-user-avatar">{receiver.email[0].toUpperCase()}</div>
        <div className="chat-user-info">
          <h3>{receiver.email}</h3>
          <span className="status">online</span>
        </div>
      </div>

      <div className="chat-body">
        {chats.map((chat, i) => {
          const side = chat.sender === currentuser.email ? "message-right" : "message-left";

          return (
            <div
              key={i}
              className={`chat-message ${side}`}
              onClick={() => handleupdatemessage(chat)}
              onDoubleClick={() => handledeletemessage(chat.chatid)}
            >
              <div className="bubble">
                {chat.message} {chat.edited && <small>(edited)</small>}
              </div>
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
          {isEditing ? "Update" : "Send"}
        </button>
      </div>
    </div>
  );
}
