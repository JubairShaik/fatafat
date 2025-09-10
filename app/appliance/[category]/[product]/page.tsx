import { appliances } from "@/data/appliances"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

type ProductPageProps = {
  params: { category: string; product: string }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product } = params

  const categoryData = appliances.find((c) => c.slug === category)
  if (!categoryData) return notFound()

  const productData = categoryData.products.find(
    (p) => p.name.toLowerCase() === decodeURIComponent(product).toLowerCase(),
  )
  if (!productData) return notFound()

  const relatedProducts = categoryData.products.filter(
    (p) => p.id !== productData.id,
  )

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 space-y-4">
          <div className="bg-muted h-64 rounded" />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-muted h-16 rounded" />
            ))}
          </div>
          <div className="bg-muted h-40 flex items-center justify-center rounded">
            <span className="text-muted-foreground">Ad</span>
          </div>
        </div>

        <div className="col-span-3">
          <Card className="p-4">
            <CardHeader className="p-0 mb-2">
              <h1 className="text-2xl font-bold">{productData.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{productData.rating} Ratings</span>
                <span>•</span>
                <span>2.5k Reviews</span>
                <span>•</span>
                <span>2.6k Sold</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h2 className="font-medium mb-2">Specifications</h2>
                <div className="grid grid-cols-2 gap-x-6 text-sm text-muted-foreground">
                  {Object.entries(productData.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-start gap-3">
                      <span className="capitalize">{key} :</span>
                      <span>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-start gap-3">
                    <span>Warranty :</span>
                    <span>{productData.warranty}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 text-white">Compare</Button>
                <Button variant="outline">Service Request</Button>
              </div>
            </CardContent>
          </Card>

          {relatedProducts.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Related Products</h2>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {relatedProducts.map((related) => (
                  <Card key={related.id} className="min-w-[200px] p-3">
                    <div className="bg-muted h-28 rounded mb-2" />
                    <h3 className="font-medium text-sm">{related.name}</h3>
                    <div className="text-xs text-muted-foreground">
                      {related.rating} ★ • Warranty {related.warranty}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Reviews & Ratings</h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{productData.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(productData.rating)
                        ? "text-yellow-500"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 space-y-3">
              {[1, 2].map((i) => (
                <Card key={i} className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm font-medium">Ralph Edwards</p>
                      <p className="text-xs text-muted-foreground">
                        Great product, totally worth it!
                      </p>
                    </div>
                    <span className="ml-auto text-sm font-medium bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                      ⭐ {productData.rating}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">Service Vendor</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[1, 2].map((i) => (
                <Card key={i} className="min-w-[250px] p-3">
                  <div className="bg-muted h-20 rounded mb-2" />
                  <h3 className="font-medium text-sm">Vastra Electricals</h3>
                  <div className="text-xs text-muted-foreground">
                    {productData.rating} ★ • 2.5k Reviews
                  </div>
                  <div className="text-xs mt-1">
                    Services Offered: AC, FAN, GEYSER
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
