// components/hero-section.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { LinkButton } from "./reusable/LinkButton";
export function HeroSection() {
  const brands = [
    { name: "Coffee Machine", icon: "/coffee.png" },
    { name: "Mixture Grinder", icon: "/mixer.png" },
    { name: "Toaster", icon: "/toaster.png" },
    { name: "Coffee Machine", icon: "/coffee.png" },
    { name: "Mixture Grinder", icon: "/mixer.png" },
    { name: "Toaster", icon: "/toaster.png" },
  ];

  const appliances = [
    { name: "Mixture Grinder", icon: "/mixer.png" },
    { name: "Toaster", icon: "/toaster.png" },
    { name: "Coffee Machine", icon: "/coffee.png" },
    { name: "Mixture Grinder", icon: "/mixer.png" },
    { name: "Toaster", icon: "/toaster.png" },
    { name: "Coffee Machine", icon: "/coffee.png" },
  ];

  return (
    <section className="relative min-h-screen bg-slate-300 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Icons */}
        <Image
          src="/icons/w-machine.png"
          alt=""
          width={60}
          height={60}
          className="absolute top-20 left-10 "
        />
        <Image
          src="/icons/fridge.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-40 left-32  "
        />

        {/* Top Right Icons */}
        <Image
          src="/icons/machine.png"
          alt=""
          width={70}
          height={70}
          className="absolute top-32 right-20 "
        />
        <Image
          src="/icons/cooloer.png"
          alt=""
          width={90}
          height={90}
          className="absolute top-60 right-40 "
        />

        <Image
          src="/icons/iron-box.png"
          alt=""
          width={105}
          height={105}
          className="absolute bottom-60 left-48  "
        />

        {/* Bottom Right Icons */}
        <Image
          src="/icons/tv.png"
          alt=""
          width={75}
          height={75}
          className="absolute bottom-32 right-16  "
        />
        <Image
          src="/icons/w-machine.png"
          alt=""
          width={55}
          height={55}
          className="absolute bottom-52 right-36  "
        />

        <Image
          src="/icons/Group.png"
          alt=""
          width={100}
          height={100}
          className="absolute z-100 bg-slate-300 top-1/2  transform -translate-x-1/2 -translate-y-1/3 opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6">
            Find the{" "}
            <span className="text-brand-primary">Perfect Appliance</span>
            <br />
            for Your Home
          </h1>

          <Tabs defaultValue="appliances" className="mt-16 w-full">
            <TabsList className="flex justify-center gap-6 bg-white rounded-full p-2 shadow-md w-fit mx-auto">
              <TabsTrigger
                value="appliances"
                className="px-6 py-2 rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark "
              >
                Appliances
              </TabsTrigger>
              <TabsTrigger
                value="brands"
                className="px-6 py-2 rounded-full data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark "
              >
                Brands
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appliances">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                {appliances.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-200 flex flex-col justify-center items-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="mb-3"
                    />
                    <p className="text-brand-dark font-semibold">{item.name}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="brands">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                {brands.map((brand, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-200 flex flex-col justify-center items-center rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border"
                  >
                    <Image
                      src={brand.icon}
                      alt={brand.name}
                      width={100}
                      height={100}
                      className="mb-3"
                    />
                    <p className="text-brand-dark font-semibold">
                      {brand.name}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 px-8 py-3 ">
            <LinkButton title="Browse All Appliances" href="/" />
          </div>
        </div>
      </div>
    </section>
  );
}
