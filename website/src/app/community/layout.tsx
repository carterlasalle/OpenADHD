import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Support — OpenADHD",
  description:
    "Connect with the ADHD community. Find support groups, forums, YouTube channels, podcasts, and people who understand.",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
