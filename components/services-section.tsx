// components/services-section.tsx
import Image from "next/image";
import { LinkButton } from "./reusable/LinkButton";

export function ServicesSection() {
  const services = [
    {
      name: "AC Service & Repair",
      icon: "/illustrations/ac-guy.png",
    },
    {
      name: "Washing Machine Repair",
      icon: "/illustrations/fridge.png",
    },
    {
      name: "Refrigerator Repair",
      icon: "/illustrations/tv-repair.png",
    },
    {
      name: "TV Repair",
      icon: "/illustrations/w-machine.png",
    },
    {
      name: "AC Service & Repair",
      icon: "/illustrations/ac-guy.png",
    },
    {
      name: "Washing Machine Repair",
      icon: "/illustrations/fridge.png",
    },
    {
      name: "Refrigerator Repair",
      icon: "/illustrations/tv-repair.png",
    },
    {
      name: "TV Repair",
      icon: "/illustrations/w-machine.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-brand-dark mb-6 ">
            Find a Quick{" "}
            <span className="text-brand-gradient ">Service or Repair</span>
            <br />
            for Your Appliance
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {services.map((service, idx) => (
            <div key={idx} className="text-center">
              {/* Image container */}
              <div className="border-2 rounded-xl px-4 justify-center  min-h-[200px] flex items-end   hover:shadow-lg transition-shadow bg-white">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={160}
                  height={160}
                  className="object-cover "
                />
              </div>

              {/* Name outside */}
              <p className="mt-4 text-base font-semibold text-[--brand-dark]">
                {service.name}
              </p>
            </div>
          ))}
        </div>
        <LinkButton title="   Browse All Services" href="/" />
      </div>
    </section>
  );
}
