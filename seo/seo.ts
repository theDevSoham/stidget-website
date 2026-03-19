import { Metadata } from "next";

export const homepageSeo: Metadata = {
  title: "STIDGET — Patch Your Vibe",
  description:
    "Discover STIDGET — customizable wearable tech that lets you express your vibe. Smart patches with bio-sensors, long battery life, and stunning design.",

  keywords: [
    "STIDGET",
    "smart wearable",
    "custom wearable tech",
    "smart patches",
    "fitness wearable",
    "bio sensors watch",
    "stylish smartwatch",
    "wearable technology",
  ],

  authors: [{ name: "STIDGET" }],
  creator: "STIDGET",
  publisher: "STIDGET",

  metadataBase: new URL("https://stidget.com"), // change later

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "STIDGET — Patch Your Vibe",
    description:
      "Express yourself with STIDGET — customizable wearable tech with advanced bio-sensors and sleek design.",
    url: "https://stidget.com",
    siteName: "STIDGET",
    images: [
      {
        url: "/images/icon.webp", // create this later
        width: 1200,
        height: 630,
        alt: "STIDGET Smart Wearable",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "STIDGET — Patch Your Vibe",
    description:
      "Custom wearable tech that adapts to your vibe. Bio-sensors, long battery, premium design.",
    images: ["/images/icon.webp"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};