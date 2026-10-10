import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Starter", template: "%s · Starter" },
  description: "A Next.js starter with the App Router, TypeScript and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
