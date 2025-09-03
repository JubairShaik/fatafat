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
import { appliancesData } from "@/data/constats";
import { ChevronRight } from "lucide-react";

const RenderNestedItems = ({ items, level = 0 }) => {
  const handleItemClick = (item: any) => {
    console.log(`Selected: ${item.title}`);
    // Handle navigation or selection logic here
  };

  return (
    <div className="space-y-1">
      {items?.map((item: any) => {
        if (item.isLeaf) {
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
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
            </button>
          );
        }

        return (
          <Collapsible key={item.id} className={`${level > 0 ? "ml-4" : ""}`}>
            <CollapsibleTrigger className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors rounded-md border border-gray-200 group">
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                )}
                <span className="font-medium  text-gray-900 group-hover:text-blue-700">
                  {item.title}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-90" />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 ml-4 border-l-2 border-gray-100 pl-4">
              <RenderNestedItems items={item.items} level={level + 1} />
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

const AppliancesPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Find Your Appliance
      </h1>

      <div className="max-w-[40rem]  mb-10 md:mb-20   mx-auto">
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
    </>
  );
};

export default AppliancesPage;
