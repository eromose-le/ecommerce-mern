import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BA. Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.ibb.co/2jNk5WT/BA-png-black.png"
            alt="BA-png-black"
            border="0"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
