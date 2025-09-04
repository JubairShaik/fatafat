"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getFilterCategories, type ApplianceItem } from "@/data/constants";
import { ChevronDown, Filter, Grid, Search, Star, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface Product {
  id: string;
  name: string;
  rating: number;
  capacity?: string;
  warranty: string;
  price?: number;
  image: string;
  slug: string;
  brand?: string;
  features?: string[];
}

interface ApplianceListingProps {
  applianceType: string;
  title: string;
}

// Mock product data generator based on appliance type
const generateMockProducts = (type: string): Product[] => {
  const baseProducts = {
    ac: [
      {
        name: "Voltas 1.5 Ton Split AC",
        capacity: "1.5 Ton",
        brand: "Voltas",
        features: ["Inverter", "5 Star", "Copper Coil"],
      },
      {
        name: "LG 1 Ton Window AC",
        capacity: "1 Ton",
        brand: "LG",
        features: ["3 Star", "Dual Protection"],
      },
      {
        name: "Samsung 2 Ton Split AC",
        capacity: "2 Ton",
        brand: "Samsung",
        features: ["Inverter", "4 Star", "Wind-Free"],
      },
    ],
    refrigerator: [
      {
        name: "Samsung 253L Double Door",
        capacity: "253L",
        brand: "Samsung",
        features: ["Frost Free", "5 Star", "Convertible"],
      },
      {
        name: "LG 190L Single Door",
        capacity: "190L",
        brand: "LG",
        features: ["4 Star", "Smart Inverter"],
      },
      {
        name: "Whirlpool 340L Triple Door",
        capacity: "340L",
        brand: "Whirlpool",
        features: ["Frost Free", "Intellisense Inverter"],
      },
    ],
    "washing-machine": [
      {
        name: "Samsung 6.5kg Front Load",
        capacity: "6.5kg",
        brand: "Samsung",
        features: ["Front Load", "5 Star", "Eco Bubble"],
      },
      {
        name: "LG 7kg Top Load",
        capacity: "7kg",
        brand: "LG",
        features: ["Top Load", "4 Star", "Smart Inverter"],
      },
    ],
    microwave: [
      {
        name: "Samsung 23L Convection",
        capacity: "23L",
        brand: "Samsung",
        features: ["Convection", "Auto Cook"],
      },
      {
        name: "LG 20L Solo",
        capacity: "20L",
        brand: "LG",
        features: ["Solo", "Quick Start"],
      },
    ],
  };

  const products =
    baseProducts[type as keyof typeof baseProducts] || baseProducts.ac;

  return products.map((product, index) => ({
    id: `${type}-${index + 1}`,
    name: product.name,
    rating: 4.0 + Math.random(),
    capacity: product.capacity,
    warranty: `${Math.floor(Math.random() * 3) + 2} Yr Warranty`,
    price: Math.floor(Math.random() * 50000) + 15000,
    image: "/api/placeholder/280/200",
    slug: `${type}-${index + 1}`,
    brand: product.brand,
    features: product.features,
  }));
};

const ProductCard = ({
  product,
  applianceType,
}: {
  product: Product;
  applianceType: string;
}) => {
  const [compareChecked, setCompareChecked] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4  hover:shadow-md transition-shadow">
      <Link href={`/appliances/${applianceType}/${product.slug}`}>
        <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
      </Link>

      <div className="flex items-center mb-2">
        <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded text-sm">
          <Star className="w-3 h-3 mr-1 fill-current" />
          {product.rating.toFixed(1)}
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-2">
        {product.capacity && <span>{product.capacity}</span>}
        <span>{product.warranty}</span>
      </div>

      {product.price && (
        <div className="text-lg font-bold text-gray-900 mb-3">
          ₹{product.price.toLocaleString()}
        </div>
      )}

      {product.features && (
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center">
        <input
          type="checkbox"
          id={`compare-${product.id}`}
          checked={compareChecked}
          onChange={(e) => setCompareChecked(e.target.checked)}
          className="mr-2 text-blue-600 rounded focus:ring-blue-500"
        />
        <label
          htmlFor={`compare-${product.id}`}
          className="text-sm text-gray-600 cursor-pointer"
        >
          Add to Compare
        </label>
      </div>
    </div>
  );
};

const FilterSection = ({
  category,
  isOpen,
  onToggle,
}: {
  category: ApplianceItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <Collapsible open={isOpen} onOpenChange={onToggle}>
    <CollapsibleTrigger className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
      <span className="font-medium text-gray-900">{category.title}</span>
      <ChevronDown
        className={`w-4 h-4 text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </CollapsibleTrigger>

    <CollapsibleContent className="px-3 pb-3">
      <div className="mb-3">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        {category.items?.map((option) => (
          <label key={option.id} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-3 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{option.title}</span>
          </label>
        ))}
      </div>
    </CollapsibleContent>
  </Collapsible>
);

// Mobile Filter Sheet Component
const MobileFiltersSheet = ({
  filterCategories,
  children,
}: {
  filterCategories: ApplianceItem[];
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({});

  const toggleFilter = (filterId: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId],
    }));
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="w-[350px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your search results with these filters.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 h-full overflow-y-auto">
          <div className="space-y-1">
            {filterCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-lg"
              >
                <FilterSection
                  category={category}
                  isOpen={openFilters[category.id]}
                  onToggle={() => toggleFilter(category.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const ApplianceListingPage = ({
  applianceType,
  title,
}: ApplianceListingProps) => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const products = useMemo(
    () => generateMockProducts(applianceType),
    [applianceType]
  );
  const filterCategories = useMemo(
    () => getFilterCategories(applianceType),
    [applianceType]
  );

  const toggleFilter = (filterId: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterId]: !prev[filterId],
    }));
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className="flex   gap-8">
      {/* Desktop Filters Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>

          <div className="space-y-1">
            {filterCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-lg"
              >
                <FilterSection
                  category={category}
                  isOpen={openFilters[category.id]}
                  onToggle={() => toggleFilter(category.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center flex-wrap  gap-3 justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <span className="text-gray-600">
              1-{products.length} of {products.length * 10} results found
            </span>

            {/* Active Filter Tags */}
            {selectedFilters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map((filter) => (
                  <div
                    key={filter}
                    className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {filter}
                    <button
                      title="Remove filter"
                      onClick={() => removeFilter(filter)}
                      className="ml-2 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex  items-center gap-4">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <MobileFiltersSheet filterCategories={filterCategories}>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </MobileFiltersSheet>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600 hidden sm:inline">Sort by:</span>
              <Select defaultValue="best-match">
                <SelectTrigger className="w-32 sm:w-40">
                  <SelectValue placeholder="Best Match" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-match">Best Match</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button title="Grid View" className="p-2 border border-gray-200 rounded hover:bg-gray-50">
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              applianceType={applianceType}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplianceListingPage;
