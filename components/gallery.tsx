import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DrawerComponent } from "./drawerComponet";

export function Gallery() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl">Transformações que Inspiram</h1>
      <h3 className="text-xl">
        Cada cliente é única, cada resultado é uma obra de arte
      </h3>
      <Button variant="outline">Ver Todas as Transformações</Button>

      <Card className="w-full">
        <CardContent className="flex flex-wrap justify-between items-center gap-4 text-center [&>*:last-child]:mx-auto">
          <DrawerComponent />
        </CardContent>
      </Card>
    </section>
  );
}
