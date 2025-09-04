// components/navigation.tsx

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CircleQuestionMark,
  CircleUserRound,
  MapPin,
  Menu,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  return (
    <header className="border-b bg-white relative z-50">
      <div className="flex items-center justify-between px-4 md:px-6   py-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            className="dark:invert contain "
            src={`/logo.svg`}
            width={125}
            height={40}
            alt="image-logo"
          />
        </Link>

        <div className="flex items-center  justify-center space-x-2 w-full ">
          <div className="hidden md:block relative">
            {/* Location Icon */}
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />

            <Select defaultValue="hyderabad">
              <SelectTrigger className="w-[208px] pl-10">
                {" "}
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2   -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for appliances, services..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-5 ">
            <CircleQuestionMark className="w-6 h-6 cursor-pointer  text-slate-500 " />

            <CircleUserRound className="w-6 h-6 cursor-pointer text-slate-500 " />

            <Menu className="w-6 h-6 cursor-pointer text-slate-500 " />
          </div>

          <div className="md:hidden">
            <Menu className="w-6 h-6 cursor-pointer text-slate-500 " />
          </div>
        </div>
      </div>
    </header>
  );
}
