import type { ReactNode } from "react";

interface ResultCardProps {
  title: string;
  children: ReactNode;
}

export default function ResultCard({ title, children }: ResultCardProps) {
  return (
    <article className="card-surface-elev">
      <h2 className="text-xl">{title}</h2>
      <div className="mt-3 text-sm text-[var(--text-muted)]">{children}</div>
    </article>
  );
}
