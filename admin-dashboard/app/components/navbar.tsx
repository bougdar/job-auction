"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.topnav}>
      <div className={styles.left}>
        <Link href="/dashboard" className={styles.link}>
          dashboard
        </Link>
        <Link href="/dashboard/profile" className={styles.link}>
          Profile
        </Link>
        <Link href="/dashboard/users" className={styles.link}>
          Users
        </Link>
        <Link href="/dashboard/categories" className={styles.link}>
          Categories
        </Link>
        <Link href="/dashboard/auctions" className={styles.link}>
          Auction
        </Link>
      </div>
      <div className={styles.right}>
        <Link
          href="/login"
          className={styles.link}
          onClick={() => localStorage.removeItem("accessToken")}
        >
          Logout
        </Link>

      </div>
    </nav>
  );
}
