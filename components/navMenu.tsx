import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex">
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
  );
}
