import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const BahianaRegular = localFont({
  src: "./fonts/Bahiana-Regular.ttf",
  variable: "--font-bahiana",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "The Haunt",
  description: "Every code whispered is onchain. Join the $Haunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${BahianaRegular.variable} antialiased h-screen max-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
