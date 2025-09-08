"use client"

import { use, useMemo } from "react"
import { appliances } from "@/data/appliances"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"

type CategoryPageProps = {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params) // ✅ unwrap Promise with React.use()

  const categoryData = useMemo(
    () => appliances.find((c) => c.slug === category),
    [category]
  )

  if (!categoryData) return notFound()

  const { name, products, filters } = categoryData

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">{name}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 h-60 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">[Hero Image Placeholder]</span>
        </Card>
        <Card className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold mb-2">
              How Does {name} Work? The Science Behind It
            </h2>
            <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
            <div className="h-24 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
              [Image Placeholder]
            </div>
            <p className="text-sm text-gray-600 line-clamp-4">
              Discover how {name.toLowerCase()} systems function, their features,
              and how they make your life easier.
            </p>
          </div>
          <Button variant="outline" className="mt-3 self-start">
            Read More
          </Button>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Trends</h2>
        <p className="text-sm text-gray-600">
          The latest {name.toLowerCase()} technology emphasizes efficiency,
          energy savings, and smarter functionality.
        </p>

        <h2 className="text-lg font-semibold">What to consider</h2>
        <p className="text-sm text-gray-600">
          Factors such as price, rating, warranty, and smart features should be
          considered when buying a {name.toLowerCase()}.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Filters
          </Button>
          <Button variant="outline" size="sm">
            Price
          </Button>
          <Button variant="outline" size="sm">
            Energy Rating
          </Button>
          <Button variant="outline" size="sm">
            Smart Features
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <Card key={i} className="p-4 space-y-3">
              <div className="h-24 bg-gray-100 flex items-center justify-center text-gray-500">
                [Image]
              </div>
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 mr-1" /> {product.rating}
              </div>
              <p className="text-xs text-gray-500">{product.warranty}</p>
              <div className="flex items-center space-x-2">
                <Checkbox id={`compare-${i}`} />
                <label
                  htmlFor={`compare-${i}`}
                  className="text-xs text-gray-600 cursor-pointer"
                >
                  Add to Compare
                </label>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h2 className="font-semibold mb-3">Top {name} Brands</h2>
            <div className="grid grid-cols-3 gap-3">
              {filters.map((filter, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-100 flex items-center justify-center rounded"
                ></div>
              ))}
            </div>
          </Card>

          <Card className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold mb-2">
                How Does {name} Work? The Science Behind It
              </h2>
              <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
              <div className="h-24 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
                [Image Placeholder]
              </div>
              <p className="text-sm text-gray-600 line-clamp-4">
                Learn the working mechanism, benefits, and features of modern{" "}
                {name.toLowerCase()} systems.
              </p>
            </div>
            <Button variant="outline" className="mt-3 self-start">
              Read More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
