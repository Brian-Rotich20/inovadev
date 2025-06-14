import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext"; // ✅ Added ThemeProvider import
import { Great_Vibes } from 'next/font/google';
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
  title: "My Portfolio",
  description: "Modern and Minimalist Portfolio",
};
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}
      >
        <ThemeProvider> {/* ✅ Wrapped with ThemeProvider */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
