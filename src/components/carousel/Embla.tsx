import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/utils";
import { ReactNode } from "react";
import { useCoruselButtons } from "../ui/swapper/useCarouselButtons";
import "./css/style.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  children?: ReactNode;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCoruselButtons(emblaApi);

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 items-start">
          {slides.map((index) => (
            <div className="flex-[0_0_100%] min-w-0 bg-amber-900 -pl-4 border-2 embla__slide " key={index}>
              <div className={cn(`text-5xl font-semibold flex items-center justify-center h-${40 * index} `)}>
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
