import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className=" bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <Image
            className="dark:invert contain "
            src={`/logo-dark.svg`}
            width={134}
            height={100}
            alt="image-logo"
          />

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 ">
              <li>About Us</li>
              <li>Work with Us</li>
              <li>Privacy policy</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customers</h4>
            <ul className="space-y-2 text-brand-cream">
              <li>Brands</li>
              <li>Appliances</li>
              <li>Quick Services</li>
              <li>Compare Appliance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Vendors</h4>
            <ul className="space-y-2 text-brand-cream">
              <li>Register as Vendor</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 ">Social</h4>
            <ul className="space-y-2 text-brand-cream">
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-gradient " />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-gradient " />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-gradient  " />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-brand-gradient " />
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8   text-gray-400">
          <p>© Copyright 2025 Fatafat Service</p>
        </div>
      </div>
    </footer>
  );
}
