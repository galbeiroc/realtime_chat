import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { ENDPOINT } from '../../config/config';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    console.log(socket);
    
    setName(name);
    setRoom(room);
  }, [ENDPOINT, location.search]);
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
