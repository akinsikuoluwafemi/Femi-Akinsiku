import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Femi Akinsiku — Senior Software Engineer",
  description:
      "Senior software engineer specializing in authentication systems, distributed infrastructure, and multi-tenant architecture. 8+ years building systems that scale.",
  openGraph: {
    title: "Femi Akinsiku — Senior Software Engineer",
    description:
      "Senior software engineer specializing in authentication systems, distributed infrastructure, and multi-tenant architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: "#0a192f", color: "#8892b0" }}>
        {children}
      </body>
    </html>
  );
}
