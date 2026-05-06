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
  metadataBase: new URL("https://agamjain.dev"),
  title: {
    default: "Agam Jain | Software Engineer",
    template: "%s | Agam Jain",
  },
  description:
    "Software Engineer specializing in backend systems, frontend applications, platform engineering, and scalable architecture.",
  keywords: [
    "Agam Jain",
    "Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Platform Engineer",
    "Node.js",
    "React",
    "Distributed Systems",
  ],
  openGraph: {
    title: "Agam Jain | Software Engineer",
    description:
      "Building scalable backend systems, polished frontend experiences, and developer platforms.",
    url: "https://agamjain.dev",
    siteName: "Agam Jain Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Jain | Software Engineer",
    description:
      "Building scalable backend systems, polished frontend experiences, and developer platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
