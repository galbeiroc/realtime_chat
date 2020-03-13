import React from 'react';
import './style.css';
const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form>
      <input
        type="text"
        value={message}
        className="input"
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
        placeholder="Type a message..."
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
  );
};

export default Input;
