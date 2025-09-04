// "use client";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { appliancesData } from "@/data/constants";
// import { ChevronRight } from "lucide-react";

// const RenderNestedItems = ({ items, level = 0 }) => {
//   const handleItemClick = (item: any) => {
//     console.log(`Selected: ${item.title}`);
//     // Handle navigation or selection logic here
//   };

//   return (
//     <div className="space-y-1">
//       {items?.map((item: any) => {
//         if (item.isLeaf) {
//           return (
//             <button
//               key={item.id}
//               onClick={() => handleItemClick(item)}
//               className={`w-full flex items-center cursor-pointer p-3 text-left hover:bg-blue-50 transition-colors rounded-md group ${
//                 level > 0 ? "ml-4 border-l-2 border-gray-100 pl-6" : ""
//               }`}
//             >
//               {item.icon && (
//                 <item.icon className="w-4 h-4 text-gray-500 mr-3 group-hover:text-blue-600" />
//               )}
//               <span className="text-gray-700 group-hover:text-blue-700 font-medium">
//                 {item.title}
//               </span>
//             </button>
//           );
//         }

//         return (
//           <Collapsible key={item.id} className={`${level > 0 ? "ml-4" : ""}`}>
//             <CollapsibleTrigger className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors rounded-md border border-gray-200 group">
//               <div className="flex items-center space-x-3">
//                 {item.icon && (
//                   <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
//                 )}
//                 <span className="font-medium  text-gray-900 group-hover:text-blue-700">
//                   {item.title}
//                 </span>
//               </div>
//               <ChevronRight className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-90" />
//             </CollapsibleTrigger>

//             <CollapsibleContent className="mt-2 ml-4 border-l-2 border-gray-100 pl-4">
//               <RenderNestedItems items={item.items} level={level + 1} />
//             </CollapsibleContent>
//           </Collapsible>
//         );
//       })}
//     </div>
//   );
// };

// const AppliancesPage = () => {
//   return (
//     <>
// <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
//   Find Your Appliance
// </h1>

//       <div className="max-w-[40rem]  mb-10 md:mb-20   mx-auto">
//         <Accordion type="multiple" className="space-y-4">
//           {appliancesData.map((category) => (
//             <AccordionItem
//               key={category.id}
//               value={category.id}
//               className="border border-gray-200 cursor-pointer rounded-lg px-0"
//             >
//               <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg data-[state=open]:rounded-b-none">
//                 <div className="flex items-center space-x-3">
//                   <category.icon className="w-6 h-6 text-gray-600" />
//                   <span className="text-lg font-semibold text-gray-900">
//                     {category.title}
//                   </span>
//                 </div>
//               </AccordionTrigger>

//               <AccordionContent className="px-6 py-4 bg-gray-50 rounded-b-lg">
//                 <RenderNestedItems items={category.items} />
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </>
//   );
// };

// export default AppliancesPage;

// TYPE 02  we can explore dost!

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { appliancesData } from "@/data/constats";
import { appliancesData, type ApplianceItem } from "@/data/constants";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RenderNestedItemsProps {
  items: ApplianceItem[];
  level?: number;
  onItemSelect?: (item: ApplianceItem) => void;
}

const RenderNestedItems = ({
  items,
  level = 0,
  onItemSelect,
}: RenderNestedItemsProps) => {
  const router = useRouter();

  const handleItemClick = (item: ApplianceItem) => {
    console.log(`Selected: ${item.title}`);

    if (item.isLeaf && item.slug) {
      // Navigate to the appliance listing page
      router.push(`/appliances/${item.slug}`);
      onItemSelect?.(item);
    }
  };

  return (
    <div className="space-y-1">
      {items?.map((item: ApplianceItem) => {
        if (item.isLeaf) {
          const content = (
            <div
              className={`w-full flex items-center cursor-pointer p-3 text-left hover:bg-blue-50 transition-colors rounded-md group ${
                level > 0 ? "ml-4 border-l-2 border-gray-100 pl-6" : ""
              }`}
            >
              {item.icon && (
                <item.icon className="w-4 h-4 text-gray-500 mr-3 group-hover:text-blue-600" />
              )}
              <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                {item.title}
              </span>
            </div>
          );

          // If item has a slug, make it a Link, otherwise a button
          if (item.slug) {
            return (
              <Link
                key={item.id}
                href={`/appliances/${item.slug}`}
                onClick={() => onItemSelect?.(item)}
              >
                {content}
              </Link>
            );
          } else {
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="w-full"
              >
                {content}
              </button>
            );
          }
        }

        return (
          <Collapsible key={item.id} className={`${level > 0 ? "ml-4" : ""}`}>
            <CollapsibleTrigger className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors rounded-md border border-gray-200 group">
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                )}
                <span className="font-medium text-gray-900 group-hover:text-blue-700">
                  {item.title}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-90" />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 ml-4 border-l-2 border-gray-100 pl-4">
              <RenderNestedItems
                items={item.items || []}
                level={level + 1}
                onItemSelect={onItemSelect}
              />
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

// Mobile Navigation Sheet Component
const MobileAppliancesSheet = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemSelect = () => {
    setIsOpen(false); // Close sheet when item is selected
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left" className="w-[350px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Find Your Appliance</SheetTitle>
          <SheetDescription>
            Browse categories and select the appliance you're looking for.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 h-full overflow-y-auto">
          <Accordion type="multiple" className="space-y-4">
            {appliancesData.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-gray-200 cursor-pointer rounded-lg px-0"
              >
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 rounded-t-lg data-[state=open]:rounded-b-none">
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-base font-semibold text-gray-900">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 py-3 bg-gray-50 rounded-b-lg">
                  <RenderNestedItems
                    items={category.items}
                    onItemSelect={handleItemSelect}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Desktop Navigation Component
const DesktopAppliancesNavigation = () => {
  return (
    <div className="max-w-[40rem] mb-10 md:mb-20 mx-auto">
      <Accordion type="multiple" className="space-y-4">
        {appliancesData.map((category) => (
          <AccordionItem
            key={category.id}
            value={category.id}
            className="border border-gray-200 cursor-pointer rounded-lg px-0"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg data-[state=open]:rounded-b-none">
              <div className="flex items-center space-x-3">
                <category.icon className="w-6 h-6 text-gray-600" />
                <span className="text-lg font-semibold text-gray-900">
                  {category.title}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-4 bg-gray-50 rounded-b-lg">
              <RenderNestedItems items={category.items} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const AppliancesPage = () => {
  return (
    <>
      <div className="flex items-center md:justify-center px-4 md:px-1 justify-between md:mb-20 mb-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
          Find Your Appliance
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MobileAppliancesSheet>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </MobileAppliancesSheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <DesktopAppliancesNavigation />
      </div>

      {/* Mobile Navigation - Show categories in a more compact way */}
      <div className="md:hidden">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Tap the menu button above to browse categories
          </p>

          {/* Quick Access Cards for Mobile */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {appliancesData.slice(0, 4).map((category: any) => (
              <MobileAppliancesSheet key={category.id}>
                <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <category.icon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">
                    {category.title}
                  </p>
                </div>
              </MobileAppliancesSheet>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliancesPage;
