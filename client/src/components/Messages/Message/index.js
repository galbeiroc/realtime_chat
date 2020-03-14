import React from 'react';
import ReactEmoji from 'react-emoji'

import './style.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentCurrentUser = true;
  }

  return isSentCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText ColorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <div className="sentText pl-10">{user}</div>
    </div>
  );
};

export default Message;
