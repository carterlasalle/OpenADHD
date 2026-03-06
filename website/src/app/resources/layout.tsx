import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHD Tips & Resources — OpenADHD",
  description:
    "Browse 130+ community-curated ADHD tips across 13 categories. Practical, real-world advice from people who get it.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
