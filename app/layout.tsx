import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://venkey.dev"),
  title: {
    default: "Kuppili Leela Venkatesh | Computer Science Engineering Portfolio",
    template: "%s | Venkey",
  },
  description:
    "Premium portfolio of Kuppili Leela Venkatesh, a Computer Science Engineering student focused on web development, UI/UX, DBMS, software engineering, and full stack development.",
  keywords: [
    "Kuppili Leela Venkatesh",
    "Venkey",
    "Computer Science Engineering",
    "Full Stack Developer",
    "UI UX",
    "Web Development",
    "Pragati Engineering College",
  ],
  authors: [{ name: "Kuppili Leela Venkatesh" }],
  creator: "Kuppili Leela Venkatesh",
  openGraph: {
    title: "Kuppili Leela Venkatesh | Computer Science Engineering Portfolio",
    description:
      "A futuristic developer portfolio for Venkey, CSE student at Pragati Engineering College.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05060d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} noise font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
