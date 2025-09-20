import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="signin-header">
          <h1 className="signin-title">Signin to your</h1>
          <h1 className="signin-title">PopX account</h1>
          <p className="signin-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="loginEmail" className="form-label">
              Email Address
            </label>
            <input
              id="loginEmail"
              type="email"
              placeholder="Enter email address"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              id="loginPassword"
              type="password"
              placeholder="Enter password"
              className="form-input"
            />
          </div>

          <button onClick={() => navigate("/AccountSettings")} className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
