import { notFound } from "next/navigation";
import PortalPage from "@/components/portals/PortalPage";
import { portalContent } from "@/content/care";

export default function ParentsPartnersPage() {
  const portal = portalContent["parents-partners"];
  if (!portal) {
    notFound();
  }

  return <PortalPage portal={portal} />;
}
