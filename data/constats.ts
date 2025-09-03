import {
  AirVent,
  Car,
  Lightbulb,
  Refrigerator,
  Smartphone,
  Zap,
} from "lucide-react";

export const appliancesData = [
  {
    id: "utilities",
    title: "Utilities",
    icon: Zap,
    items: [
      {
        id: "ac",
        title: "AC",
        icon: AirVent,
        isLeaf: true,
      },
      {
        id: "refrigerator",
        title: "Refrigerator",
        icon: Refrigerator,
        items: [
          {
            id: "size-volume",
            title: "Size/Volume",
            isLeaf: true,
          },
          {
            id: "orientation",
            title: "Orientation",
            items: [
              { id: "frame", title: "Frame", isLeaf: true },
              { id: "single-door", title: "Single Door", isLeaf: true },
              { id: "4-doors", title: "4 Doors", isLeaf: true },
            ],
          },
          {
            id: "refrigerator-others",
            title: "Others",
            isLeaf: true,
          },
        ],
      },
      { id: "other-1", title: "Other 1", isLeaf: true },
      { id: "other-4", title: "Other 4", isLeaf: true },
      { id: "other-5", title: "Other 5", isLeaf: true },
      { id: "other-6", title: "Other 6", isLeaf: true },
    ],
  },
  {
    id: "brands",
    title: "Brands",
    icon: Smartphone,
    items: [
      { id: "samsung", title: "Samsung", isLeaf: true },
      { id: "lg", title: "LG", isLeaf: true },
      { id: "whirlpool", title: "Whirlpool", isLeaf: true },
      { id: "godrej", title: "Godrej", isLeaf: true },
      { id: "bosch", title: "Bosch", isLeaf: true },
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: Lightbulb,
    items: [
      { id: "tv", title: "Television", isLeaf: true },
      { id: "washing-machine", title: "Washing Machine", isLeaf: true },
      { id: "microwave", title: "Microwave", isLeaf: true },
      { id: "dishwasher", title: "Dishwasher", isLeaf: true },
    ],
  },
  {
    id: "others",
    title: "Others",
    icon: Car,
    items: [
      { id: "spare-parts", title: "Spare Parts", isLeaf: true },
      { id: "accessories", title: "Accessories", isLeaf: true },
      { id: "installation", title: "Installation Services", isLeaf: true },
      { id: "warranty", title: "Extended Warranty", isLeaf: true },
    ],
  },
];
