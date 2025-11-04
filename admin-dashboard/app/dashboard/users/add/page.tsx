"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "../List.module.css";

export default function AddUser() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password || !form.role) {
      return alert("Email, password, and role are required");
    }

    setLoading(true);
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) router.push("/dashboard/users");
      else {
        const data = await res.json();
        alert(data.message || "Failed to create user");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Add New User</h1>
      <div className={styles.form}>
        <input name="firstname" placeholder="First Name" onChange={handleChange} className={styles.input} />
        <input name="lastname" placeholder="Last Name" onChange={handleChange} className={styles.input} />
        <input name="address" placeholder="Address" onChange={handleChange} className={styles.input} />
        <input name="phone" placeholder="Phone" onChange={handleChange} className={styles.input} />
        <input name="email" placeholder="Email" onChange={handleChange} className={styles.input} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className={styles.input} />
        <select name="role" value={form.role} onChange={handleChange} className={styles.input}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleSubmit} className={styles.addBtn} disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}
