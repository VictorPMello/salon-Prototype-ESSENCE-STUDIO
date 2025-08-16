import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function CarouselComponent() {
  return (
    <>
      <h1 className="text-center text-2xl">Expertise Comprovada</h1>
      <h3 className="text-center text-xl">
        Nossa equipe possui as principais certificações do mercado
      </h3>

      <Carousel className="w-full max-w-xs text-center">
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h4 className="text-2xl font-bold">500+</h4>
            <p>Clientes Satisfeitas</p>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h4 className="text-2xl font-bold">8</h4>
            <p>Anos de Experiência</p>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h4 className="text-2xl font-bold">15</h4>
            <p>Certificações Internacionais</p>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h4 className="text-2xl font-bold">95%</h4>
            <p>Índice de Satisfação</p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
      <h1 className="text-center text-2xl">Certificações Internacionais</h1>

      <Card className="flex flex-row w-5/6">
        <div className="flex flex-row-reverse justify-center items-center w-1/3">
          <CardHeader className="w-5/6">
            <CardTitle>L{"'"}Oréal Professional Certified</CardTitle>
            <CardDescription>
              Certificação em colorimetria avançada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </CardContent>
        </div>

        <div className="flex flex-row-reverse justify-center items-center w-1/3">
          <CardHeader className="w-5/6">
            <CardTitle>L{"'"}Oréal Professional Certified</CardTitle>
            <CardDescription>
              Certificação em colorimetria avançada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </CardContent>
        </div>

        <div className="flex flex-row-reverse justify-center items-center w-1/3">
          <CardHeader className="w-5/6">
            <CardTitle>L{"'"}Oréal Professional Certified</CardTitle>
            <CardDescription>
              Certificação em colorimetria avançada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar className="h-20 w-20 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
