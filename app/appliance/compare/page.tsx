"use client"

import { useSearchParams } from "next/navigation"
import { appliances, Product } from "@/data/appliances"

export default function ComparePage() {
  const searchParams = useSearchParams()
  const ids = searchParams.get("ids")?.split(",").map(Number) || []
  const allProducts: Product[] = appliances.flatMap((cat) => cat.products)
  const comparedProducts = allProducts.filter((p) => ids.includes(p.id))

  const featureKeys = Array.from(
    new Set([
      "rating",
      "warranty",
      ...comparedProducts.flatMap((p) => Object.keys(p.specs)),
    ])
  )

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
                  <th key={p.id} className="border px-4 py-2">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureKeys.map((key) => (
                <tr key={key}>
                  <td className="border px-4 py-2 font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="border px-4 py-2">
                      {key === "rating"
                        ? `⭐ ${p.rating}`
                        : key === "warranty"
                        ? p.warranty
                        : p.specs[key] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No products selected for comparison.</p>
      )}
    </div>
  )
}
