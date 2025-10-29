"use client";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import { isLoggedIn, isAdmin } from "../utils/api";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else if (!isAdmin()) {
      alert("Access denied. Admins only.");
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
