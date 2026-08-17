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
  title:
    "RS Tourist & Transport | Travel & Transport Services in Udupi, Karnataka",

  description:
    "Personalized tour packages, tourist cars, buses, and goods transport across Karnataka. Book your journey with RS Tourist & Transport, Koteshwar, Udupi.",

  keywords: [
    "RS Tourist",
    "RS Tourist & Transport",
    "tourist transport Udupi",
    "tour packages Udupi",
    "tourist cars Udupi",
    "tourist buses Udupi",
    "goods transport Udupi",
    "Karnataka tour packages",
    "Koteshwar travel",
    "Udupi tourist transport",
  ],

  openGraph: {
    title: "RS Tourist & Transport",
    description:
      "Comfortable travel, tourist vehicles and transport services across Karnataka.",
    url: "https://github-1-omega.vercel.app",
    siteName: "RS Tourist & Transport",
    images: [
      {
        url: "/images/explore-india.png",
        width: 1200,
        height: 630,
        alt: "RS Tourist & Transport - Explore India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RS Tourist & Transport",
    description:
      "Comfortable travel, tourist vehicles and transport services across Karnataka.",
    images: ["/images/explore-india.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
