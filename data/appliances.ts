
export type FilterOption = {
  id: number
  name: string
  options: string[]
}

export type Product = {
  id: number
  name: string
  rating: number
  specs: Record<string, string>
  warranty: string
  categoryId: number
}

export type Category = {
  id: number
  name: string
  slug: string
  filters: FilterOption[]
  products: Product[]
}

export const appliances: Category[] = [
  {
    id: 1,
    name: "Air Conditioners",
    slug: "air-conditioners",
    filters: [
      { id: 1, name: "Brand", options: ["Voltas", "LG", "Samsung", "Daikin"] },
      { id: 2, name: "Tonnage", options: ["1 Ton", "1.5 Ton", "2 Ton"] },
      { id: 3, name: "Warranty", options: ["1 Yr", "2 Yr", "3 Yr", "4 Yr", "5 Yr"] },
    ],
    products: [
      { id: 1, name: "Voltas AC 1.5 Ton", rating: 4.5, specs: { tonnage: "1.5 Ton" }, warranty: "4 Yr", categoryId: 1 },
      { id: 2, name: "LG DualCool AC", rating: 4.3, specs: { tonnage: "1 Ton" }, warranty: "3 Yr", categoryId: 1 },
      { id: 3, name: "Samsung WindFree AC", rating: 4.6, specs: { tonnage: "2 Ton" }, warranty: "5 Yr", categoryId: 1 },
      { id: 4, name: "Daikin Split AC", rating: 4.4, specs: { tonnage: "1.5 Ton" }, warranty: "4 Yr", categoryId: 1 },
    ],
  },
  {
    id: 2,
    name: "Refrigerators",
    slug: "refrigerators",
    filters: [
      { id: 1, name: "Brand", options: ["Whirlpool", "Samsung", "LG", "Godrej"] },
      { id: 2, name: "Capacity", options: ["200L", "300L", "400L", "500L+"] },
      { id: 3, name: "Type", options: ["Single Door", "Double Door", "Side by Side"] },
    ],
    products: [
      { id: 5, name: "LG Double Door 260L", rating: 4.5, specs: { capacity: "260L", type: "Double Door" }, warranty: "3 Yr", categoryId: 2 },
      { id: 6, name: "Samsung Side by Side 550L", rating: 4.7, specs: { capacity: "550L", type: "Side by Side" }, warranty: "5 Yr", categoryId: 2 },
      { id: 7, name: "Whirlpool Single Door 200L", rating: 4.2, specs: { capacity: "200L", type: "Single Door" }, warranty: "2 Yr", categoryId: 2 },
    ],
  },
  {
    id: 3,
    name: "Washing Machines",
    slug: "washing-machines",
    filters: [
      { id: 1, name: "Brand", options: ["LG", "Bosch", "IFB", "Samsung"] },
      { id: 2, name: "Type", options: ["Front Load", "Top Load"] },
      { id: 3, name: "Capacity", options: ["6 Kg", "7 Kg", "8 Kg", "10 Kg+"] },
    ],
    products: [
      { id: 8, name: "LG Front Load 7 Kg", rating: 4.6, specs: { capacity: "7 Kg", type: "Front Load" }, warranty: "4 Yr", categoryId: 3 },
      { id: 9, name: "Bosch Top Load 6.5 Kg", rating: 4.3, specs: { capacity: "6.5 Kg", type: "Top Load" }, warranty: "3 Yr", categoryId: 3 },
      { id: 10, name: "IFB Front Load 8 Kg", rating: 4.7, specs: { capacity: "8 Kg", type: "Front Load" }, warranty: "5 Yr", categoryId: 3 },
    ],
  },
]
