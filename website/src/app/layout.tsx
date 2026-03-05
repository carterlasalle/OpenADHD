import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenADHD — Democratizing ADHD Resources & Support",
  description:
    "Free, open-source ADHD resources, tools, and community support. Get guidance on diagnosis, management strategies, and connect with others who understand.",
  keywords: [
    "ADHD",
    "ADHD resources",
    "ADHD support",
    "open source",
    "ADHD diagnosis",
    "ADHD management",
    "neurodivergent",
    "mental health",
  ],
  openGraph: {
    title: "OpenADHD — Democratizing ADHD Resources & Support",
    description:
      "Free, open-source ADHD resources, tools, and community support. Get guidance on diagnosis, management strategies, and connect with others who understand.",
    type: "website",
    locale: "en_US",
    siteName: "OpenADHD",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenADHD — Democratizing ADHD Resources & Support",
    description:
      "Free, open-source ADHD resources, tools, and community support.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent-coral focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
