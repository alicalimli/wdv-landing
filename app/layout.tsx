import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { poppins } from "./fonts";

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_KEY}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_KEY}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <link rel="icon" href="/favicon.png" sizes="any" />

      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
