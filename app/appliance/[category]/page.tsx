"use client"

import { use, useMemo } from "react"
import { appliances } from "@/data/appliances"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"

type CategoryPageProps = {
  params: Promise<{ category: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params)

  const categoryData = useMemo(
    () => appliances.find((c) => c.slug === category),
    [category]
  )

  if (!categoryData) return notFound()

  const { name, products, filters } = categoryData

  return (
    <div className="w-full p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">{name}</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Card className="h-60 flex items-center justify-center bg-gray-100">
                <span className="text-gray-500">Hero Image</span>
              </Card>
              <p className="text-sm text-gray-600">
                Air conditioners have diverse use cases, primarily focusing on regulating
                temperature and improving indoor air quality for human comfort and health.
                They are used in homes, offices, vehicles, and various specialized
                environments like operating theaters and data centers to maintain optimal
                conditions.
              </p>
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
                {filters.map((f) => (
                  <Button key={f.id} variant="outline" size="sm">
                    {f.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, i) => (
                <Card key={i} className="p-4 space-y-3">
                  <div className="h-24 bg-gray-100 flex items-center justify-center text-gray-500">
                    Product Image
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
          </div>

          <div className="space-y-8">
            <Card className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold mb-2 text-xl">
                  How Does {name} Work? The Science Behind It
                </h2>
                <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
                <div className="h-24 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
                  Article Image
                </div>
                <p className="text-sm text-gray-600 line-clamp-4">
                  Discover how {name.toLowerCase()} systems function, their features,
                  and how they make your life easier.
                </p>
              </div>
              <Button variant="outline" className="mt-3 self-end">
                Read More
              </Button>
            </Card>

            <div>
              <h2 className="font-bold mb-3 text-xl">Top {name} Brands</h2>
              <Image
                src="/ac-brands.png"
                alt="Brands"
                width={350}
                height={100}
                className="object-contain"
              />
            </div>

            <Card className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold mb-2 text-xl">Benefits of {name}</h2>
                <p className="text-xs text-gray-500 mb-2">2023-09-05</p>
                <div className="h-24 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
                  Article Image
                </div>
                <p className="text-sm text-gray-600 line-clamp-4">
                  Learn the working mechanism, benefits, and features of modern{" "}
                  {name.toLowerCase()} systems.
                </p>
              </div>
              <Button variant="outline" className="mt-3 self-end">
                Read More
              </Button>
            </Card>

            <Card className="h-40 flex items-center justify-center bg-gray-50 text-gray-400">
              Advertisement
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
