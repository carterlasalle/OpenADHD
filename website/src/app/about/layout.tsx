import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — OpenADHD",
  description:
    "Our mission to democratize ADHD resources. Learn about OpenADHD, our values, and how you can contribute.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
