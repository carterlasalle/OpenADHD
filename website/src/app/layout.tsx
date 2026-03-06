import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fraunces } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SiteControls from "@/components/SiteControls";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "OpenADHD | Free, Practical ADHD Help",
    template: "%s | OpenADHD",
  },
  description:
    "OpenADHD is a free-first ADHD support hub with guided pathways, practical tools, care navigation, and downloadable templates.",
  keywords: [
    "ADHD",
    "ADHD tools",
    "executive dysfunction",
    "time blindness",
    "ADHD student support",
    "ADHD nonprofit",
  ],
  metadataBase: new URL("https://openadhd.org"),
  openGraph: {
    title: "OpenADHD | Free, Practical ADHD Help",
    description:
      "Tell us what you need help with right now. Get one page, one tool, one weekly plan, and one deeper guide.",
    type: "website",
    locale: "en_US",
    siteName: "OpenADHD",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenADHD | Free, Practical ADHD Help",
    description: "Free-first ADHD support with tools, scripts, and care guidance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${atkinson.variable} ${fraunces.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <SiteControls />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
