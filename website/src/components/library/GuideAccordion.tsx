interface GuideAccordionProps {
  title: string;
  items: string[];
  openByDefault?: boolean;
}

export default function GuideAccordion({
  title,
  items,
  openByDefault = false,
}: GuideAccordionProps) {
  return (
    <details className="surface-card group overflow-hidden" open={openByDefault}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 text-left text-base font-semibold text-[var(--text-strong)] marker:hidden">
        {title}
        <span className="text-sm text-[var(--text-soft)] transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="border-t border-[var(--line)] px-6 py-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="list-inside list-disc text-sm leading-relaxed text-[var(--text-soft)]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
