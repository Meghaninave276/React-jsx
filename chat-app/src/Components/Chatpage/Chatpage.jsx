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
    <div className="chat-box">
      <div className="chat-view">
        <h3>{receiver.email}</h3>

        <div>
          {chats.map((chat, i) => {
            const side =
              chat.sender === currentuser.email
                ? "message-right"
                : "message-left";

            return (
              <div
                onDoubleClick={() => handledeletemessage(chat.chatid)}
                className={`message-div ${side}`}
                key={i}
              >
                <span className="message-box">{chat.message}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
        />
        <button className="button" onClick={sendMsg}>
          Send
        </button>
      </div>
    </div>
  );
}
