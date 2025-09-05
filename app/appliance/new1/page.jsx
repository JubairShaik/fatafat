"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"

export default function AirConditionerPage() {
  const products = Array(8).fill({
    name: "Voltas AC 1.5 Ton",
    rating: 4.5,
    warranty: "4 Yr Warranty",
  })

  const brands = [
    "/samsung.png",
    "/lg.png",
    "/hitachi.png",
    "/whirlpool.png",
    "/carrier.png",
    "/voltas.png",
    "/panasonic.png",
    "/godrej.png",
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Air Conditioner</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 h-60 flex items-center justify-center bg-gray-100">
          <span className="text-gray-500">[Hero Image Placeholder]</span>
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
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Trends</h2>
        <p className="text-sm text-gray-600">
          The latest air conditioning technology emphasizes efficiency, energy
          savings, and smarter functionality.
        </p>

        <h2 className="text-lg font-semibold">What to consider</h2>
        <p className="text-sm text-gray-600">
          Factors such as energy rating, cooling capacity, warranty, and smart
          features should be considered when buying an AC.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            Brands
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
            <h2 className="font-semibold mb-3">Top AC Brands</h2>
            <div className="grid grid-cols-3 gap-3">
              {brands.map((logo, i) => (
                <div
                  key={i}
                  className="h-12 bg-gray-100 flex items-center justify-center rounded"
                >
                  <Image src={logo} alt="brand" width={60} height={40} />
                </div>
              ))}
            </div>
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
