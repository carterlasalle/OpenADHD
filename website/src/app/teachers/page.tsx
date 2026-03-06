import { notFound } from "next/navigation";
import PortalPage from "@/components/portals/PortalPage";
import { portalContent } from "@/content/care";

export default function TeachersPage() {
  const portal = portalContent.teachers;
  if (!portal) {
    notFound();
  }

  return <PortalPage portal={portal} />;
}
