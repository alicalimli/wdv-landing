import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development Visuals",
  description:
    "A collection of simplified web development visuals to level up your skills in web development",
  keywords:
    "web development, web developer, Front-end development, HTML, CSS, JavaScript, React, visuals, webdevvisuals, web development visuals",
  openGraph: {
    title: "Web Development Visuals",
    description:
      "A collection of simplified web development visuals to level up your skills in web development",
    url: "https://www.webdevvisuals.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
