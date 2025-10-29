"use client";

import styles from "./EditUser.module.css";

export default function EditUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Edit User</h1>
        <form className={styles.form}>
          <label className={styles.label}>
            First Name
            <input type="text" className={styles.input} defaultValue="John" />
          </label>

          <label className={styles.label}>
            Last Name
            <input type="text" className={styles.input} defaultValue="Doe" />
          </label>

          <label className={styles.label}>
            Email
            <input type="email" className={styles.input} defaultValue="john@example.com" />
          </label>

          <button type="submit" className={styles.submitBtn}>Save Changes</button>
        </form>
      </div>
    </div>
  );
}
