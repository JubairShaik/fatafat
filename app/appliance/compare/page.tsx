"use client"

import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  { name: "Air conditioner", slug: "air-conditioner", rating: 4.5, attributes: ["1.5 Ton", "4 Yr Warranty"] },
  { name: "Refrigrator", slug: "refrigrator", rating: 4.5, attributes: ["1.5 Ton", "3 Yr Warranty"] },
  { name: "Washing Machine", slug: "washing-machine", rating: 4.2, attributes: ["1 Ton", "2 Yr Warranty"] },
  { name: "Microwave Oven", slug: "microwave-oven", rating: 4.0, attributes: ["20 L", "1 Yr Warranty"] },
  { name: "Dishwasher", slug: "dishwasher", rating: 4.3, attributes: ["12 Place Settings", "2 Yr Warranty"] },
  { name: "Water Heater", slug: "water-heater", rating: 4.1, attributes: ["15 L", "3 Yr Warranty"] },
]

export default function ComparePage() {
  const searchParams = useSearchParams()
  const items = searchParams.get("items")?.split(",") || []
  const comparedProducts = products.filter((p) => items.includes(p.slug))

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-6">Product Comparison</h1>

      {comparedProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Feature</th>
                {comparedProducts.map((p) => (
                  <th key={p.slug} className="border px-4 py-2">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-medium">Rating</td>
                {comparedProducts.map((p) => (
                  <td key={p.slug} className="border px-4 py-2">
                    ⭐ {p.rating}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2 font-medium">Attributes</td>
                {comparedProducts.map((p) => (
                  <td key={p.slug} className="border px-4 py-2">
                    {p.attributes.join(", ")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No products selected for comparison.</p>
      )}
    </div>
  )
}
