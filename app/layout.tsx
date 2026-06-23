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
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Femi Akinsiku — Senior Software Engineer",
    description:
      "Senior software engineer specializing in authentication systems, distributed infrastructure, and multi-tenant architecture.",
    type: "website",
    url: "https://femiakin.com",
    siteName: "Femi Akinsiku",
    images: [
      {
        url: "https://femiakin.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Femi Akinsiku — Senior Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Femi Akinsiku",
    jobTitle: "Senior Software Engineer",
    url: "https://femiakinsiku.com",
    sameAs: [
      "https://github.com/akinsikuoluwafemi",
      "https://linkedin.com/in/femiakinsiku",
    ],
    email: "akinsiku13@gmail.com",
    description:
      "Senior software engineer specializing in authentication systems, distributed infrastructure, and multi-tenant architecture.",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ backgroundColor: "#0a192f", color: "#8892b0" }}>
        {children}
      </body>
    </html>
  );
}
