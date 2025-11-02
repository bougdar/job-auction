"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../List.module.css";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAdd = async () => {
    if (!name.trim()) return alert("Enter a category name");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ name }),
      });
      if (res.ok) {
        router.push("/dashboard/categories");
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Add New Category</h1>
      <div className={styles.form}>
        <input
          type="text"
          value={name}
          placeholder="Enter category name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAdd} className={styles.addBtn} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}
