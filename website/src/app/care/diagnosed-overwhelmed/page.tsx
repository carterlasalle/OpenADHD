import { notFound } from "next/navigation";
import CarePathDetail from "@/components/portals/CarePathDetail";
import { carePathways, therapyAndCoaching } from "@/content/care";

const overwhelmStabilizers = [
  {
    title: "Anchor one daily win",
    details:
      "Choose one daily non-negotiable that is small enough to survive low-energy days (for example: open planner for 2 minutes).",
  },
  {
    title: "Reduce system load",
    details:
      "Use one task list and one calendar only. Duplicated systems create hidden failures.",
  },
  {
    title: "Define bad-day fallback",
    details:
      "Pre-decide what counts as success on bad days so you do not negotiate from exhaustion.",
  },
  {
    title: "Protect recovery windows",
    details:
      "Schedule decompression intentionally; untreated burnout will erase short-term productivity gains.",
  },
];

export default function DiagnosedOverwhelmedPage() {
  const pathway = carePathways.find((item) => item.slug === "diagnosed-overwhelmed");
  if (!pathway) {
    notFound();
  }

  return (
    <CarePathDetail
      pathway={pathway}
      focusAreas={[...overwhelmStabilizers, ...therapyAndCoaching]}
      relatedLinks={[
        { label: "Main Care Hub", href: "/care" },
        { label: "Adult Portal", href: "/adults" },
        { label: "Parents & Partners", href: "/parents-partners" },
      ]}
    />
  );
}
