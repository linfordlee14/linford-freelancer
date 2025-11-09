import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linfy Tech Solutions | Data Analytics, Web Development & Cybersecurity Services",
  description: "Transform your data into impact. Expert data analytics dashboards, secure web development, and cybersecurity services for conservation organizations and small businesses.",
  keywords: ["data analytics", "web development", "cybersecurity", "wildlife conservation", "business intelligence", "Linford Musiyambodza"],
  authors: [{ name: "Linford Musiyambodza" }],
  openGraph: {
    title: "Linfy Tech Solutions - Tech for Impact",
    description: "Turning wildlife data into impact with AI and analytics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
