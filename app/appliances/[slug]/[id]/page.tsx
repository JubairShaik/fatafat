import { Star } from "lucide-react";
import { useMemo } from "react";

const generateProductData = (applianceType: string, productId: string) => {
  const applianceConfigs = {
    ac: {
      name: "Air Conditioner",
      capacityOptions: ["1 Ton", "1.2 Ton", "1.5 Ton", "2 Ton"],
      brands: ["Voltas", "LG", "Samsung", "Daikin", "Hitachi"],
      features: [
        "Inverter Technology",
        "Copper Coil",
        "5 Star Rating",
        "Dual Protection",
        "Anti-Bacterial Filter",
      ],
      specs: {
        "Cooling Capacity": ["1 Ton", "1.2 Ton", "1.5 Ton"],
        "Energy Rating": ["3 Star", "4 Star", "5 Star"],
        "Compressor Type": ["Rotary", "Reciprocating", "Scroll"],
        Refrigerant: ["R32", "R410A", "R22"],
        Warranty: ["1 Year Comprehensive", "5 Years on Compressor"],
      },
    },
    refrigerator: {
      name: "Refrigerator",
      capacityOptions: ["190L", "253L", "340L", "495L"],
      brands: ["Samsung", "LG", "Whirlpool", "Godrej", "Haier"],
      features: [
        "Frost Free",
        "Inverter Compressor",
        "Convertible Freezer",
        "Smart Connect",
        "Multi Air Flow",
      ],
      specs: {
        Capacity: ["190L", "253L", "340L", "495L"],
        "Door Type": ["Single Door", "Double Door", "Multi Door"],
        "Energy Rating": ["2 Star", "3 Star", "4 Star", "5 Star"],
        "Defrosting Type": ["Manual", "Auto Defrost", "Frost Free"],
        Warranty: ["1 Year Comprehensive", "10 Years on Compressor"],
      },
    },
    "washing-machine": {
      name: "Washing Machine",
      capacityOptions: ["6 kg", "7 kg", "8 kg", "9 kg"],
      brands: ["Samsung", "LG", "Whirlpool", "IFB", "Bosch"],
      features: [
        "Eco Bubble",
        "Smart Inverter",
        "Steam Wash",
        "Quick Wash",
        "Child Lock",
      ],
      specs: {
        Capacity: ["6 kg", "7 kg", "8 kg", "9 kg"],
        Type: ["Front Load", "Top Load", "Semi-Automatic"],
        "Energy Rating": ["3 Star", "4 Star", "5 Star"],
        "Spin Speed": ["1000 RPM", "1200 RPM", "1400 RPM"],
        Warranty: ["2 Years Comprehensive", "10 Years on Motor"],
      },
    },
    microwave: {
      name: "Microwave Oven",
      capacityOptions: ["20L", "23L", "28L", "32L"],
      brands: ["Samsung", "LG", "IFB", "Bajaj", "Panasonic"],
      features: [
        "Auto Cook",
        "Grill Function",
        "Convection Mode",
        "Child Safety Lock",
        "LED Display",
      ],
      specs: {
        Capacity: ["20L", "23L", "28L", "32L"],
        Type: ["Solo", "Grill", "Convection"],
        "Power Output": ["700W", "800W", "900W", "1200W"],
        "Control Type": ["Touch", "Rotary", "Digital"],
        Warranty: ["1 Year Comprehensive", "2 Years on Magnetron"],
      },
    },
  };

  const config =
    applianceConfigs[applianceType as keyof typeof applianceConfigs] ||
    applianceConfigs.ac;

  const productIndex = parseInt(productId.split("-").pop() || "1") - 1;

  const brandIndex = productIndex % config.brands.length;
  const capacityIndex = productIndex % config.capacityOptions.length;

  return {
    id: productId,
    name: `${config.brands[brandIndex]} ${config.name} ${config.capacityOptions[capacityIndex]}`,
    category: config.name,
    rating: 4.0 + (productIndex % 10) / 10, // Rating between 4.0-4.9
    totalRatings: `${(productIndex % 5) + 2}.${productIndex % 10}k`,
    reviews: `${(productIndex % 5) + 2}.${productIndex % 10}k`,
    sold: `${(productIndex % 8) + 2}.${productIndex % 10}k`,
    price: 15000 + productIndex * 5000 + brandIndex * 2000,
    mainImage: "/api/placeholder/400/400",
    thumbnails: Array(4).fill("/api/placeholder/100/100"),
    highlights: config.features.slice(0, 6).map((feature) => ({
      label: "Feature:",
      value: feature,
    })),
    specifications: Object.entries(config.specs)
      .slice(0, 5)
      .map(([key, values]) => ({
        label: key,
        value: values[productIndex % values.length],
      })),
    reviews: [
      {
        id: 1,
        user: "Rajesh Kumar",
        rating: 4.5,
        comment:
          "Excellent product! Great cooling performance and energy efficient.",
        avatar: "/api/placeholder/40/ 40",
      },
      {
        id: 2,
        user: "Priya Sharma",
        rating: 4.0,
        comment:
          "Good value for money. Installation was quick and professional.",
        avatar: "/api/placeholder/40/4 0",
      },
      {
        id: 3,
        user: "Amit Patel",
        rating: 5.0,
        comment: "Outstanding build quality. Highly recommended!",
        avatar: "/api/placeholder/40/40",
      },
    ],
  };
};

const StarRating = ({ rating, showNumber = false }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating
            ? "text-yellow-400 fill-current"
            : star - 0.5 <= rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ))}
    {showNumber && <span className="ml-2 text-sm text-gray-600">{rating}</span>}
  </div>
);

const ProductDetailPage = ({ params }) => {
  const applianceType = params?.slug || "ac";
  const productId = params?.id || "ac-1";

  const productData = useMemo(
    () => generateProductData(applianceType, productId),
    [applianceType, productId]
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-gray-400">Product Image</span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {productData.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shadow-sm"
                >
                  <span className="text-gray-400 text-xs">
                    View {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="mb-6">
              <span className="text-sm text-brand-primary mb-2 block font-medium">
                {productData.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {productData.name}
              </h1>

              <div className="flex items-center space-x-6 text-sm mb-6">
                <div className="flex items-center">
                  <StarRating rating={productData.rating} />
                  <span className="ml-2 text-gray-600">
                    {productData.rating.toFixed(1)} ({productData.totalRatings}{" "}
                    reviews)
                  </span>
                </div>
                <span className="text-gray-600">{productData.sold} sold</span>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  ₹{productData.price.toLocaleString()}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  Free installation & 1 year warranty included
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-y-3">
                {productData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                    <span className="text-gray-700">{highlight.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                Find Best Price
              </button>
              <button className="flex-1 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Compare Products
              </button>
            </div>

            {/* Specifications */}
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="space-y-3">
                {productData.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex border-b border-gray-100 pb-2"
                  >
                    <span className="text-gray-600 min-w-32 font-medium">
                      {spec.label}:
                    </span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 ">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Customer Reviews & Ratings
          </h3>

          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {productData.rating.toFixed(1)}
            </div>
            <StarRating rating={productData.rating} />
            <div className="text-sm text-gray-600 mt-2">
              Based on {productData.totalRatings} verified reviews
            </div>
          </div>

          <div className="space-y-6">
            {productData.reviews.map((review) => (
              <div
                key={review.id}
                className="flex space-x-4 max-w-2xl p-6 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {review.user}
                    </h4>
                    <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded text-sm">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {review.rating.toFixed(1)}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <div className="text-xs text-gray-500 mt-2">
                    Verified Purchase • 2 months ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
