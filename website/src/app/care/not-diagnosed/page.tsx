import { notFound } from "next/navigation";
import CarePathDetail from "@/components/portals/CarePathDetail";
import { carePathways, diagnosisProcess, selfScreeningEducation } from "@/content/care";

export default function NotDiagnosedCarePage() {
  const pathway = carePathways.find((item) => item.slug === "not-diagnosed");
  if (!pathway) {
    notFound();
  }

  return (
    <CarePathDetail
      pathway={pathway}
      focusAreas={[...selfScreeningEducation, ...diagnosisProcess]}
      relatedLinks={[
        { label: "Main Care Hub", href: "/care" },
        { label: "Trying Meds Path", href: "/care/trying-meds" },
        { label: "Student Portal", href: "/students" },
      ]}
    />
  );
}
