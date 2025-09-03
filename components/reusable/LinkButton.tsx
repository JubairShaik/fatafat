// components/LinkButton.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LinkButtonProps {
  title: string;
  href: string;
}

export function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <div className="text-center cursor-pointer">
      <Link href={href}>
        <Button
          className="bg-gradient-to-r text-center  cursor-pointer from-purple-500 to-pink-500 
                          hover:from-purple-600 hover:to-pink-600 
                          text-white px-8 py-3 rounded-md  font-semibold"
        >
          {title}
        </Button>
      </Link>
    </div>
  );
}
