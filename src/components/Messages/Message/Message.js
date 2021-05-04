import React from 'react';

import './Message.css';

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">

          <div className="messageBox backgroundBlue">
          <p className="sentText colorGrey pr-10">{trimmedName}</p>
            <p className="messageText colorWhite">{text}</p>
            <p className="messageTime colorGrey">{time}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="sentText">{user}</p>
            <p className="messageText colorDark">{text}</p>
            <p className="messageTime">{time}</p>
          </div>
        </div>
      )
  );
}

export default Message;