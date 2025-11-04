"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchWithAuth } from "@/app/utils/api";
import styles from "./List.module.css";

export default function AuctionsList() {
  const [auctions, setAuctions] = useState<any[]>([]);

  const fetchAuctions = async () => {
    try {
      const res = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/auctions`);
      const data = await res.json();
      setAuctions(Array.isArray(data) ? data : data.auctions || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/api/auctions/${id}`, {
        method: "DELETE",
      });
      fetchAuctions();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAuctions();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Auctions</h1>
        <Link href="/dashboard/auctions/add">
          <button className={styles.addBtn}>Add Auction</button>
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.theadDark}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Max Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {auctions.map((auc, i) => (
              <tr key={auc._id} className={styles.row}>
                <td>{i + 1}</td>
                <td>{auc.name}</td>
                <td>{auc.maxprice}</td>
                <td className={styles.actions}>
                  <Link href={`/dashboard/auctions/${auc._id}/edit`}>
                    <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                  </Link>
                  <button
                    className={`${styles.btn} ${styles.delete}`}
                    onClick={() => handleDelete(auc._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {auctions.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "1rem" }}>
                  No auctions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
