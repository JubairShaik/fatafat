// components/favorites-section.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { LinkButton } from "./reusable/LinkButton";

export function FavoritesSection() {
  const categories = [
    "AC",
    "Refrigerator",
    "Television",
    "Mixers Grinder",
    "Mixers Grinder",
  ];

  const products = [
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
    { name: "Voltas AC 1.2 Ton", rating: 4.5, reviews: 1250 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 ">
            People’s <span className="text-brand-gradient ">Favourite </span>
            <br />
            Appliances
          </h1>
        </div>
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {categories.map((category, idx) => (
              <Button
                key={idx}
                variant={idx === 0 ? "default" : "outline"}
                className={
                  idx === 0
                    ? "bg-brand-primary hover:bg-blue-700"
                    : " border-[--brand-primary] cursor-pointer  text-blue hover:bg-blue-600 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((product, idx) => (
            <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
              <div className="p-3  bg-gray-100 rounded-lg mb-4 flex items-center justify-center h-32">
              </div>
              <h3 className="font-semibold text-brand-darkmb-2">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>
            </Card>
          ))}
        </div>

        <LinkButton title="View All" href="/appliances" />
      </div>
    </section>
  );
}
