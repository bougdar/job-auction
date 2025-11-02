"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./List.module.css";

export default function CategoriesList() {
  const [categories, setCategories] = useState<any[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Categories</h1>
        <Link href="/dashboard/categories/add">
          <button className={styles.addBtn}>Add Category</button>
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.theadDark}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => (
              <tr key={cat._id} className={styles.row}>
                <td>{i + 1}</td>
                <td>{cat.name}</td>
                <td className={styles.actions}>
                  <Link href={`/dashboard/categories/${cat._id}/edit`}>
                    <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                  </Link>
                  <button
                    className={`${styles.btn} ${styles.delete}`}
                    onClick={() => handleDelete(cat._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} style={{ textAlign: "center", padding: "1rem" }}>
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
