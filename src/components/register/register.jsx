import React from "react";
import style from "./style.css";

export const Register = () => {
  return (
    <div className="registration-form">
      <form>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Your nickname*"
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name*"
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password*"
            className="register-input"
            required
          />
        </div>
        <div className="avatar-block">
          <button className="button-register-form avatar-button">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.04 19C15.04 16.2386 12.8014 14 10.04 14C7.27855 14 5.03998 16.2386 5.03998 19M15.04 19H15.8431C16.961 19 17.52 19 17.9474 18.7822C18.3237 18.5905 18.6305 18.2837 18.8222 17.9074C19.04 17.48 19.04 16.921 19.04 15.8031V4.19691C19.04 3.07899 19.04 2.5192 18.8222 2.0918C18.6305 1.71547 18.3237 1.40973 17.9474 1.21799C17.5196 1 16.9603 1 15.8402 1H4.24017C3.12007 1 2.5596 1 2.13177 1.21799C1.75545 1.40973 1.44971 1.71547 1.25796 2.0918C1.03998 2.51962 1.03998 3.08009 1.03998 4.2002V15.8002C1.03998 16.9203 1.03998 17.4796 1.25796 17.9074C1.44971 18.2837 1.75545 18.5905 2.13177 18.7822C2.55918 19 3.11897 19 4.23689 19H5.03998M15.04 19H5.03998M10.04 11C8.38312 11 7.03998 9.65685 7.03998 8C7.03998 6.34315 8.38312 5 10.04 5C11.6968 5 13.04 6.34315 13.04 8C13.04 9.65685 11.6968 11 10.04 11Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            &nbsp;Choose your avatar
          </button>
          <label className="chooseFile-label">File is not chosen</label>
        </div>
        <button type="submit" className="button-register-form register-button">Register</button>
      </form>
    </div>
  );
};
