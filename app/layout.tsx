import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const siteTitle =
  "Shree Ram Tiffin Services - Homemade Food Delivery in Gurugram";
const siteDescription =
  "Authentic, healthy, and hygienic homemade tiffin services in Gurugram. Serving Sectors 31-50 with fresh vegetarian meals for students and professionals.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Tiffin service Gurugram",
    "homemade food delivery",
    "veg tiffin",
    "healthy meals Gurugram",
    "Shree Ram Tiffin",
    "Sector 39 tiffin",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_IN",
    siteName: "Shree Ram Tiffin Services",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} overflow-x-hidden bg-background font-body-md text-on-surface`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
