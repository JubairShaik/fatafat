"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { appliances } from "@/data/appliances"

type SelectedFilters = Record<string, string[]>

export default function AppliancePage() {
  const [selectedSort, setSelectedSort] = useState("Best Match")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({})
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({})
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const allFilters = appliances
    .flatMap((c) => c.filters)
    .reduce(
      (acc, filter) => {
        if (!acc.some((f) => f.name === filter.name)) {
          acc.push(filter)
        }
        return acc
      },  
      [] as (typeof appliances)[number]["filters"],
    )

  const allProducts =
    selectedCategory === "all"
      ? appliances.flatMap((c) => c.products.map((p) => ({ ...p, category: c.name, slug: c.slug })))
      : appliances
          .filter((c) => c.slug === selectedCategory)
          .flatMap((c) => c.products.map((p) => ({ ...p, category: c.name, slug: c.slug })))

  const filteredProducts = allProducts.filter((p) => {
    return Object.entries(selectedFilters).every(([filterName, values]) => {
      if (values.length === 0) return true

      if (filterName === "Brand") {
        return values.some((v) => p.name.toLowerCase().includes(v.toLowerCase()))
      }

      if (filterName === "Warranty") {
        return values.includes(p.warranty)
      }

      return values.includes(p.specs[filterName.toLowerCase()] || p.specs[filterName] || "")
    })
  })

  const handleFilterChange = (filterName: string, option: string) => {
    setSelectedFilters((prev) => {
      const prevValues = prev[filterName] || []
      return {
        ...prev,
        [filterName]: prevValues.includes(option) ? prevValues.filter((v) => v !== option) : [...prevValues, option],
      }
    })
    setCurrentPage(1)
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === "Rating") return b.rating - a.rating
    if (selectedSort === "Warranty") return Number.parseInt(b.warranty) - Number.parseInt(a.warranty)
    return 0
  })

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSelectedSort(value)
    setCurrentPage(1)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        <aside className="w-full lg:w-64 border-b lg:border-r pb-4 lg:pb-0 lg:pr-4">
          <h2 className="font-semibold mb-4">Filters</h2>
          <ScrollArea className="h-[100vh]">
            {allFilters.map((filter) => {
              const searchValue = searchTerms[filter.name] || ""
              const filteredOptions = filter.options.filter((opt) =>
                opt.toLowerCase().includes(searchValue.toLowerCase()),
              )

              return (
                <div key={filter.name} className="mb-6">
                  <div className="font-medium mb-2">{filter.name}</div>
                  <Input
                    placeholder={`Search ${filter.name}`}
                    value={searchValue}
                    onChange={(e) =>
                      setSearchTerms((prev) => ({
                        ...prev,
                        [filter.name]: e.target.value,
                      }))
                    }
                    className="mb-2"
                  />
                  <div className="flex flex-col gap-2">
                    {filteredOptions.map((option, optionIdx) => (
                      <label key={`${filter.name}-${optionIdx}`} className="flex items-center gap-2">
                        <Checkbox
                          checked={selectedFilters[filter.name]?.includes(option)}
                          onCheckedChange={() => handleFilterChange(filter.name, option)}
                          className="border-muted-foreground"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            })}
          </ScrollArea>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} results found
                {totalPages > 1 && (
                  <span className="ml-2">
                    (Page {currentPage} of {totalPages})
                  </span>
                )}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="md:w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {appliances.map((cat) => (
                    <SelectItem key={cat.id} value={cat.slug}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Tabs value={selectedSort} onValueChange={handleSortChange}>
                <TabsList className="hidden md:flex bg-sidebar-ring">
                  <TabsTrigger value="Best Match">Best Match</TabsTrigger>
                  <TabsTrigger value="Rating">Rating</TabsTrigger>
                  <TabsTrigger value="Warranty">Warranty</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {currentProducts.map((p) => (
              <Link
                href={`/appliance/${p.slug}/${p.name}`}
                key={p.id}
                className="text-inherit no-underline"
              >
                <div className="p-4 space-y-3 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="h-40 bg-sidebar-ring rounded-md flex items-center justify-center">
                    
                  </div>
                  <h1 className="text-sm font-medium">{p.name}</h1>
                  <div className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-md bg-yellow-400/90 text-white w-fit">
                    <Star className="w-3.5 h-3.5 mr-1 fill-white text-white" />
                    {p.rating}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    {Object.entries(p.specs).map(([key, value]) => (
                      <span key={key}>{value},</span>
                    ))}
                    <span>{p.warranty} Waranty</span>
                  </div>

                  <label className="flex items-center gap-2 text-xs text-gray-600">
                    <Checkbox id={`compare-${p.id}`} />
                    Add to Compare
                  </label>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
