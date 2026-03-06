import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library | OpenADHD",
  description:
    "Problem-based ADHD library with quick tools, skill kits, deep guides, printables, and audio/video alternatives.",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
