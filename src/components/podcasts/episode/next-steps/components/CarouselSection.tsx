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
          <div className="relative">
            <CarouselContent className="-ml-2 md:-ml-4">
              {children}
            </CarouselContent>
            <div className="absolute left-0 top-0 bottom-0 flex items-center">
              <CarouselPrevious className="relative h-8 w-8 translate-x-2 bg-white/70 hover:bg-white/90" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center">
              <CarouselNext className="relative h-8 w-8 -translate-x-2 bg-white/70 hover:bg-white/90" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};