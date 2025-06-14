"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const disableScrollEffect = pathname !== "/";
  return (
    <>
      <Navbar disableScrollEffect={disableScrollEffect} />
      {children}
      <Footer />
    </>
  );
}
