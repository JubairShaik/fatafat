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
    <section className="relative bg-slate-100/10 overflow-hidden">
      <div className="md:block hidden absolute inset-0 pointer-events-none">
        <Image
          src="/icons/Group.png"
          alt=""
          width={260}
          height={260}
          className="absolute top-0 left-40 "
        />
        {/* Top Left Icons */}
        <Image
          src="/icons/w-machine.png"
          alt=""
          width={60}
          height={60}
          className="absolute top-40 left-10 "
        />
        <Image
          src="/icons/fridge.png"
          alt=""
          width={80}
          height={80}
          className="absolute top-80 left-32  "
        />

        {/* Top Right Icons */}
        <Image
          src="/icons/machine.png"
          alt=""
          width={130}
          height={130}
          className="absolute top-14 right-20 "
        />
        <Image
          src="/icons/cooloer.png"
          alt=""
          width={90}
          height={90}
          className="absolute top-100 right-40 "
        />

        <Image
          src="/icons/iron-box.png"
          alt=""
          width={105}
          height={105}
          className="absolute bottom-10 left-48  "
        />

        {/* Bottom Right Icons */}
        <Image
          src="/icons/tv.png"
          alt=""
          width={175}
          height={175}
          className="absolute bottom-42 right-16  "
        />
        <Image
          src="/icons/w-machine.png"
          alt=""
          width={55}
          height={55}
          className="absolute bottom-12 right-36  "
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-dark mb-6">
            Find the{" "}
            <span className="text-brand-gradient ">Perfect Appliance</span>
            <br />
            for Your Home
          </h1>

          <Tabs defaultValue="appliances" className="mt-16 w-full">
            <TabsList className="flex justify-center gap-6 bg-white rounded-md p-2 shadow-md w-fit mx-auto">
              <TabsTrigger
                value="appliances"
                className="px-6 py-3 rounded-md data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark "
              >
                Appliances
              </TabsTrigger>
              <TabsTrigger
                value="brands"
                className="px-6 py-3 rounded-md data-[state=active]:bg-brand-primary data-[state=active]:text-brand-dark "
              >
                Brands
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appliances">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                {appliances.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-100 flex flex-col justify-center items-center rounded-xl p-6 s hover:shadow-sm transition-shadow border"
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
                    className="bg-slate-100 flex flex-col justify-center items-center rounded-xl p-6  hover:shadow-sm transition-shadow border"
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
            <LinkButton title="Browse All Appliances" href="/appliances" />
          </div>
        </div>
      </div>
    </section>
  );
}
