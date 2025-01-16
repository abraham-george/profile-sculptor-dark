import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReactNode } from "react";

interface CarouselSectionProps {
  title: string;
  children: ReactNode;
}

export const CarouselSection = ({ title, children }: CarouselSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {children}
          </CarouselContent>
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <CarouselPrevious className="relative left-0" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <CarouselNext className="relative right-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};