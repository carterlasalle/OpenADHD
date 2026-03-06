import { notFound } from "next/navigation";
import PortalPage from "@/components/portals/PortalPage";
import { portalContent } from "@/content/care";

export default function ManagersPage() {
  const portal = portalContent.managers;
  if (!portal) {
    notFound();
  }

  return <PortalPage portal={portal} />;
}
