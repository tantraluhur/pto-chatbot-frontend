import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ws = new WebSocket("ws://127.0.0.1:8000/ws/1");
export default function Home() {

  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState('');
  

  // Listen for messages
  useEffect(() => {
      ws.addEventListener("message", (event) => {
        setMessages((prevMessages:any) => [...prevMessages, event.data]);
      });
  }, [])

  const sendMessage = () => {
    ws.send(newMessage)
    setNewMessage('');
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
    <div>
      <h1>Real-Time Chat</h1>
      <div>
        {messages.map((message:any, index:any) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
    </main>
  );
}
