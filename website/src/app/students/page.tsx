import { notFound } from "next/navigation";
import PortalPage from "@/components/portals/PortalPage";
import { portalContent } from "@/content/care";

export default function StudentsPage() {
  const portal = portalContent.students;
  if (!portal) {
    notFound();
  }

  return <PortalPage portal={portal} />;
}
