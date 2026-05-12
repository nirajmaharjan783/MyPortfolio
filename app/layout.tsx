import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";

export const metadata: Metadata = {
  title: "MyPortfolio — Niraj Maharjan",
  description:
    "A personal portfolio website built with Next.js, GSAP and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GSAPProvider />
        <div className="noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}