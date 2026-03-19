import type { Metadata } from "next";
import "./globals.css"
import { homepageSeo } from "@/seo/seo";
import { inter } from "@/public/fonts/font";

export const metadata: Metadata = homepageSeo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-bg-muted min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
