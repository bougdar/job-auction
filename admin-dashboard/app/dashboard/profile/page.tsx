"use client";

import { useEffect, useState } from "react";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "./List.module.css";

interface ProfileForm {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export default function UpdateProfile() {
  const [form, setForm] = useState<ProfileForm>({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch current user profile
  const fetchProfile = async () => {
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile`);
      const data = await res.json();

      if (res.ok) {
        setForm({ ...data.user, password: "" }); // Prefill form with user data
      } else {
        console.error("Failed to fetch profile:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Update profile
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Profile updated successfully");
        setForm({ ...data.user, password: "" }); // Reset password field
      } else {
        alert(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred while updating your profile.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Update Profile</h1>
      <div className={styles.form}>
        <input
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          value={form.lastname}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          onClick={handleUpdate}
          className={styles.addBtn}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
}
