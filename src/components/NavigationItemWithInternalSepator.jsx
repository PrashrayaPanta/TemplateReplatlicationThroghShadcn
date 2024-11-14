import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export default function NavigationMenuWithInternalSeparators() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-2">
              <NavigationMenuLink
                className="block p-2 hover:text-red-400"
                href="/item-one/sub-1"
              >
                Sub-item 1
              </NavigationMenuLink>
              <Separator className="my-2" />
              <NavigationMenuLink
                className="block p-2 hover:text-red-400"
                href="/item-one/sub-2"
              >
                Sub-item 2
              </NavigationMenuLink>
              <Separator className="my-2" />
              <NavigationMenuLink
                className="block p-2 hover:text-red-400"
                href="/item-one/sub-3"
              >
                Sub-item 3
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className="block p-2 hover:bg-accent"
            href="/about"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
