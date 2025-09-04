// // app/appliances/[slug]/page.tsx
import ApplianceListingPage from "@/components/ApplianceListingPage";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  getAllApplianceRoutes,
  getBreadcrumb,
  getRouteBySlug,
} from "@/utils/routing";

import { notFound } from "next/navigation";

interface AppliancePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all navigable appliances
export async function generateStaticParams() {
  const routes = getAllApplianceRoutes();

  return routes.map((route) => ({
    slug: route.slug,
  }));
}

// Generate metadata for each page

const AppliancePage = ({ params }: AppliancePageProps) => {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    notFound();
  }

  const breadcrumbItems = getBreadcrumb(params.slug);

  return (
    <div className="  max-w-[1400px] mx-auto       px-4">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} className="mb-6" />

      <ApplianceListingPage applianceType={route.id} title={route.title} />
    </div>
  );
};

export default AppliancePage;
