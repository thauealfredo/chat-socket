import React, { useState, useEffect } from 'react';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
//import socketIO from 'socket.io-client';

const ChatPage = ({ socket }) => {

  const [messages, setMessages] = useState([]);

  //const socket = socketIO.connect('http://localhost:4000');

  useEffect(() => {
    console.log('mg', messages)
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);


  return (
    <div className="chat">
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;