import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import { useCoruselButtons } from "./useCarouselButtons";

type PropType = { options?: EmblaOptionsType; children: ReactNode };

const Swapper = ({ options, children }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCoruselButtons(emblaApi);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      {children}
    </div>
  );
};

export default Swapper;
