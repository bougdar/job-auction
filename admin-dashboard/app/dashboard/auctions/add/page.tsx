"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "../List.module.css";

export default function AddAuction() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        description: "",
        images: "",
        address: "",
        maxprice: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {
        if (!form.name || !form.description || !form.images || !form.address || !form.maxprice) {
            alert("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/auctions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) router.push("/dashboard/auctions");
            else {
                const data = await res.json();
                alert(data.message || "Failed to add auction");
            }
        } catch (err) {
            console.error(err);
            alert("Error adding auction");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Add Auction</h1>
            <div className={styles.form}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={styles.input} />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className={styles.input} />
                <input name="images" placeholder="Images URL" value={form.images} onChange={handleChange} className={styles.input} />
                <input
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input name="maxprice" type="number" placeholder="Max Price" value={form.maxprice} onChange={handleChange} className={styles.input} />
                <button onClick={handleAdd} className={styles.addBtn} disabled={loading}>
                    {loading ? "Adding..." : "Add"}
                </button>
            </div>
        </div>
    );
}
