"use client";

import styles from "./List.module.css";

export default function UsersList() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Auctions Page</h1>
        <button className={styles.addBtn}>Add Auction</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.theadDark}>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.row}>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td className={styles.actions}>
                <button className={`${styles.btn} ${styles.view}`}>View</button>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
            <tr className={styles.row}>
              <th>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td className={styles.actions}>
                <button className={`${styles.btn} ${styles.view}`}>View</button>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
            <tr className={styles.row}>
              <th>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td className={styles.actions}>
                <button className={`${styles.btn} ${styles.view}`}>View</button>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
