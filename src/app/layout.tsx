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

export const metadata: Metadata = {
  title: "Henry Hungwa | Full-Stack Developer",
  description:
    "Full-stack developer crafting web apps, mobile experiences, and intelligent automations. Expertise in Python, TypeScript, Rust, and PHP.",
  keywords: [
    "Henry Hungwa",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Telegram Bots",
    "Nigeria",
  ],
  authors: [{ name: "Henry Hungwa" }],
  creator: "Henry Hungwa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://henter.dev",
    title: "Henry Hungwa | Full-Stack Developer",
    description:
      "Full-stack developer crafting web apps, mobile experiences, and intelligent automations.",
    siteName: "Henry Hungwa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Hungwa | Full-Stack Developer",
    description:
      "Full-stack developer crafting web apps, mobile experiences, and intelligent automations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
