"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavigationMenuWithInternalSeparators from "./NavigationItemWithInternalSepator";

const SHEET_SIDES = ["left"];

export function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="grid gap-4 py-4">
              <NavigationMenuWithInternalSeparators />
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
