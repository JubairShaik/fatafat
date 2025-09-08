"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"
import { appliances } from "@/data/appliances"

export default function BrandPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <Card className="h-56 md:h-72 bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <span className="text-gray-500">[Brand Banner Placeholder]</span>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 flex flex-row items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <Image src="/lg.png" alt="LG Logo" width={40} height={40} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-pink-600">Life’s Good.</h2>
            <p className="text-sm text-gray-600">
              LG Electronics focuses on innovation and delivering value through
              home appliances, air conditioning, and electronics that emphasize
              sustainability and lifestyle enhancement.
            </p>
          </div>
        </Card>

        <Card className="p-6 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4 mt-1">
            <p className="text-4xl font-bold text-green-600">4.5</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Based on 25K+ reviews</p>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">Category</Button>
        <Button variant="outline" size="sm">Price</Button>
        <input
          type="text"
          placeholder="Search"
          className="border rounded px-3 py-1 text-sm focus:outline-none"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliances.map(category =>
            category.products.map((product) => (
              <Card key={product.id} className="p-4 space-y-3">
                <div className="h-24 bg-gray-100 flex items-center justify-center text-gray-500">
                  [Image]
                </div>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" /> {product.rating}
                </div>
                <p className="text-xs text-gray-500">{product.warranty}</p>
                <div className="flex items-center space-x-2">
                  <Checkbox id={`compare-${product.id}`} />
                  <label
                    htmlFor={`compare-${product.id}`}
                    className="text-xs text-gray-600 cursor-pointer"
                  >
                    Add to Compare
                  </label>
                </div>
              </Card>
            ))
          )}
        </div>

        <div className="space-y-6">
          <Card className="p-4 bg-gray-50">
            <div className="h-32 bg-gray-100 flex items-center justify-center mb-3">
              <span className="text-gray-500">[Promo Image Placeholder]</span>
            </div>
            <h2 className="text-lg font-bold text-red-600">Buy 3 product with</h2>
            <p className="text-2xl font-extrabold text-red-600">10% Off</p>
            <p className="text-sm text-gray-600 mt-1">
              Buy more, pay less! Exclusive discount on select LG products.
            </p>
          </Card>

          <Card className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold mb-2">
                How Does Air Conditioning Work? The Science Behind AC
              </h2>
              <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
              <div className="h-24 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
                [Image Placeholder]
              </div>
              <p className="text-sm text-gray-600 line-clamp-4">
                Whether you need to cool your place or business, air conditioning
                provides comfort. Learn how AC systems regulate temperature,
                remove humidity, and improve indoor air quality.
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
