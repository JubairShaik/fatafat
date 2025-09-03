import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

// Breadcrumb Components
const Breadcrumb = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
    {children}
  </nav>
);

const BreadcrumbItem = ({
  children,
  href,
  isLast = false,
}: {
  children: React.ReactNode;
  href?: string;
  isLast?: boolean;
}) => (
  <>
    {href ? (
      <Link
        href={href}
        className="hover:text-blue-600 transition-colors flex items-center"
      >
        {children}
      </Link>
    ) : (
      <span
        className={`flex items-center ${
          isLast ? "text-blue-600 font-medium" : ""
        }`}
      >
        {children}
      </span>
    )}
  </>
);

const BreadcrumbSeparator = () => <span className="text-gray-400">/</span>;

export default function AppliancesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb - Consistent across all appliance pages */}
      <Breadcrumb>
        <BreadcrumbItem href="/">
          <Home className="w-4 h-4" />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem isLast>Appliances</BreadcrumbItem>
      </Breadcrumb>

      {children}
    </div>
  );
}
