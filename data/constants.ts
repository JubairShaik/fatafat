import {
  AirVent,
  Car,
  ChefHat,
  Coffee,
  Fan,
  Flame,
  Lightbulb,
  Microwave,
  Refrigerator,
  Smartphone,
  Thermometer,
  Tv,
  Utensils,
  Volume2,
  WashingMachine,
  Wind,
  Zap,
} from "lucide-react";

export interface ApplianceItem {
  id: string;
  title: string;
  icon?: any;
  isLeaf?: boolean;
  slug?: string;
  items?: ApplianceItem[];
}

export interface ApplianceCategory {
  id: string;
  title: string;
  icon: any;
  items: ApplianceItem[];
}

export const appliancesData: ApplianceCategory[] = [
  {
    id: "utilities",
    title: "Utilities",
    icon: Zap,
    items: [
      {
        id: "ac",
        title: "Air Conditioner",
        icon: AirVent,
        isLeaf: true,
        slug: "ac",
      },
      {
        id: "refrigerator",
        title: "Refrigerator",
        icon: Refrigerator,
        isLeaf: true,
        slug: "refrigerator",
        items: [
          {
            id: "size-volume",
            title: "Size/Volume",
            items: [
              { id: "small", title: "Small (< 200L)", isLeaf: true },
              { id: "medium", title: "Medium (200-400L)", isLeaf: true },
              { id: "large", title: "Large (> 400L)", isLeaf: true },
            ],
          },
          {
            id: "orientation",
            title: "Door Configuration",
            items: [
              { id: "single-door", title: "Single Door", isLeaf: true },
              { id: "double-door", title: "Double Door", isLeaf: true },
              { id: "multi-door", title: "Multi Door", isLeaf: true },
              { id: "french-door", title: "French Door", isLeaf: true },
            ],
          },
          {
            id: "energy-rating",
            title: "Energy Rating",
            items: [
              { id: "5-star", title: "5 Star", isLeaf: true },
              { id: "4-star", title: "4 Star", isLeaf: true },
              { id: "3-star", title: "3 Star", isLeaf: true },
            ],
          },
          {
            id: "features",
            title: "Special Features",
            items: [
              { id: "inverter", title: "Inverter Technology", isLeaf: true },
              { id: "frost-free", title: "Frost Free", isLeaf: true },
              { id: "convertible", title: "Convertible", isLeaf: true },
            ],
          },
        ],
      },
      {
        id: "washing-machine",
        title: "Washing Machine",
        icon: WashingMachine,
        isLeaf: true,
        slug: "washing-machine",
        items: [
          {
            id: "type",
            title: "Type",
            items: [
              { id: "front-loading", title: "Front Loading", isLeaf: true },
              { id: "top-loading", title: "Top Loading", isLeaf: true },
              { id: "semi-automatic", title: "Semi Automatic", isLeaf: true },
            ],
          },
          {
            id: "capacity-wm",
            title: "Capacity",
            items: [
              { id: "6kg", title: "6 KG", isLeaf: true },
              { id: "7kg", title: "7 KG", isLeaf: true },
              { id: "8kg", title: "8 KG & Above", isLeaf: true },
            ],
          },
        ],
      },
      {
        id: "water-heater",
        title: "Water Heater",
        icon: Thermometer,
        isLeaf: true,
        slug: "water-heater",
        items: [
          {
            id: "heater-type",
            title: "Type",
            items: [
              { id: "electric", title: "Electric", isLeaf: true },
              { id: "gas", title: "Gas", isLeaf: true },
              { id: "solar", title: "Solar", isLeaf: true },
            ],
          },
        ],
      },
      {
        id: "fan",
        title: "Fans",
        icon: Fan,
        isLeaf: true,
        slug: "fan",
        items: [
          {
            id: "fan-type",
            title: "Type",
            items: [
              { id: "ceiling", title: "Ceiling Fan", isLeaf: true },
              { id: "table", title: "Table Fan", isLeaf: true },
              { id: "pedestal", title: "Pedestal Fan", isLeaf: true },
              { id: "exhaust", title: "Exhaust Fan", isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kitchen-appliances",
    title: "Kitchen Appliances",
    icon: ChefHat,
    items: [
      {
        id: "microwave",
        title: "Microwave",
        icon: Microwave,
        isLeaf: true,
        slug: "microwave",
        items: [
          {
            id: "microwave-type",
            title: "Type",
            items: [
              { id: "solo", title: "Solo", isLeaf: true },
              { id: "grill", title: "Grill", isLeaf: true },
              { id: "convection", title: "Convection", isLeaf: true },
            ],
          },
        ],
      },
      {
        id: "mixer-grinder",
        title: "Mixer Grinder",
        icon: Utensils,
        isLeaf: true,
        slug: "mixer-grinder",
      },
      {
        id: "toaster",
        title: "Toaster",
        icon: Utensils,
        isLeaf: true,
        slug: "toaster",
      },
      {
        id: "coffee-maker",
        title: "Coffee Maker",
        icon: Coffee,
        isLeaf: true,
        slug: "coffee-maker",
      },
      {
        id: "rice-cooker",
        title: "Rice Cooker",
        icon: Utensils,
        isLeaf: true,
        slug: "rice-cooker",
      },
      {
        id: "induction-cooktop",
        title: "Induction Cooktop",
        icon: Flame,
        isLeaf: true,
        slug: "induction-cooktop",
      },
      {
        id: "dishwasher",
        title: "Dishwasher",
        icon: Utensils,
        isLeaf: true,
        slug: "dishwasher",
      },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: Lightbulb,
    items: [
      {
        id: "television",
        title: "Television",
        icon: Tv,
        isLeaf: true,
        slug: "television",
        items: [
          {
            id: "screen-size",
            title: "Screen Size",
            items: [
              { id: "32-inch", title: "32 Inch", isLeaf: true },
              { id: "43-inch", title: "43 Inch", isLeaf: true },
              { id: "55-inch", title: "55 Inch", isLeaf: true },
              { id: "65-inch", title: "65 Inch & Above", isLeaf: true },
            ],
          },
          {
            id: "tv-type",
            title: "Type",
            items: [
              { id: "smart-tv", title: "Smart TV", isLeaf: true },
              { id: "led", title: "LED", isLeaf: true },
              { id: "oled", title: "OLED", isLeaf: true },
              { id: "qled", title: "QLED", isLeaf: true },
            ],
          },
        ],
      },
      {
        id: "air-purifier",
        title: "Air Purifier",
        icon: Wind,
        isLeaf: true,
        slug: "air-purifier",
      },
      {
        id: "speaker",
        title: "Speakers",
        icon: Volume2,
        isLeaf: true,
        slug: "speaker",
        items: [
          {
            id: "speaker-type",
            title: "Type",
            items: [
              { id: "bluetooth", title: "Bluetooth", isLeaf: true },
              { id: "home-theater", title: "Home Theater", isLeaf: true },
              { id: "soundbar", title: "Soundbar", isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "brands",
    title: "Popular Brands",
    icon: Smartphone,
    items: [
      { id: "samsung", title: "Samsung", isLeaf: true, slug: "brand/samsung" },
      { id: "lg", title: "LG", isLeaf: true, slug: "brand/lg" },
      {
        id: "whirlpool",
        title: "Whirlpool",
        isLeaf: true,
        slug: "brand/whirlpool",
      },
      { id: "godrej", title: "Godrej", isLeaf: true, slug: "brand/godrej" },
      { id: "bosch", title: "Bosch", isLeaf: true, slug: "brand/bosch" },
      { id: "haier", title: "Haier", isLeaf: true, slug: "brand/haier" },
      { id: "voltas", title: "Voltas", isLeaf: true, slug: "brand/voltas" },
      { id: "bajaj", title: "Bajaj", isLeaf: true, slug: "brand/bajaj" },
      {
        id: "panasonic",
        title: "Panasonic",
        isLeaf: true,
        slug: "brand/panasonic",
      },
      { id: "sony", title: "Sony", isLeaf: true, slug: "brand/sony" },
    ],
  },
  {
    id: "services",
    title: "Services & Others",
    icon: Car,
    items: [
      {
        id: "spare-parts",
        title: "Spare Parts",
        isLeaf: true,
        slug: "spare-parts",
      },
      {
        id: "accessories",
        title: "Accessories",
        isLeaf: true,
        slug: "accessories",
      },
      {
        id: "installation",
        title: "Installation Services",
        isLeaf: true,
        slug: "installation",
      },
      {
        id: "warranty",
        title: "Extended Warranty",
        isLeaf: true,
        slug: "warranty",
      },
      { id: "repair", title: "Repair Services", isLeaf: true, slug: "repair" },
    ],
  },
];

// Helper function to get all navigable items (items with slugs)
export const getNavigableItems = (): ApplianceItem[] => {
  const navigableItems: ApplianceItem[] = [];

  const extractNavigableItems = (items: ApplianceItem[]) => {
    items.forEach((item) => {
      if (item.isLeaf && item.slug) {
        navigableItems.push(item);
      }
      if (item.items) {
        extractNavigableItems(item.items);
      }
    });
  };

  appliancesData.forEach((category) => {
    extractNavigableItems(category.items);
  });

  return navigableItems;
};

// Helper function to get filter categories for a specific appliance
export const getFilterCategories = (applianceId: string): ApplianceItem[] => {
  const findAppliance = (items: ApplianceItem[]): ApplianceItem | null => {
    for (const item of items) {
      if (item.id === applianceId) {
        return item;
      }
      if (item.items) {
        const found = findAppliance(item.items);
        if (found) return found;
      }
    }
    return null;
  };

  for (const category of appliancesData) {
    const appliance = findAppliance(category.items);
    if (appliance && appliance.items) {
      return appliance.items.filter((item) => !item.isLeaf);
    }
  }

  return [];
};
