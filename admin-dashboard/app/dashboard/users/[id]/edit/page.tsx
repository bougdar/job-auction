"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "../../List.module.css";

export default function EditUser() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState<any>({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`);
        const data = await res.json();
        setForm(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchUser();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/dashboard/users");
      else {
        const data = await res.json();
        alert(data.message || "Failed to update user");
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
      <h1 className={styles.title}>Edit User</h1>
      <div className={styles.form}>
        <input name="firstname" placeholder="First Name" value={form.firstname} onChange={handleChange} className={styles.input} />
        <input name="lastname" placeholder="Last Name" value={form.lastname} onChange={handleChange} className={styles.input} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className={styles.input} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className={styles.input} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className={styles.input} />
        <select name="role" value={form.role} onChange={handleChange} className={styles.input}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleUpdate} className={styles.addBtn} disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
}
