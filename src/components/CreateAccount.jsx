import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <div className="create-account-header">
          <h1 className="create-account-title">Create your</h1>
          <h1 className="create-account-title">PopX account</h1>
        </div>

        <form className="create-account-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name*
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number*
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyName" className="form-label">
              Company name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Marry Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label-radio">Are you an Agency?*</label>
            <div className="radio-group">
              <div className="radio-item">
                <input
                  type="radio"
                  id="yes"
                  name="isAgency"
                  value="yes"
                  className="radio-input"
                />
                <label htmlFor="yes" className="radio-label">
                  Yes
                </label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="no"
                  name="isAgency"
                  value="no"
                  className="radio-input"
                />
                <label htmlFor="no" className="radio-label">
                  No
                </label>
              </div>
            </div>
          </div>

          <button onClick={() => navigate("/AccountSettings")} className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount
