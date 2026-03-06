import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here | OpenADHD",
  description:
    "60-second ADHD support chooser: pick your challenge and context to get a practical action path.",
};

export default function StartHereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
