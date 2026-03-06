import Link from "next/link";
import type { ReactNode } from "react";

interface ToolScaffoldProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ToolScaffold({ title, description, children }: ToolScaffoldProps) {
  return (
    <section className="section-shell pt-30">
      <div className="container-shell grid gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="section-kicker">Interactive Tool</p>
            <h1 className="section-title">{title}</h1>
            <p className="text-lead">{description}</p>
          </div>
          <Link href="/tools" className="btn-ghost">
            Back to Tools
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
