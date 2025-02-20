import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import StoreProvider from "./StoreProvider";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
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
  title: "The Next CRM",
  description: "Generated by create next app",
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
        <StoreProvider>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  );
}
