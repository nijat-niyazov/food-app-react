import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useEffect } from "react";

type PropType = { options?: EmblaOptionsType; children: ReactNode };

const MainEmblaCarousel = ({ options, children }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      {children}
    </div>
  );
};

export default MainEmblaCarousel;
