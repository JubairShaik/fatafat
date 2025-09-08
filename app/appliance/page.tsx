"use client"

import { useState, useMemo } from "react"
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
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"
import { TiHome } from "react-icons/ti"
import { appliances } from "@/data/appliances"

export default function Page() {
  const [search, setSearch] = useState("")
  const [compareList, setCompareList] = useState<number[]>([])

  // Flatten products across categories
  const allProducts = useMemo(
    () =>
      appliances.flatMap((category) =>
        category.products.map((p) => ({
          ...p,
          categorySlug: category.slug,
          categoryName: category.name,
        }))
      ),
    []
  )

  const filteredProducts = allProducts.filter((product) => {
  const query = search.toLowerCase()
  return (
    product.name.toLowerCase().includes(query) ||
    product.categoryName.toLowerCase().includes(query)
  )
  })


  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="p-8">
      {/* Breadcrumb + Search */}
      <div className="flex items-center justify-between mb-6 w-full">
        <div>
          <Breadcrumb>
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
        </div>
        <div className="w-full md:max-w-sm">
          <Input
            type="text"
            placeholder="Search appliances..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isCompared = compareList.includes(product.id)
            return (
              <Card
                key={product.id}
                className="p-4 rounded-xl shadow-sm border hover:shadow-md transition flex flex-col relative"
              >
                {isCompared && (
                  <Badge className="absolute top-2 right-2 bg-green-600 text-white">
                    Added for Comparison
                  </Badge>
                )}

                <Link
                  href={`/appliance/${product.categorySlug}/${product.name}`}
                  className="flex flex-col flex-grow"
                >
                  <div className="h-36 bg-muted rounded-lg mb-4" />
                  <h2 className="text-sm font-medium mb-1">{product.name}</h2>
                  <p className="text-xs text-muted-foreground mb-2">
                    {product.categoryName}
                  </p>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center gap-1 bg-chart-4 text-card px-2 py-0.5 rounded-full text-xs font-medium">
                      <Star className="w-3 h-3 fill-card" />
                      {product.rating}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-3">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <span key={key} className="flex items-center gap-1">
                        {key}: {val}
                      </span>
                    ))}
                    <span>Warranty: {product.warranty}</span>
                  </div>
                </Link>

                <div className="flex items-center gap-2 mt-auto">
                  <Checkbox
                    id={`compare-${product.id}`}
                    checked={isCompared}
                    onCheckedChange={() => toggleCompare(product.id)}
                  />
                  <label
                    htmlFor={`compare-${product.id}`}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Add to Compare
                  </label>
                </div>
              </Card>
            )
          })
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No appliances found.
          </p>
        )}
      </div>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-lg border rounded-xl px-6 py-3 flex items-center gap-4 z-50">
          <span className="font-medium">Comparing:</span>
          {compareList.map((id) => {
            const product = allProducts.find((p) => p.id === id)
            return (
              <Badge key={id} variant="secondary" className="px-3 py-1">
                {product?.name}
              </Badge>
            )
          })}
          <Link
            href={`/compare?ids=${compareList.join(",")}`}
            className="ml-4 text-sm text-blue-600 underline"
          >
            Compare Now
          </Link>
        </div>
      )}
    </div>
  )
}
