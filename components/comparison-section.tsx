// components/comparison-section.tsx
import Image from "next/image";
import { LinkButton } from "./reusable/LinkButton";

export function ComparisonSection() {
  return (
    <section className="py-16 hover:text-brand-dark bg-black text-white relative">
      <div className="md:block hidden absolute    inset-0 pointer-events-none">
        {/* Top Left Icons */}
        <Image
          src="/icons/fridge.png"
          alt=""
          width={100}
          height={100}
          className="absolute -bottom-10 left-12  "
        />

        {/* Top Right Icons */}
        <Image
          src="/icons/machine.png"
          alt=""
          width={70}
          height={70}
          className="absolute top-2 right-24 "
        />

        <Image
          src="/icons/iron-box.png"
          alt=""
          width={105}
          height={105}
          className="absolute bottom-90 z-100  left-48  "
        />

        {/* Bottom Right Icons */}
        <Image
          src="/icons/tv.png"
          alt=""
          width={75}
          height={75}
          className="absolute bottom-2 right-16  "
        />
      </div>

      <div className="max-w-6xl   mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col ">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-brand-gradient  ">Compare Appliances,</span>
              <br />
              Find the Perfect Fit
            </h2>
            <p className="text-gray-300 mb-8  max-w-md text-lg leading-relaxed">
              Make informed choices by comparing features, prices, and ratings
              of top appliances, side-by-side. Discover which model best suits
              your home and budget
            </p>

            <LinkButton title="Compare Now" href="/" />
          </div>

          <Image
            src={"/big-image.png"}
            alt="image"
            width={400}
            height={400}
            className="object-cover flex items-end justify-end  "
          />
        </div>
      </div>
    </section>
  );
}
