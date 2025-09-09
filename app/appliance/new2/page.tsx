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
        className="w-full h-auto object-cover rounded-lg"
      />


      <div className="flex gap-6">
        <Card className="w-2/3 p-6 flex flex-row items-center space-x-4">
          <div>
            <Image src="/lg-logo.png" alt="LG Logo" width={200} height={80} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">Life’s Good.</h2>
            <p className="text-sm text-gray-600">
              LG is a South Korean multinational conglomerate known for its consumer 
              electronics, home appliances, and mobile communications. 
              The company, formerly known as Lucky-Goldstar, was founded in 1947
               and has since expanded into various industries. LG's business units 
               include Home Entertainment, Mobile Communications, Home Appliance & Air
                Solutions, and Vehicle component Solutions. 
            </p>
          </div>
        </Card>

        <Card className="w-1/3 p-6 flex flex-row items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4 mt-1">
            <p className="text-5xl font-bold text-green-600">4.5</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
              ))}
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-xl font-bold">Brand Score By Customer</h1>
            <p className="text-xs mt-2">25236 reviews</p>
          </div>
        </Card>
      </div>

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

        <Input
          type="text"
          placeholder="Search..."
          className="w-[200px]"
      />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliances.map(category =>
            category.products.map((product) => (
              <Card key={product.id} className="p-4 space-y-3">
                <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-500">
                  
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
          <div>
              <Image
                  src="/discount-card.png"
                  alt="LG Banner"
                  width={500}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg"
              />
          </div>

          <Card className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold mb-2">
                How Does Air Conditioning Work? The Science Behind AC
              </h2>
              <p className="text-xs text-gray-500 mb-2">2023-09-02</p>
              <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center text-gray-500">
                
              </div>
              <p className="text-sm text-gray-600 line-clamp-4">
                Whether you need to cool your place or business, air conditioning
                provides comfort. Learn how AC systems regulate temperature,
                remove humidity, and improve indoor air quality.
              </p>
            </div>
            <Button variant="outline" className="mt-3 self-end">
              Read More
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
