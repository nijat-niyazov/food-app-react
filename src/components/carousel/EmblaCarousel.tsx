import { order_food } from "@/assets/images";
import { Answer } from "@/services/api";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

type PropType = { data: Answer["answer"]; slides: number[]; options?: EmblaOptionsType };

const EmblaCarousel = ({ data, slides, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="flex">
        {data.map(({ title, content }, i) => {
          return (
            <li key={i} className="flex-[0_0_100%] min-w-0 flex flex-col items-center rounded-xl bg-faq p-6 md:w-1/3">
              <h3 className="font-bold text-lg">{title}</h3>
              <img src={order_food} alt="" className="w-32 h-32 object-cover" />
              <span className="text-base font-medium text-justify">{content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  // const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  // const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  // return (
  //   <section className="embla">
  //     <div className="embla__viewport" ref={emblaRef}>
  //       <div className="embla__container">
  //         {slides.map((index) => (
  //           <div className="embla__slide" key={index}>
  //             <div className="embla__slide__number">{index + 1}</div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //     <div className="embla__controls">
  //       <div className="embla__buttons">
  //         <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
  //         <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
  //       </div>

  //       <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
  //     </div>
  //   </section>
  // );
};

export default EmblaCarousel;
