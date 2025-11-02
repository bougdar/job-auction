"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../List.module.css";

export default function EditCategory() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      const cat = data.find((c: any) => c._id === id);
      if (cat) setName(cat.name);
    };
    fetchCategory();
  }, [id]);

  const handleUpdate = async () => {
    if (!name.trim()) return alert("Enter a category name");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}`, {
        method: "PUT",
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
      <h1 className={styles.title}>Edit Category</h1>
      <div className={styles.form}>
        <input
          type="text"
          value={name}
          placeholder="Enter new name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleUpdate} className={styles.addBtn} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
}
