import React, { useState } from "react";
import styles from "./SignIn.module.css";
import Login from "../Login/Login";

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSwitch = (formType) => {
    setIsLogin(formType === "login");
  };

  return (
    <div className={styles.container}>
      <span>Login/Register:</span>
      <div className={styles.links}>
        <button
          className={`${styles.button} ${isLogin ? styles.active : ""}`}
          onClick={() => handleFormSwitch("login")}
        >
          Login
        </button>
        <div className={styles.divider}></div>
        <button
          className={`${styles.button} ${!isLogin ? styles.active : ""}`}
          onClick={() => handleFormSwitch("register")}
        >
          Register
        </button>
      </div>
      {isLogin ? <Login /> : "Register Component"}
    </div>
  );
}
