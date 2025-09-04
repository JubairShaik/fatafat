"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Import your appliance data
const appliancesData = [
  {
    id: "utilities",
    title: "Utilities",
    items: [
      { id: "ac", title: "Air Conditioner", slug: "ac" },
      { id: "refrigerator", title: "Refrigerator", slug: "refrigerator" },
      {
        id: "washing-machine",
        title: "Washing Machine",
        slug: "washing-machine",
      },
      { id: "water-heater", title: "Water Heater", slug: "water-heater" },
      { id: "fan", title: "Fans", slug: "fan" },
    ],
  },
  {
    id: "kitchen-appliances",
    title: "Kitchen Appliances",
    items: [
      { id: "microwave", title: "Microwave", slug: "microwave" },
      { id: "mixer-grinder", title: "Mixer Grinder", slug: "mixer-grinder" },
      { id: "toaster", title: "Toaster", slug: "toaster" },
      { id: "coffee-maker", title: "Coffee Maker", slug: "coffee-maker" },
      { id: "rice-cooker", title: "Rice Cooker", slug: "rice-cooker" },
      {
        id: "induction-cooktop",
        title: "Induction Cooktop",
        slug: "induction-cooktop",
      },
      { id: "dishwasher", title: "Dishwasher", slug: "dishwasher" },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    items: [
      { id: "television", title: "Television", slug: "television" },
      { id: "air-purifier", title: "Air Purifier", slug: "air-purifier" },
      { id: "speaker", title: "Speakers", slug: "speaker" },
    ],
  },
];

// Helper function to find appliance info by slug
const findApplianceBySlug = (slug: string) => {
  for (const category of appliancesData) {
    const appliance = category.items.find((item) => item.slug === slug);
    if (appliance) {
      return appliance;
    }
  }
  return null;
};

// Generate product name from product ID
const generateProductName = (applianceSlug: string, productId: string) => {
  const appliance = findApplianceBySlug(applianceSlug);
  if (!appliance) return productId;

  const brands = {
    ac: ["Voltas", "LG", "Samsung", "Daikin"],
    refrigerator: ["Samsung", "LG", "Whirlpool", "Godrej"],
    "washing-machine": ["Samsung", "LG", "Whirlpool", "IFB"],
    microwave: ["Samsung", "LG", "IFB", "Bajaj"],
    // Add more as needed
  };

  const capacities = {
    ac: ["1 Ton", "1.2 Ton", "1.5 Ton", "2 Ton"],
    refrigerator: ["190L", "253L", "340L", "495L"],
    "washing-machine": ["6 kg", "7 kg", "8 kg", "9 kg"],
    microwave: ["20L", "23L", "28L", "32L"],
  };

  // Extract index from product ID (e.g., "ac-1" -> 0)
  const productIndex = parseInt(productId.split("-").pop() || "1") - 1;

  const applianceBrands =
    brands[applianceSlug as keyof typeof brands] || brands.ac;
  const applianceCapacities =
    capacities[applianceSlug as keyof typeof capacities] || capacities.ac;

  const brand = applianceBrands[productIndex % applianceBrands.length];
  const capacity =
    applianceCapacities[productIndex % applianceCapacities.length];

  return `${brand} ${appliance.title} ${capacity}`;
};

// Dynamic breadcrumb generator
const generateBreadcrumbs = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: <Home className="w-4 h-4" />, href: "/" }];

  if (segments[0] === "appliances") {
    // Always add Appliances as second breadcrumb
    breadcrumbs.push({
      label: "Appliances",
      href: segments.length === 1 ? null : "/appliances",
    });

    // If we have an appliance slug (e.g., /appliances/ac)
    if (segments[1]) {
      const applianceSlug = segments[1];
      const appliance = findApplianceBySlug(applianceSlug);

      if (appliance) {
        breadcrumbs.push({
          label: appliance.title,
          href: segments.length === 2 ? null : `/appliances/${applianceSlug}`,
        });

        // If we have a product ID (e.g., /appliances/ac/ac-1)
        if (segments[2]) {
          const productId = segments[2];
          const productName = generateProductName(applianceSlug, productId);

          breadcrumbs.push({
            label: productName,
            href: null, // Last item, no link
          });
        }
      }
    }
  }

  return breadcrumbs;
};

// Breadcrumb Components
const Breadcrumb = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 bg-white px-2 md:px-[15rem] py-3 cursor-pointer   w-full  mx-auto  border-b    ">
    {children}
  </nav>
);

const BreadcrumbItem = ({
  children,
  href,
  isLast = false,
}: {
  children: React.ReactNode;
  href?: string | null;
  isLast?: boolean;
}) => (
  <>
    {href ? (
      <Link
        href={href}
        className="hover:text-blue-600 transition-colors flex items-center"
      >
        {children}
      </Link>
    ) : (
      <span
        className={`flex items-center ${
          isLast ? "text-blue-600 font-medium" : ""
        }`}
      >
        {children}
      </span>
    )}
  </>
);

const BreadcrumbSeparator = () => <span className="text-gray-400">/</span>;

export default function AppliancesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Generate dynamic breadcrumbs based on current path
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <div className="min-h-screen border-b  border-slate-300  ">
      <div className=" mx-auto ">
        {/* Dynamic Breadcrumb */}
        <Breadcrumb>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem
                href={crumb.href}
                isLast={index === breadcrumbs.length - 1}
              >
                {crumb.label}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </Breadcrumb>
        {children}
      </div>
    </div>
  );
}
