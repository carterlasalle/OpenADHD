import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Interactive ADHD tools for task breakdown, time estimates, routines, scripts, study support, and buffered planning.",
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
