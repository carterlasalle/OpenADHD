import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Strategies — OpenADHD",
  description:
    "Practical tools and strategies for managing ADHD. From time management to study systems, find what works for you.",
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
