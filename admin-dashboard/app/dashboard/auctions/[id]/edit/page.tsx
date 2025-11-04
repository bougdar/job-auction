"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "../../List.module.css";

export default function EditAuction() {
    const router = useRouter();
    const { id } = useParams();
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

    useEffect(() => {
        const fetchAuction = async () => {
            try {
                const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/auctions/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setForm({
                        name: data.name || "",
                        description: data.description || "",
                        images: data.images || "",
                        address: data.address || "",
                        maxprice: data.maxprice || "",
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };
        if (id) fetchAuction();
    }, [id]);

    const handleUpdate = async () => {
        setLoading(true);
        try {
            const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/auctions/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) router.push("/dashboard/auctions");
            else {
                const data = await res.json();
                alert(data.message || "Failed to update auction");
            }
        } catch (err) {
            console.error(err);
            alert("Error updating auction");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>Edit Auction</h1>
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
                <button onClick={handleUpdate} className={styles.addBtn} disabled={loading}>
                    {loading ? "Updating..." : "Update"}
                </button>
            </div>
        </div>
    );
}
