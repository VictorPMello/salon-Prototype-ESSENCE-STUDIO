import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

import { reviews } from "@/data/reviews";

export function TestimonialsSection() {
  return (
    <Carousel className="w-6/7 p-4 lg:p-0 lg:w-2/5">
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <Card>
              <CardTitle>
                <Avatar className="h-20 w-20 mx-auto bg-ring">
                  <Quote className="w-8 h-8 text-white m-auto" />
                </Avatar>
                <div className="flex gap-2 mt-2 text-xl justify-center items-center">
                  {Array.from({ length: 5 }, (_, i: number) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.star ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </CardTitle>
              <CardContent className="flex text-center items-center justify-center">
                {review.description}
              </CardContent>
              <CardFooter className="flex gap-4 justify-center">
                <Avatar className="lg:h-20 lg:w-20">
                  <AvatarImage src={review.image} />
                </Avatar>
                <div className="flex flex-col">
                  <p>{review.name}</p> <span>{review.age}</span>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:inline-flex cursor-pointer" />
      <CarouselNext className="hidden lg:inline-flex cursor-pointer" />
    </Carousel>
  );
}
