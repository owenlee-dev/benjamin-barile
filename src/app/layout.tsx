import type { Metadata } from "next";
import "./styles/globals.scss";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Benjamin Barrile",
  description: "plink plunk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qob7xyd.css" />
        <link rel="stylesheet" href="https://use.typekit.net/qob7xyd.css" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
