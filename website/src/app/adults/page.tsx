import { notFound } from "next/navigation";
import PortalPage from "@/components/portals/PortalPage";
import { portalContent } from "@/content/care";

export default function AdultsPage() {
  const portal = portalContent.adults;
  if (!portal) {
    notFound();
  }

  return <PortalPage portal={portal} />;
}
