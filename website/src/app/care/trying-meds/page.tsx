import { notFound } from "next/navigation";
import CarePathDetail from "@/components/portals/CarePathDetail";
import { carePathways, medicationEducation } from "@/content/care";

const medicationVisitPrep = [
  {
    title: "Track objective outcomes",
    details:
      "Capture concrete before/after metrics like assignment completion, missed deadlines, distractibility episodes, and morning start latency.",
  },
  {
    title: "Separate side effects from context",
    details:
      "Log sleep duration, caffeine, hydration, stress, and meal timing so medication effects are interpreted accurately.",
  },
  {
    title: "Plan prescriber message in bullets",
    details:
      "Use a short format: dose/timing, what improved, what worsened, and one clear question for next adjustment.",
  },
  {
    title: "Never self-adjust dose",
    details:
      "Dose changes should be clinician-guided. Bring data and request a structured titration plan.",
  },
];

export default function TryingMedsCarePage() {
  const pathway = carePathways.find((item) => item.slug === "trying-meds");
  if (!pathway) {
    notFound();
  }

  return (
    <CarePathDetail
      pathway={pathway}
      focusAreas={[...medicationVisitPrep, ...medicationEducation]}
      relatedLinks={[
        { label: "Main Care Hub", href: "/care" },
        { label: "Diagnosed & Overwhelmed", href: "/care/diagnosed-overwhelmed" },
        { label: "Adult Portal", href: "/adults" },
      ]}
    />
  );
}
