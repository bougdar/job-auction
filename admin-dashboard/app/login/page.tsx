"use client";

import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input type="email" className={styles.input} placeholder="Enter your email" />
          </label>

          <label className={styles.label}>
            Password
            <input type="password" className={styles.input} placeholder="Enter your password" />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
