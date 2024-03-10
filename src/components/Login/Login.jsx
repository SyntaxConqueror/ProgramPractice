import React from "react";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password*"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
}
