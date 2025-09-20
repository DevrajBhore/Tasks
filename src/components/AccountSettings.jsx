import React from "react";
import "../styles/AccountSettings.css";
import Ellipse114 from "../images/Ellipse114.png";
import badgeImg from "../images/Group1585.png";

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-header">
        <h1 className="account-settings-title">Account Settings</h1>
      </div>
      <div className="account-settings-content">
        <div className="profile-section">
          <div className="avatar-container">
            <img src={Ellipse114} alt="Profile" className="avatar" />
            <div
              className="avatar-badge"
              style={{ backgroundImage: `url(${badgeImg})` }}
            ></div>
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Marry Doe</h2>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="divider" />
      </div>
      
    </div>
  );
};

export default AccountSettings;
