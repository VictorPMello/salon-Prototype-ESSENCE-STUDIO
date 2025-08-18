"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { useState } from "react";

export function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className="z-60 size-8 lg:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </Button>

      <NavigationMenu
        className={`
          lg:block lg:h-auto lg:p-4 lg:static
          absolute z-50 top-0 right-0
          h-screen w-full 
          bg-background text-center p-4 pt-16
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          lg:translate-x-0
        `}
      >
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-col lg:flex-row">
            <NavigationMenuLink className="cursor-pointer text-xl">
              Serviços
            </NavigationMenuLink>
            <NavigationMenuLink className="cursor-pointer text-xl">
              Galeria
            </NavigationMenuLink>
            <NavigationMenuLink className="cursor-pointer text-xl">
              Sobre
            </NavigationMenuLink>
            <NavigationMenuLink className="cursor-pointer text-xl">
              Contato
            </NavigationMenuLink>
            <NavigationMenuLink className="cursor-pointer uppercase text-xl">
              Agendar Horário
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
