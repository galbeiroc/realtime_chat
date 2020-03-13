import React from 'react';
import './style.css';

import onlineIcon from '../../icons/onlineIcon'
import closeIcon from '../../icons/closeIcon'

const InfoBar = ({room}) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} className="onLineIcon" alt="online image" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
