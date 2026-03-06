import { notFound } from "next/navigation";
import CarePathDetail from "@/components/portals/CarePathDetail";
import { carePathways, therapyAndCoaching } from "@/content/care";

const familySupportChecklist = [
  {
    title: "Use shared external systems",
    details:
      "Move recurring tasks out of memory and into one visible system: shared calendar, task board, or weekly checklist.",
  },
  {
    title: "Plan repair before conflict happens",
    details:
      "Agree on a reset script for missed tasks or emotional escalation so recovery is faster and less personal.",
  },
  {
    title: "Target one pressure point at a time",
    details:
      "Pick one recurring friction loop each week (mornings, bills, deadlines) and improve only that loop first.",
  },
  {
    title: "Measure support by outcomes",
    details:
      "If reminders feel like conflict, adjust format and timing rather than removing support entirely.",
  },
];

export default function ParentPartnerCarePage() {
  const pathway = carePathways.find((item) => item.slug === "parent-partner");
  if (!pathway) {
    notFound();
  }

  return (
    <CarePathDetail
      pathway={pathway}
      focusAreas={[...familySupportChecklist, ...therapyAndCoaching]}
      relatedLinks={[
        { label: "Main Care Hub", href: "/care" },
        { label: "Parents & Partners Portal", href: "/parents-partners" },
        { label: "Teacher Portal", href: "/teachers" },
      ]}
    />
  );
}
