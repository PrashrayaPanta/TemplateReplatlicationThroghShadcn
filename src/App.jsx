import { useState } from "react";
import Image1 from "./assets/image-1.jpg";

import "./App.css";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Image2 from "./assets/Lasith-Malinga.jpg";

import Image3 from "./assets/yblt66.jpeg";

import NavigationMenuWithInternalSeparators from "./components/NavigationItemWithInternalSepator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Header from "./components/Header";

export default function CardWithForm() {
  // const isDiscount = false;

  const product1 = {
    isDiscount: true,
    price: 200,
    discountedPrice: 100,
  };

  const product2 = {
    isDiscount: true,
    price: 200,
    discountedPrice: 0,
  };

  const product3 = {
    isDiscount: true,
    price: 200,
    discountedPrice: 0,
  };

  return (
    <>
      <Header />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-32">
        <Card className="py-2 text-center ">
          <div>
            <img src={Image1} className="" />
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="transition-colors duration-300 ">
              Sony Alpha DSLR Camera
            </h1>
            <div className="-yellow-500">
              {product1.discountedPrice > 0 ? (
                <>
                  <span className="line-through">{product1.price}</span>
                  <br />
                  <span>{product1.discountedPrice}</span>
                </>
              ) : (
                <span>{product1.price}</span>
              )}
            </div>
            <div className="-blue-500">
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>

        <Card className="py-2 text-center -black">
          <img src={Image1} className="" />
          <div className=" flex flex-col gap-5">
            <h1>Sony Alpha DSLR Camera</h1>
            <div
              className={` ${product2.discountedPrice <= 0 ? "mt-3" : null}`}
            >
              {product2.discountedPrice > 0 ? (
                <>
                  <span className="line-through">{product2.price}</span>
                  <br />
                  <span className="">{product2.discountedPrice}</span>
                </>
              ) : (
                <span className="">{product2.price}</span>
              )}
            </div>
            <div class={` ${product2.discountedPrice <= 0 ? "mt-3" : null}`}>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>

        <Card className="py-2 text-center -black">
          <img src={Image1} className="" />
          <div className=" flex flex-col gap-5">
            <h1>Sony Alpha DSLR Camera</h1>
            <div
              className={` ${product3.discountedPrice <= 0 ? "mt-3" : null}`}
            >
              {product3.discountedPrice > 0 ? (
                <>
                  <span className="line-through">{product3.price}</span>
                  <br />
                  <span className="">{product3.discountedPrice}</span>
                </>
              ) : (
                <span className="">{product3.price}</span>
              )}
            </div>
            <div class={` ${product2.discountedPrice <= 0 ? "mt-3" : null}`}>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>

        <Card className="py-2 text-center">
          <img src={Image1} className="" />
          <div className="flex flex-col gap-5 ">
            <h1>Sony Alpha DSLR Camera</h1>
            <div>
              <h1>$500</h1>
              <h1>$500</h1>
            </div>
            <div>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>

        <Card className="py-2 text-center">
          <img src={Image1} className="" />
          <div className="flex flex-col gap-5 ">
            <h1>Sony Alpha DSLR Camera</h1>
            <div>
              <h1>$500</h1>
              <h1>$500</h1>
            </div>
            <div>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>
        <Card className="py-2 text-center">
          <img src={Image1} className="" />
          <div className="flex flex-col gap-5 ">
            <h1>Sony Alpha DSLR Camera</h1>
            <div>
              <h1>$500</h1>
              <h1>$500</h1>
            </div>
            <div>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </Card>
      </div>

      <h1 class="py-2 text-4xl font-bold"> Baeutiful Image Gallery</h1>

      {/* <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="-blue-500 border rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-tranform duration-30">
            <img
              src={Image3}
              alt="Laith Malinga photo"
              srcset=""
              className="w-full max-h-[272px] object-cover"
            />
          </div>
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
          <img src={Image2} alt="Laith Malinga photo" srcset="" />
        </div>
      </div> */}
    </>
  );
}
