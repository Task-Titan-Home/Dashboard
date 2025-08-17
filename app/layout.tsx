import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./solarSystem.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Titan",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
