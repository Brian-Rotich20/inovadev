import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext"; 
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
  description: "Brian Rotich's Portfolio - Junior Software Engineer||Full Stack Developer",
  keywords: [
    "Brian Rotich",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Web Developer Kenya",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Development Services"
  ],
  // Favicons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',

  
  authors: [{ name: "Brian Rotich", url: "https://github.com/Brian-Rotich20" }],
  creator: "Brian Rotich",
  publisher: "Brian Rotich",
  
  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Replace with your actual domain
    siteName: "Brian Rotich Portfolio",
    title: "Brian Rotich - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer specializing in React, Next.js, Django, and modern web technologies.",
    images: [
      {
        url: "/og-image.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Brian Rotich - Full Stack Developer Portfolio"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Brian Rotich - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer specializing in React, Next.js, Django, and modern web technologies.",
    creator: "@rotichbrayoo",
    site: "@rotichbrayoo",
    images: ["/og-image.png"]
  },
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // Add these when you get them from Google/Bing
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  category: 'technology',
  
  // Canonical URL
  alternates: {
    canonical: "https://yourportfolio.com" // Replace with your actual domain
  }
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
