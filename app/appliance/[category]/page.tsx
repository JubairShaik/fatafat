"use client"

import { use, useMemo } from "react"
import { appliances } from "@/data/appliances"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

  const { name, products } = categoryData

  return (
    <div className="w-full p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{name}</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <Card className="h-80 flex items-center justify-center bg-primary-foreground rounded-none">
                
              </Card>
              <p className="text-base">
                Air conditioners have diverse use cases, primarily focusing on regulating
                temperature and improving indoor air quality for human comfort and health.
                They are used in homes, offices, vehicles, and various specialized
                environments like operating theaters and data centers to maintain optimal
                conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Trends</h2>
              <p className="text-base ">
                The latest trends in {name.toLowerCase()} technology <b>emphasizes efficiency</b>,
                <b> environmental sustainability</b>, and <b>smarter features</b>.
              </p>

              <h2 className="text-xl font-semibold">What to consider</h2>
              <p className="text-base">
                When buying an air conditioner, consider room size and cooling
                 capacity (measured in tons or BTUs), energy efficiency
                  (look for high SEER or ISEER ratings), and 
                  type (split, window, or portable). Also, consider features 
                  like noise level, air filtration, and smart controls..
              </p>
              <div className="w-full rounded-2xl border p-4 shadow-sm">
                <span className="text-sm">Filter</span>
                <div className="flex flex-wrap w-full mt-3 gap-4">
                  <Select>
                    <SelectTrigger className="rounded-lg border-muted">
                      <SelectValue placeholder="Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lg">LG</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="voltas">Voltas</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="rounded-lg border-muted">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under30">Under ₹30,000</SelectItem>
                      <SelectItem value="30-50">₹30,000 - ₹50,000</SelectItem>
                      <SelectItem value="above50">Above ₹50,000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="rounded-lg border-muted">
                      <SelectValue placeholder="Energy Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3star">3 Star</SelectItem>
                      <SelectItem value="4star">4 Star</SelectItem>
                      <SelectItem value="5star">5 Star</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="rounded-lg border-muted">
                      <SelectValue placeholder="Smart Features" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wifi">Wi-Fi Control</SelectItem>
                      <SelectItem value="voice">Voice Assistant</SelectItem>
                      <SelectItem value="autoclean">Auto Clean</SelectItem>
                    </SelectContent>
                  </Select>

                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, i) => (
                <div key={i} className="p-4 space-y-3 rounded-2xl shadow-sm">
                  <div className="h-40 rounded-md bg-sidebar-ring flex items-center justify-center text-gray-400 text-sm">
                    
                  </div>
                  <h3 className="font-medium text-base">
                    {product.name}
                  </h3>
                  <div className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-md bg-yellow-400/90 text-white w-fit">
                    <Star className="w-3.5 h-3.5 mr-1 fill-white text-white" />
                    {product.rating}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{product?.specs?.tonnage}</span>
                    <span className="text-gray-300">|</span>
                    <span>{product.warranty} Waranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id={`compare-${i}`} />
                    <label
                      htmlFor={`compare-${i}`}
                      className="text-xs text-gray-600 cursor-pointer"
                    >
                      Add to Compare
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-4 flex flex-col justify-between rounded-lg">
              <div>
                <h2 className="font-semibold mb-2 text-2xl">
                  How Does {name} Work? The Science Behind It
                </h2>
                <p className="text-xs text-muted mb-2">2023-09-02</p>
                <div className="h-40 bg-primary-foreground mb-3 flex items-center justify-center">
                  
                </div>
                <p className="text-sm text-gray-600">
                  Whether you need to cool your home or a business, air conditioning
                   systems can make life more comfortable by lowering
                   the temperature of indoor air. An air conditioner uses 
                   refrigeration to remove heat from the air inside your
                    home and then pump it outside. But how exactly does 
                    that work? In this article, we'll explain the science
                     behind how central air works so you can understand what's 
                     happening when you turn on that AC switch in summer.
                </p>
              </div>
              <Button variant="outline" className="self-end border-2 border-brand-primary text-brand-primary">
                Read More
              </Button>
            </Card>

            <Card className="p-4 rounded-lg">
              <h2 className="font-semibold text-xl">Top {name} Brands</h2>
              <Image
                src="/ac-brands.png"
                alt="Brands"
                width={350}
                height={100}
                className="object-contain mx-auto"
              />
            </Card>

            <Card className="p-4 flex flex-col justify-between rounded-lg">
              <div>
                <h2 className="font-semibold mb-2 text-2xl">
                  How Does {name} Work? The Science Behind It
                </h2>
                <p className="text-xs text-muted mb-2">2023-09-02</p>
                <div className="h-40 bg-primary-foreground mb-3 flex items-center justify-center">
                  
                </div>
                <p className="text-sm text-gray-600">
                  Whether you need to cool your home or a business, air conditioning
                   systems can make life more comfortable by lowering
                   the temperature of indoor air. An air conditioner uses 
                   refrigeration to remove heat from the air inside your
                    home and then pump it outside. But how exactly does 
                    that work? In this article, we'll explain the science
                     behind how central air works so you can understand what's 
                     happening when you turn on that AC switch in summer.
                </p>
              </div>
              <Button variant="outline" className="self-end border-2 border-brand-primary text-brand-primary">
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
