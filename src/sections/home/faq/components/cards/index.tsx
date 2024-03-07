import { order_food } from "@/assets/images";
import { CustomButton } from "@/components/ui";
import { Answer } from "@/services/api";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";

type Props = { answers: Answer["answer"] };

useEmblaCarousel.globalOptions = { loop: true };

const CardsOfFaq = ({ answers }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" }, [Autoplay()]);

  const scrollTo = useCallback(
    (direction?: "next") => {
      if (emblaApi) {
        if (direction === "next") emblaApi.scrollNext();
        else emblaApi.scrollPrev();
      }
    },
    [emblaApi]
  );

  return (
    <div className="grid content-between">
      <div className="overflow-hidden " ref={emblaRef}>
        <ul className="flex ">
          {answers.map(({ title, content }, i) => {
            return (
              <li key={i} className="flex-[0_0_400px] min-h-40 flex flex-col items-center rounded-xl bg-faq p-6 mr-10 ">
                <h3 className="font-bold text-lg">{title}</h3>
                <img src={order_food} alt="" className="w-32 h-32 object-cover" />
                <span className="text-base font-medium text-justify">{content}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <CustomButton variant="secondary" className="w-1/2" onClick={() => scrollTo()}>
          Prev
        </CustomButton>
        <CustomButton variant="secondary" className="w-1/2" onClick={() => scrollTo("next")}>
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default CardsOfFaq;
