import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Diagnosed — OpenADHD",
  description:
    "Step-by-step guidance through the ADHD diagnosis process. Learn what to expect, how to prepare, and where to find help.",
};

export default function DiagnosisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
