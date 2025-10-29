"use client";

import styles from "./AddUser.module.css";

export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Add User</h1>
        <form className={styles.form}>
          <label className={styles.label}>
            First Name
            <input type="text" className={styles.input} placeholder="Enter first name" />
          </label>

          <label className={styles.label}>
            Last Name
            <input type="text" className={styles.input} placeholder="Enter last name" />
          </label>

          <label className={styles.label}>
            Email
            <input type="email" className={styles.input} placeholder="Enter email" />
          </label>

          <button type="submit" className={styles.submitBtn}>Add User</button>
        </form>
      </div>
    </div>
  );
}
