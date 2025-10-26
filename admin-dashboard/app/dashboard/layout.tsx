import type { ReactNode } from "react";
import Navbar from "../components/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (

    <>
      <Navbar />
      <main>{children}</main>
    </>

    );
}
