"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"
import Image from "next/image"
import { appliances } from "@/data/appliances"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function BrandPage() {
  return (
    <div className="p-2 max-w-7xl mx-auto space-y-6">
      <Image
        src="/lg.jpg"
        alt="LG Banner"
        width={2000}
        height={600}
        className="w-full h-auto object-cover"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="md:col-span-2 flex flex-col md:flex-row gap-10 items-center">
            <Image src="/lg-logo.png" alt="LG Logo" width={100} height={100} />
            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-3">Life’s Good.</h2>
              <p className="text-base text-accent-foreground">
                LG is a South Korean multinational conglomerate known for its consumer
                electronics, home appliances, and mobile communications. The company,
                formerly known as Lucky-Goldstar, was founded in 1947 and has since
                expanded into various industries. LG&apos;s business units include Home
                Entertainment, Mobile Communications, Home Appliance & Air Solutions,
                and Vehicle component Solutions.
              </p>
            </div>
          </div>
          <Card className="p-4">
          <h1 className="text-accent-foreground">Filter</h1>
          <div className="flex flex-wrap gap-2">
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ac">Air Conditioners</SelectItem>
                <SelectItem value="fridge">Refrigerators</SelectItem>
                <SelectItem value="washing">Washing Machines</SelectItem>
                <SelectItem value="kitchen">Kitchen</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low to High</SelectItem>
                <SelectItem value="high">High to Low</SelectItem>
                <SelectItem value="0-20000">Under ₹20,000</SelectItem>
                <SelectItem value="20000-50000">₹20,000 - ₹50,000</SelectItem>
                <SelectItem value="50000+">Above ₹50,000</SelectItem>
              </SelectContent>
            </Select>

            <Input type="text" placeholder="Search..." className="w-[200px]" />
          </div>
          </Card>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appliances.map(category =>
              category.products.map(product => (
                <Card key={product.id} className="p-4">
                  <div className="h-32 bg-sidebar-ring flex items-center justify-center text-gray-500" />
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <span className="inline-flex items-center text-xs font-medium bg-yellow-400 text-white rounded-full px-2 py-0.5 w-fit">
                    <Star className="w-3 h-3 fill-white mr-1" />
                    {product.rating}
                  </span>
                  <div className="flex gap-5 text-sm text-muted-foreground">
                    <span className="">{product.specs.tonnage}</span>
                    <span className="">{product.warranty}</span>
                  </div>
        
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`compare-${product.id}`} className="border-accent-foreground"/>
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
        </div>

        <div className="space-y-6">
           <Card className="p-6 flex flex-row items-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <p className="text-5xl font-bold text-green-600">4.5</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
                ))}
              </div>
              <p className="text-xs">25236 reviews</p>
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold">Brand Score By Customers</h1>
              <p className="text-sm text-gray-600">42054 reviews</p>
            </div>
          </Card>
          <Image
            src="/discount-card.png"
            alt="LG Banner"
            width={500}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
          />

          <Card className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold mb-2">
                How Does Air Conditioning Work? The Science Behind AC
              </h2>
              <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
              <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center text-gray-500" />
              <p className="text-sm text-gray-600 line-clamp-4">
                Whether you need to cool your place or business, air conditioning
                provides comfort. Learn how AC systems regulate temperature,
                remove humidity, and improve indoor air quality.
              </p>
            </div>
            <Button variant="outline" className="self-end text-brand-primary border-2 border-brand-primary">
              Read More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
