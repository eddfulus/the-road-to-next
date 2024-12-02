import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link'; 
import { Button } from "@/components/ui/button";
import { homePath, ticketsPath } from "./path";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Homestay Rumah Kebun",
  description: "Where your family can gather.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="
        support-backdrop-blur:bg-background/60 
        flex left-0 right-0 top-0 z-20 
        border-b background/95 backdrop-blur 
        w-full flex py-2.5 px-5 justify-between">
          <div>
            <Button asChild variant="ghost">
            <Link href={homePath()}>Home</Link>
            </Button>
            
          </div>
          <div>
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Tickets</Link>
            </Button>
          </div>
        </nav>
        <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col">{children} </main>
      </body>
    </html>
  );
}
