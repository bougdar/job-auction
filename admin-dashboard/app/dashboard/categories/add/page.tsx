"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../List.module.css";
import { fetchWithAuth } from "@/app/utils/api";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAdd = async () => {
    if (!name.trim()) {
      alert("Enter a category name");
      return;
    }

    setLoading(true);
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        router.push("/dashboard/categories");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to add category");
      }
    } catch (err) {
      console.error("Error adding category:", err);
      alert("An error occurred while adding the category.");
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
        <button
          onClick={handleAdd}
          className={styles.addBtn}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}
