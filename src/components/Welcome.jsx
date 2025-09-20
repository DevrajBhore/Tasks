import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="welcome-buttons">
          <button
            onClick={() => navigate("/CreateAccount")}
            className="btn btn-primary"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/SignIn")}
            className="btn btn-secondary"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
