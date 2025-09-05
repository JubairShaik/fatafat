"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { TiHome } from "react-icons/ti"
import { usePathname } from "next/navigation"

export default function Page() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="p-4 sm:p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <TiHome size={16} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/")
            const isLast = index === segments.length - 1
            const label = decodeURIComponent(segment)

            return (
              <div key={href} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="bg-muted h-64 sm:h-80 rounded mb-4" />
          <div className="flex gap-2">
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-muted h-16 sm:h-20 w-1/4 rounded"
                />
              ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <span className="px-3 py-1 bg-primary-foreground text-primary rounded-full text-xs sm:text-sm">
            Air Conditioner
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold mt-2 mb-2">
            Voltas AC 1.2 Ton
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-chart-4" />
              <span>4.5 Ratings</span>
            </div>
            <span>2.5k Reviews</span>
            <span>2.6k Sold</span>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              {Array(6)
                .fill("Attr 1:")
                .map((attr, idx) => (
                  <span key={idx}>{attr}</span>
                ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <Button variant="outline" className="w-full sm:w-auto">
              Find Seller
            </Button>
            <Button className="w-full sm:w-auto">Compare</Button>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              {Array(6)
                .fill("Attr 1:")
                .map((attr, idx) => (
                  <span key={idx}>{attr}</span>
                ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Reviews & Ratings</h3>
            <div className="text-lg sm:text-xl font-semibold">4.5</div>
            <div className="flex items-center my-2">
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 sm:w-5 sm:h-5 text-chart-4" />
                ))}
            </div>

            {Array(2)
              .fill(null)
              .map((_, idx) => (
                <Card
                  key={idx}
                  className="p-4 sm:p-6 my-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-input" />
                    <div>
                      <p className="font-medium">Ralph Edwards</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Created this task
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-chart-4" />
                    <span>4.5</span>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
