// utils/routing.ts
import { appliancesData, type ApplianceItem } from "@/data/constants";

export interface RouteConfig {
  slug: string;
  title: string;
  id: string;
  parentCategory?: string;
}

/**
 * Get all routes that should be generated for appliances
 */
export const getAllApplianceRoutes = (): RouteConfig[] => {
  const routes: RouteConfig[] = [];

  const extractRoutes = (items: ApplianceItem[], parentCategory?: string) => {
    items.forEach((item) => {
      if (item.isLeaf && item.slug) {
        routes.push({
          slug: item.slug,
          title: item.title,
          id: item.id,
          parentCategory,
        });
      }

      if (item.items) {
        extractRoutes(item.items, item.title);
      }
    });
  };

  appliancesData.forEach((category) => {
    extractRoutes(category.items, category.title);
  });

  return routes;
};

/**
 * Get route config by slug
 */
export const getRouteBySlug = (slug: string): RouteConfig | null => {
  const routes = getAllApplianceRoutes();
  return routes.find((route) => route.slug === slug) || null;
};

/**
 * Generate breadcrumb data for a given slug
 */
export const getBreadcrumb = (
  slug: string
): Array<{ title: string; href?: string }> => {
  const route = getRouteBySlug(slug);

  if (!route) {
    return [{ title: "Appliances", href: "/appliances" }];
  }

  const breadcrumb = [
    { title: "Home", href: "/" },
    { title: "Appliances", href: "/appliances" },
  ];

  if (route.parentCategory) {
    breadcrumb.push({ title: route.parentCategory });
  }

  breadcrumb.push({ title: route.title });

  return breadcrumb;
};

/**
 * Get SEO-friendly title for a route
 */
export const getSEOTitle = (slug: string): string => {
  const route = getRouteBySlug(slug);

  if (!route) {
    return "Appliances - Find Your Perfect Home Appliance";
  }

  return `${route.title} - Best ${route.title} Online | Compare Prices & Features`;
};

/**
 * Get meta description for a route
 */
export const getMetaDescription = (slug: string): string => {
  const route = getRouteBySlug(slug);

  if (!route) {
    return "Discover the best home appliances with great prices, warranty, and reviews.";
  }

  return `Find the perfect ${route.title.toLowerCase()} for your home. Compare features, prices, and reviews. Get the best deals on ${route.title.toLowerCase()} with warranty and free installation.`;
};

// Utility to check if a route exists
export const routeExists = (slug: string): boolean => {
  return getRouteBySlug(slug) !== null;
};
