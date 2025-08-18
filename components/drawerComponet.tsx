"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Image from "next/image";

import { drawers } from "@/data/drawers";

export function DrawerComponent() {
  return (
    <>
      {drawers.map((drawer) => (
        <Drawer key={drawer.id}>
          <DrawerTrigger
            className="w-full lg:w-[calc(33.3%-1rem)] 
               bg-no-repeat bg-center bg-cover
               p-4 cursor-pointer rounded-lg text-xl"
            style={{
              backgroundImage: `url(${drawer.imagem})`,
            }}
          >
            <p>{drawer.title}</p>
            <p>{drawer.open}</p>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Image
                src={drawer.imagem}
                className="mx-auto lg:h-[25rem]"
                width={500}
                height={500}
                alt={drawer.imagem}
              />
              <DrawerTitle className="text-xl">{drawer.title}</DrawerTitle>
              <DrawerDescription className="text-lg">
                {drawer.description}
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-fit mx-auto text-md cursor-pointer"
                >
                  {drawer.close}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </>
  );
}
