import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MyPortfolio — Niraj Maharjan",
  description: "A personal portfolio website build with NextJs, GSAP and Tailwind Css.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}