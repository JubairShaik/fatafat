"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Link from "next/link"
import { TiHome } from "react-icons/ti"

const products = [
  {
    name: "Air conditioner",
    slug: "air-conditioner",
    rating: 4.5,
    attributes: ["1.5 Ton", "4 Yr Warranty"],
  },
  {
    name: "Refrigrator",
    slug: "refrigrator",
    rating: 4.5,
    attributes: ["1.5 Ton", "3 Yr Warranty"],
  },
  {
    name: "Washing Machine",
    slug: "washing-machine",
    rating: 4.2,
    attributes: ["1 Ton", "2 Yr Warranty"],
  },
  {
    name: "Microwave Oven",
    slug: "microwave-oven",
    rating: 4.0,
    attributes: ["20 L", "1 Yr Warranty"],
  },
  {
    name: "Dishwasher",
    slug: "dishwasher",
    rating: 4.3,
    attributes: ["12 Place Settings", "2 Yr Warranty"],
  },
  {
    name: "Water Heater",
    slug: "water-heater",
    rating: 4.1,
    attributes: ["15 L", "3 Yr Warranty"],
  },
]

export default function Page() {
  return (
    <div className="p-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <TiHome size={16} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Appliances</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.slug}
            className="p-4 rounded-xl shadow-sm border hover:shadow-md transition flex flex-col"
          >
            <Link
              href={`/Appliances/${product.slug}`}
              className="flex flex-col flex-grow"
            >
              <div className="h-36 bg-muted rounded-lg mb-4" />
              <h2 className="text-sm font-medium mb-2">{product.name}</h2>

              <div className="flex items-center mb-2">
                <div className="flex items-center gap-1 bg-chart-4 text-card px-2 py-0.5 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3 fill-card" />
                  {product.rating}
                </div>
              </div>

              <div className="flex gap-3 text-xs text-muted-foreground mb-3">
                {product.attributes.map((attr, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    {attr}
                  </span>
                ))}
              </div>
            </Link>

            <div className="flex items-center gap-2 mt-auto">
              <Checkbox id={`compare-${product.slug}`} />
              <label
                htmlFor={`compare-${product.slug}`}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Add to Compare
              </label>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
