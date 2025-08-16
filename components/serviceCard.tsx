import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { services } from "@/data/service";

export function ServiceCard() {
  return (
    <>
      {services.map((service) => (
        <Card
          key={service.id}
          className="flex flex-col w-md h-auto text-center"
        >
          <CardHeader className="flex-1">
            <CardTitle className="text-2xl">{service.title}</CardTitle>
            <CardDescription className="text-xl">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{service.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full cursor-pointer">{service.button}</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
